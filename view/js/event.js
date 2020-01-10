//点击加号 购物车数量变
var arr =[];
var num = 0;
var orderT = null;
//所有菜品订单的价钱
var sumMoney = $('.sumMoney').text();
var money = +sumMoney.replace(/[^\d.]/g,"");
var  MumMoney = 0;
//加入购物车
$('.right-list').on('click','.addToCar',function () {
    var count = 0;
    num++;
    count++;
    $('.dot').text(num);
    //取到对应的菜品和价格，将他们和点击次数一起存入数组中
    var name = $(this).parent().children()[0].innerHTML;
    var str = $(this).parent().children()[1].innerHTML;
    var price = str.replace(/[^\d.]/g,"");
    //渲染价钱
    money = money + (Number(price));
    MumMoney = Number(parseFloat(money ).toFixed(2));
    $('.sumMoney').html('￥'+  MumMoney  );
    //将信息存入对象中，再存入数组中，如果对象里的name存在，则将count直接加1，
    // 如果不存在，则count置为1，将name存入对象
    var obj1 = {
        "name":name,
        "price":price,
        "count":count
    }
    arr.push(obj1);
    //看看数组里重复的值有几个，并统计出重复值，存入一个新的数组里，
    for (var i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length;) {
            if (arr[i].name === arr[j].name){
                arr[i].count += arr[j].count;
                arr.splice(j,1);
            }else {
                j++;
            }
        }
    }
    return false;
},)


//点击购物车出现已经加入购物车的商品
$('.car').click(function () {

    var isDisplay = $('.carList').css('display');
    // console.log($('.carList').css('display'))
   if (isDisplay === 'none'){
       $('.carList').css('display','block');
   }else {
       $('.carList').css('display','none');
   }
   renderCar(arr);
   carFunc();
})
//渲染购物车
function renderCar(arr) {
    var str = '';
    arr.forEach(function (item) {
        str += "<li> \
                        <div class='container'>\
                            <p class='mealName'>"+item.name+"</p>\
                            <p class='allprice'>￥"+item.price+"</p>\
                            <div class='optNum'>\
                                <button class='subtract'>-</button>\
                                <p class='count'>"+item.count+"</p>\
                                <button class='plus'>+</button>\
                            </div>\
                        </div>\
                    </li>";
    })
    $('.carMealList').html(str);
}



// 购物车里面，点击加减号，改变数量和价钱
function carFunc() {
   add();
   subtract();
}
function add() {
    var plusArr = $('.plus');
    for (var i = 0; i < plusArr.length; i++) {
        $(plusArr[i]).click(function () {
            var curPrice =  Number(this.parentElement.parentElement.getElementsByClassName('allprice')[0].innerHTML.replace(/[^\d.]/g,""));
            var count = Number(this.previousElementSibling.innerHTML);
            count++;
            num++;
            $('.dot').text(num);
            this.previousElementSibling.innerHTML = count;
            MumMoney += curPrice;
            $('.sumMoney').html('￥'+  parseFloat(MumMoney).toFixed(2)  );
            $('.s2').html(parseFloat(MumMoney).toFixed(2));
        })
    }
}
function subtract() {
    var subtractArr = $('.subtract');
    for (var i = 0; i < subtractArr.length; i++) {
        $(subtractArr[i]).click(function () {
            var curPrice =  Number(this.parentElement.parentElement.getElementsByClassName('allprice')[0].innerHTML.replace(/[^\d.]/g,""));
            var count = Number(this.nextElementSibling.innerHTML);
            count--;
            num--;
            if (num <=0){
                num = 0;
            }
            $('.dot').text(num);
            //当数量为0时，从购物车里移出去
            if (count > 0){
                this.nextElementSibling.innerHTML = count;
            }
            else{
                $(this.parentElement.parentElement.parentElement).remove();
            }
            MumMoney -= curPrice;
            if (MumMoney <= 0){
                MumMoney = 0;
                $('.sumMoney').html('￥'+ MumMoney);
            }else{
                $('.sumMoney').html('￥'+  parseFloat(MumMoney).toFixed(2)  );
            }
        })
    }
}

//去结算
$('.goToMoney').click(function (e) {
    window.location.href = 'order.html?MumMoney='+MumMoney;
    e.preventDefault();
})

//订单信息
//上餐时间
function getDate() {
    // 53+30=16:27,
    //     53+30=83 83-60 = 23
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if (minute + 30 >= 60){
         hour += 1;
         minute =  (minute + 30)%60;
    }else {
        minute += 30;
    }
    var time = `${hour}:${minute.toString().padStart(2, '0')}`;

    $('#t').html(time);
}
getDate();


//拿取前一个页面传过来的数据并渲染到页面上
function getUrlData(){
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1){
        var str = url.substr(1);
        theRequest  =str.replace(/[^\d.]/g,"");
    }
    $('.s2').html('总计：￥' + parseFloat(theRequest).toFixed(2) );
    $('.waitPay').html('￥' + parseFloat(theRequest).toFixed(2));
    $('#payMoney').html('￥' + parseFloat(theRequest).toFixed(2));

}
getUrlData();

//支付
$('.submitOrder').click(function () {
    var isDisplay = $('.payWindow').css('display');
    if (isDisplay === 'none'){
        $('.payWindow').css('display','block');
    }
    //监听键盘上的enter键，enter了就代表支付成功了

})
$(document).keydown(function(event){
    if(event.keyCode === 13){
        // alert('你按下了Enter');
        $('.payWindow').css('display','none');
       window.location.href = "index.html";

    }
});

$('.iconfontPer').click(function () {
    var date = new Date();
    var hour = date.getHours().toString().padStart(2,'0');
    var minute = date.getMinutes().toString().padStart(2,'0');
    var seconds = date.getSeconds().toString().padStart(2,'0');
    orderT = `2020年1月8日${hour}:${minute}:${seconds}`;
    window.location.href="../php/personal.php?MumMoney="+MumMoney+"&orderTime="+orderT;
})

//我的订单的时间
function myOrder() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if(url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i++) {
            //就是这句的问题
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
            //之前用了unescape()
            //才会出现乱码
        }
    }
    $('.orderTime').html(`下单时间：${theRequest.orderTime}`);
    $('.orderPrice').html((`￥${theRequest.MumMoney}`));
}
myOrder();








