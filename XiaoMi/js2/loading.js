/**
 * Created by JOJO on 2021/5/19.
 */
var wwidth=window.innerWidth;
var wheight=window.innerHeight;
$("#contain").width=wwidth;
$("#contain").height=wheight;

$("#tj").click(function(){
    var uid=$("#uid").val();
    var pwd=$("#upwd").val();
    if(!uid){
        $("#uidts").html("账号不能为空");
        return false;
    }else{
        $("#uidts").html("");
    }
    if(!pwd){
       $("#pwdts").html("密码不能为空");
        return false;
    }else{
        $("#pwdts").html("");
    }
    if(uid!="admin" || pwd!="123456"){
        alert("账号或密码不正确")
        return false;
    }else{
        return true;
    }
})
$("#uid").blur(function(){
    var uid=$("#uid").val();
    if(!uid){
        $("#uidts").html("请输入您的账号");
    }else{
        $("#uidts").html("");
    }
})
$("#upwd").blur(function(){
    var pwd=$("#upwd").val();
    if(!pwd){
        $("#pwdts").html("密码不能为空");
    }else{
        $("#pwdts").html("");
    }
})
$(".mcenter-card ul li a:first").click(function(){
    $(".mcenter-login").css("display","none");
    $(".mcenter-table").css("display","block")
})
$(".mcenter-card ul li a:eq(1)").click(function(){
    $(".mcenter-table").css("display","none")
    $(".mcenter-login").css("display","block");

})
$("#mc-txphone").blur(
   function(){
       var txphone=$("#mc-txphone").val();
       var tpho=/^1[3|4|5|7|8][0-9]{9}$/;
       if(!tpho.test(txphone)){
           $("#phone-number").html("手机号码不正确")
       }else{
           $("#phone-number").html("");
       }
   }
)
$("#mc-message").blur(function(){
    var mes=$("#mc-message").val();
    var tmes=/^\d{6}$/;
    if(!tmes.test(mes)){
       $("#message-test").html("验证码不正确");
    }else{
       $("#message-test").html("");
    }
})

$("#mc-zc").click(function(){
    var txphone=$("#mc-txphone").val();
    var tpho=/^1[3|4|5|7|8][0-9]{9}$/;
    var mes=$("#mc-message").val();
    var tmes=/^\d{6}$/;
    if(!tpho.test(txphone)) {
        $("#phone-number").html("手机号码不正确")
        return false;
    }
    if(!tmes.test(mes)){
        $("#message-test").html("验证码不正确");
        return false;
    }
})