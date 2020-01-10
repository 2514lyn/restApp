<?php
$name = $_POST['name'];//post获得用户名表单值
$passowrd = $_POST['password'];//post获得用户密码单值
//连接数据库
if($name && $passowrd){
    $link=mysqli_connect("localhost","s17040116","17040116","s17040116");
    mysqli_query($link,"set names utf8");
    $query = "select * from user where username = '$name' and userpw='$passowrd'";//检测数据库是否有对应的username和password的sql
    $result=mysqli_query($link,$query);
//    while($row=mysqli_fetch_array($result)) {
//        $str = ("userid=" . $row["userid"] . ",username=" . $row["username"] . ",userpw=" . $row["userpw"] . "");
//        print($str);
//    }
    $rows=mysqli_fetch_array($result);//返回一个数值
    if($rows){//0 false 1 true
        header("refresh:0;url=../view/index.html");//如果成功跳转至index.html页面
        exit;
    }else{
        echo "用户名或密码错误";
        echo "
                    <script>
                            setTimeout(function(){window.location.href='login.html';},1000);
                    </script>

                ";//如果错误使用js 1秒后跳转到登录页面重试，让其从新进行输入
    }


}else{//如果用户名或密码有空
    echo "表单填写不完整";
    echo "
     <script>
        setTimeout(function(){window.location.href='login.html';},1000);
     </script>";
    //如果错误使用js 1秒后跳转到登录页面重试，让其从新进行输入

}







?>
