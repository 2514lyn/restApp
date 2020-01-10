<?php
header('Content-Type: application/json,charset=utf8');
$link=mysqli_connect("localhost","s17040116","17040116","s17040116");
mysqli_query($link,"set names utf8");
$query1="select * from soup";
$result1=mysqli_query($link,$query1);
$arr = [];
$i = 0;
while($row=mysqli_fetch_array($result1))
{
    $str=('{'
        .'"id":'.'"'.$row['id'].'"'.','
        .'"name":'.'"'.$row['name'].'"'.','
        .'"num":'.'"'.$row['num'].'"'.','
        .'"price":'.'"'.$row['price'].'"'.','
        .'"place":'.'"'.$row['place'].'"'.'}'
    );
    $arr[$i] = $str ;
    $i++;
}

$query2="select * from meat";
$result2=mysqli_query($link,$query2);
$i = count($arr);
while($row=mysqli_fetch_array($result2))
{
    $str=('{'
        .'"id":'.'"'.$row['id'].'"'.','
        .'"name":'.'"'.$row['name'].'"'.','
        .'"num":'.'"'.$row['num'].'"'.','
        .'"price":'.'"'.$row['price'].'"'.','
        .'"place":'.'"'.$row['place'].'"'.'}'
    );
    $arr[$i] = $str ;
    $i++;
}
$query3="select * from vegetable";
$result3=mysqli_query($link,$query3);
$i = count($arr);
while($row=mysqli_fetch_array($result3))
{
    $str=('{'
        .'"id":'.'"'.$row['id'].'"'.','
        .'"name":'.'"'.$row['name'].'"'.','
        .'"num":'.'"'.$row['num'].'"'.','
        .'"price":'.'"'.$row['price'].'"'.','
        .'"place":'.'"'.$row['place'].'"'.'}'
    );
    $arr[$i] = $str ;
    $i++;
}
$query4="select * from staple";
$result4=mysqli_query($link,$query4);
$i = count($arr);
while($row=mysqli_fetch_array($result4))
{
    $str=('{'
        .'"id":'.'"'.$row['id'].'"'.','
        .'"name":'.'"'.$row['name'].'"'.','
        .'"num":'.'"'.$row['num'].'"'.','
        .'"price":'.'"'.$row['price'].'"'.','
        .'"place":'.'"'.$row['place'].'"'.'}'
    );
    $arr[$i] = $str ;
    $i++;
}
$query5="select * from drink";
$result5=mysqli_query($link,$query5);
$i = count($arr);
while($row=mysqli_fetch_array($result5))
{
    $str=('{'
        .'"id":'.'"'.$row['id'].'"'.','
        .'"name":'.'"'.$row['name'].'"'.','
        .'"num":'.'"'.$row['num'].'"'.','
        .'"price":'.'"'.$row['price'].'"'.','
        .'"place":'.'"'.$row['place'].'"'.'}'
    );
    $arr[$i] = $str ;
    $i++;
}
echo json_encode($arr);
mysqli_close($link);

