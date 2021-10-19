//轮播
var arr=["轮播5.webp","轮播6.webp","轮播7.webp","轮播4.png","轮播8.jpg"]
$("#lunbo").attr("src","images/"+arr[0])
setInterval(function () {
    arr.push(arr.shift())
    $("#lunbo").attr("src","images/"+arr[0])
},3000)
//手机的隐藏和显示
$("#xm").hover(function () {
    $(".yc").show();
},function () {
    $(".yc").hide();
})
//红米手机的隐藏和显示
$("#hm").hover(function () {
    $(".ycyc").show();
},function () {
    $(".ycyc").hide();
})
//电视的隐藏和显示
$("#ds").hover(function () {
    $(".ds").show();
},function () {
    $(".ds").hide();
})
//笔记本的隐藏和显示
$("#bjbb").hover(function () {
    $(".bjb").show();
},function () {
    $(".bjb").hide();
})
//左边隐藏
$(".top-left1").hover(function(){
    $(".left1").show()
},function (){
    $(".left1").hide()
})
//商品的阴影
$(".xiatu1").hover(function (){
    $(this).addClass("yans")
},function (){
    $(this).removeClass("yans")
})
$(".xiatu1").hover(function (){
    $(this).addClass("yans")
},function (){
    $(this).removeClass("yans")
})

$(".xiatu2").hover(function (){
    $(this).addClass("yans")
},function (){
    $(this).removeClass("yans")
})

$(".xiatu3").hover(function (){
    $(this).addClass("yans")
},function (){
    $(this).removeClass("yans")
})

$(".xiatu4").hover(function (){
    $(this).addClass("yans")
},function (){
    $(this).removeClass("yans")
})
$(".xiatu5").hover(function (){
    $(this).addClass("yans")
},function (){
    $(this).removeClass("yans")
})

$("#one").hover(function () {
    $("#xl").show()
},function () {
    $("#xl").hide()
})
$("#xl").hover(function (){
    $("li").addClass("lxyans")
})




