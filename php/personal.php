<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>甄好吃麻辣烫</title>
    <!--头部适配-->
    <meta name="description" content=""/>
    <meta name="viewport" content="minimal-ui, initial-scale=1, width=device-width, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="full-screen" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">
    <meta name="keywords" content=""/>
    <!--单个自己写的css-->
    <link rel="stylesheet" href="../view/css/personal.css" />
    <!--全局样式(清除默认样式)-->
    <link rel="stylesheet" href="../view/css/main.css" />
</head>
<body>
<div class="pers">
<!--    头部-->
    <div class="head">
        <a href="../view/index.html" class="back-to-personal"></a>
        个人中心
    </div>
<!--    内容-->
    <div class="content-list">
<!--        头像资料-->
        <div class="head-photo">
<!--            头像-->
            <div class="photo"><img src="../view/img/3.jpg" alt=""></div>
<!--            个人签名和昵称-->
            <div class="per-data">
                <p class="nickname"><?php $dbh = new PDO("mysql:host=localhost;dbname=s17040116","s17040116","17040116");
					$dbh->exec("set names utf8");
					$query="select * from user";
					foreach($dbh->query($query) as $row){
						print ($row["username"]."<br>\n");	
	}
$dbh=null;?></p>
                <p class="signature"><?php $dbh = new PDO("mysql:host=localhost;dbname=s17040116","s17040116","17040116");
					$dbh->exec("set names utf8");
					$query="select * from user";
					foreach($dbh->query($query) as $row){
						print ($row["userphonenumber"]."<br>\n");	
	}
$dbh=null;?></p>
            </div>
        </div>
<!--        修改个人信息意见反馈等模块-->
        <div class="list">
            <ul>
                <li>
                    <a href="../view/update-personal-info.html" class="item">
                        <p class="li-one"><img src="../view/img/icon_update_personal_info.png" alt=""></p>
                        <p class="li-two">修改个人信息</p>
                        <p class="li-three"><img src="../view/img/icon_right_arrow.png" alt=""></p>
                    </a>
                </li>
                <li>
                    <button  class="item pub-border">
                        <p class="li-one"><img src="../view/img/1.png" alt=""></p>
                        <p class="li-two">我的订单</p>
                        <p class="li-three"><img src="../view/img/icon_right_arrow.png" alt=""></p>
                    </button>
                </li>
                <li>
                    <a href="../view/advice.html" class="item">
                        <p class="li-one"><img src="../view/img/advice.png" alt=""></p>
                        <p class="li-two">意见反馈</p>
                        <p class="li-three"><img src="../view/img/icon_right_arrow.png" alt=""></p>
                    </a>
                </li>
                <li>
                    <a href="../view/update-password.html" class="item">
                        <p class="li-one"><img src="../view/img/icon_update_passwd.png" alt=""></p>
                        <p class="li-two">修改密码</p>
                        <p class="li-three"><img src="../view/img/icon_right_arrow.png" alt=""></p>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</div>




<script src="../view/js/jquery-3.3.1.js"></script>
<script src="../view/js/zepto.min.js"></script>
<script src="../view/js/rem.js"></script>
<script>
    $('.pub-border').click(function () {

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
            // return theRequest;

        console.log(theRequest);
        window.location.href = "../view/myOrder.html?MumMoney="+theRequest.MumMoney+"&orderTime="+theRequest.orderTime;
    })
</script>
</body>
</html>
