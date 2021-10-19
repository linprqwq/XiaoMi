/**
 * Created by JOJO on 2021/6/7.
 */
$(".tits").next().css(
    "color","#ff6700"
)
$("#tphone").blur(function(){
    var  pho=$("#tphone").val();
    var tpho=/^1[3|4|5|7|8][0-9]{9}$/;
    if(!tpho.test(pho)){
        $("#titsbox").next().html("手机格式错误");
    }else{
        $("#titsbox").next().html("");
    }
})
$("#tj").click(function(){
    var  pho=$("#tphone").val();
    var tpho=/^1[3|4|5|7|8][0-9]{9}$/;
    if(!tpho.test(pho)){
        $("#titsbox").next().html("手机格式错误");
        return false;
    }
})