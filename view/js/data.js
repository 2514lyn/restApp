var arr1 = [];
var arr2 = [];
//获取数据
$.ajax({
    url:'../php/package.php',
    type:'get',
    success:function (res) {
        res.forEach(function (item,index) {
            var obj = JSON.parse(item);
            arr1.push(obj);
        })
        renderData(arr1);
        // console.log(arr1);
    }
})
$.ajax({
    url:'../php/getData.php',
    type:'get',
    success:function (res) {
        res.forEach(function (item,index) {
            // console.log(item,index)
            var obj = JSON.parse(item);
            arr2.push(obj);
        })
        renderSoupData(arr2);
        // console.log(arr2);
    }
})
//数据渲染 下面的
function renderSoupData(data){
    var ul = $('.right-list');
    data.forEach(function (ele,index) {
        var li = $('<li></li>');
        // var a = $('<a href="javascript:;"  class="mealA"></a>');
        //商品详细
        var mealInfo = $('<div class="mealInfo"></div>');

        var name = $('<p class="name"></p>');
        name.text(ele.name);
        mealInfo.append(name);

        var price = $('<span class="price"></span>');
        price.text('￥' + ele.price);
        mealInfo.append(price);
        //商品图片
        var mealImg = $('<div class="mealImg"></div>');
        var img = $('<img src="" alt="">');
        img.prop('src',ele.place);
        mealImg.append(img);
        li.append(mealImg);



        var addToCar = $(' <span class="addToCar"></span>');
        // var carImg = $('<img src="" alt="">');
        // carImg.prop('src',"./img/car.png");
        // addToCar.append(carImg);

        mealInfo.append(addToCar);

        li.append(mealInfo);
        // li.append(a);
        ul.append(li);
    })
}

//上面的吃的
function renderData(data){
    var ul = $('.right-list');
    data.forEach(function (ele,index) {
        var li = $('<li></li>');
        // var a = $('<a href="javascript:;" class="mealA"></a>');
        //商品详细
        var mealInfo = $('<div class="mealInfo"></div>');

        var name = $('<p class="name"></p>');
        name.text(ele.packagename);
        mealInfo.append(name);

        var price = $('<span class="price"></span>');
        price.text('￥' + ele.packageprice);
        mealInfo.append(price);
        //商品图片
        var mealImg = $('<div class="mealImg"></div>');
        var img = $('<img src="" alt="">');
        img.prop('src',ele.packageplace);
        mealImg.append(img);


        var discount = $('<p class="discount"></p>');
        discount.text(ele.packagediscount +'折' + ' ' + '每单限' + ele.packagelimit + '份');
        mealInfo.append(discount);

        var addToCar = $(' <span class="addToCar"></span>');
        mealInfo.append(addToCar);
        li.append(mealImg);
        li.append(mealInfo);
        // li.append(a);
        ul.append(li);
    })
}