

// 修改个人信息并提交
$('#submit-info').click(function () {
   $('.tips-box').css({
      'display':'block'
   })
   return false;
})
//修改用户密码
$('#submit-passwd').click(function () {
   $('.tips-box').css({
      'display':'block'
   })
   return false;
})
//用户提交意见反馈
$('#submit-adv').click(function () {
   $('.tips-box').css({
      'display':'block'
   })
   return false;
})

//点击确定或遮罩层，提示框消失
$('.mask').click(function () {
   $('.tips-box').css({
      'display':'none'
   })
})
$('#sure').click(function () {
   $('.tips-box').css({
      'display':'none'
   })
})



