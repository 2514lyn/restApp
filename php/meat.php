<?php
header('Content-Type: application/json,charset=utf8');
$link=mysqli_connect("localhost","s17040116","17040116","s17040116");
mysqli_query($link,"set names utf8");
$query="select * from meat";
$result=mysqli_query($link,$query);
$arr = [];
$i = 0;
while($row=mysqli_fetch_array($result))
{
    $str=('{'
        .'"meatid":'.'"'.$row['meatid'].'"'.','
        .'"meatname":'.'"'.$row['meatname'].'"'.','
        .'"meatnum":'.'"'.$row['meatnum'].'"'.','
        .'"meatprice":'.'"'.$row['meatprice'].'"'.','
        .'"meatplace":'.'"'.$row['meatplace'].'"'.'}'
    );
   $arr[$i] = $str ;
   $i++;
}
echo json_encode($arr);
mysqli_close($link);

