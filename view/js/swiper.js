(function () {
    function Swiper(options){
        //轮播图插入的位置
        this.wrap = options.wrap || $('body');
        //图片
        this.imgList = options.imgList;
        //轮播方式
        this.animateType = options.animateType;
        //有无左右按钮
        this.changeBtn = options.changeBtn;
        //有无小圆点
        this.showPointBtn = options.showPointBtn;
        //是否是自动轮播
        this.isAuto = options.isAuto;
        //图片的宽度和高度
        this.imgWidth = options.imgWidth || $(this.wrap).width();
        this.imgHeight = options.imgHeight || $(this.wrap).height();
        //图片的数量
        this.imgNum = this.imgList.length;
        //当前图片索引
        this.nowIndex = 0;
        //加个锁表示当前图片是否全部移出界限
        this.lock = true;
        //初始化
        this.init = function(){
            //创建轮播图结构
            this.createDom();
            //初始化轮播图样式
            this.initStyle();
            //事件
            this.bindEvent();
            this.changeImage();
            if (this.isAuto){
                this.autoChange();
            }
        }
    }
    Swiper.prototype.createDom = function(){
        var oUl = $('<ul class="swiper-wrap"></ul>');//轮播图
        var spotDiv = $('<div class="spot"></div>');//小圆点的div
        this.imgList.forEach(function (item) {//根据轮播图的数量确定li和小圆点的数量
            $('<li><a href="#"><img src=" '+ item + '"></a></li>').appendTo(oUl);
            $('<span></span>').appendTo(spotDiv);
        })
        if(this.animateType == 'animate'){
            // 如果是轮播，得插入第一张图片
            $('<li><a href="#"><img src="'+ this.imgList[0] + '"></a></a></li>').appendTo(oUl);
        }
        var leftBtn = $('<div class="btn left-btn">&lt</div>');
        var rightBtn = $('<div class="btn right-btn">&gt</div>')
        $(oUl).appendTo(this.wrap);//把ul插入到wrapper中
        if (this.changeBtn){//创建左右按钮
            $(this.wrap).append(leftBtn).append(rightBtn);
        }
        if (this.showPointBtn){//创建小圆点
            $(this.wrap).append(spotDiv);
        }
    }
    Swiper.prototype.initStyle = function(){
        $(this.wrap).css({
            position:'relative',
            overflow:'hidden'
        })
        $('*',this.wrap).css({
            listStyle:'none',
            textDecoration:'none',
            // position:'absolute',//注释解开定位就出错啦 绝对定位会脱离原来的文档流，就会发生重叠， absolute相对于的文档定位就是有relative的元素，如果没有，就找到了body
            padding:0,
            margin:0
        }).find('a').css({
            width:'100%',
            height:'100%',
            display:'inline-block'
        })
        $('img',this.wrap).css({//图片
            width:'100%',
            height:'100%'
        })
        if (this.animateType =="animate"){
            //轮播图的样式
            $('.swiper-wrap',this.wrap).css({
                width:( this.imgNum + 1 )* this.imgWidth,//图片数量 *图片宽度
                height:this.imgHeight,//图片的高度
                position: 'absolute',
                // margin: 0,
                // padding: 0
            }).find('li').css({
                width:this.imgWidth,
                height: this.imgHeight,
                float:'left',
            })
        } else{//fade样式
            $('.swiper-wrap',this.wrap).css({
                position:'relative',
                // height:'2rem'
            }).find('li').css({
                width:this.imgWidth,
                height:this.imgHeight,
                display:'none',
                position: 'absolute',
                left:0,
                // top:-16,
                top: 0
                // padding: 0,
                // margin: 0
            }).eq(this.nowIndex).css({
                display: 'block'
            })
        }
        $('.btn',this.wrap).css({//左右按钮
            position:'absolute',
            top:'50%',
            marginTop:-15,
            color:'#ffffff',
            width:50,
            height:30,
            lineHeight:'30px',//得加引号，否则理解为30倍,
            textAlign:'center',
            backgroundColor:'rgba(0, 0, 0, 0.5)',
            cursor:'pointer',
            opacity:0
        }).filter('.right-btn').css({
            right:0
        })
        $('.spot',this.wrap).css({//小圆点样式
            width:'100%',
            position:'absolute',
            bottom:10,
            textAlign: 'center',
            cursor: 'pointer'
        })
        $('.spot > span',this.wrap).css({
            display:'inline-block',
            width:10,
            height:10,
            borderRadius:'50%',
            margin:'0 5px',
           backgroundColor:'#ffffff'
        }).eq(this.nowIndex).css({
            backgroundColor:'red'
        })
    }
    Swiper.prototype.bindEvent = function(){
        var self = this;
        //点击左按钮触发事件
        $('.left-btn',self.wrap).click(function(){
            if (!self.lock){
                return false;
            }
            //判断是否是第一张图片
            if (self.nowIndex == 0) {//是
                if (self.animateType == 'animate'){
                    ('.swiper-wrap',self.wrap).css({
                        left: -self.imgNum * self.imgWidth
                    })
                }
                self.nowIndex = self.imgNum - 1;

            }else{
                self.nowIndex--;
            }
            self.changeImage();
        })
        $('.right-btn',self.wrap).click(function(){
            if (!self.lock){
                return false;
            }
            //判断是否是最后一张图片
            if (self.animateType == "fade" && self.nowIndex == self.imgNum - 1) {//是最后一张，立马跳到第一张
                 self.nowIndex = 0;
            }else if (self.animateType == "animate" && self.nowIndex == self.imgNum){
                $('ul',self.wrap).css({
                    left:0
                })
                self.nowIndex = 1;
            }else {
                self.nowIndex ++;
            }
            self.changeImage();
        })
        $('.spot > span',self.wrap).click(function () {
            if (!self.lock){
                return false;
            }
            self.nowIndex = $(this).index();
            self.changeImage();
        })
        $(this.wrap).mouseenter(function () {//自动轮播设置
            clearInterval(self.timer);
        }).mouseleave(function () {
           if(self.isAuto){
               self.autoChange();
           }
        })
    }
    Swiper.prototype.changeImage = function(){
        var self = this;
        self.lock = false;
        if (self.animateType == "animate") {
            $('.swiper-wrap', self.wrap).animate({
                left: -self.imgWidth * self.nowIndex,
            },function () {
                self.lock = true;
            })
        }else{
            $('ul > li',self.wrap).fadeOut().eq(self.nowIndex).fadeIn(function () {
                self.lock = true;
            });
        }
        $('.spot > span',self.wrap).css({//小圆点颜色变化
            backgroundColor:'#ffffff'
        }).eq(self.nowIndex % self.imgNum).css({
            backgroundColor:'red'
        })
    }
    Swiper.prototype.autoChange = function(){
        var timer = setInterval(function () {
            var self = this;
            $('.right-btn',self.wrap).click();
        },2000)
    }
    //实例方法
    $.fn.extend({
        swiper:function(options){
            options.wrap = this;
            var obj = new Swiper(options);
            obj.init();
        }
    })
}());