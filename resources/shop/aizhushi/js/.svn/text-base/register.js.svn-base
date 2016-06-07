
var delayTime = 120;
var delayFlag = true;
var r_time_out=null;
//发送短信验证码
function sendMobileCode(){
    var ele=$("#sendMobileCode");
    var context=ele.parent(".item-info")
    if ($("#sendMobileCode").attr("disabled")) {
        return false;
    }

	$("#sendMobileCode").attr("disabled", "disabled");
	$("#dyMobileButton").val("120秒后重新获取");
	r_time_out=setTimeout(countDown, 1000);
    $.ajax({
        type:"get",
        url:shopxx.base+"/register/sendMobileCode.jhtml",
        async:false,
        data:{phone:$("#phone").val()},
        success:function(data){
            if(data.result==1){
                $("#authCodeToken").val(data.authCodeToken);
            }else if(data.result==2){
            	delayTime = 120;
            	clearTimeout(r_time_out);
		        $("#dyMobileButton").val("获取短信验证码");
		        $("#mobileCode_error").hide();
		        $("#sendMobileCode").removeAttr("disabled");
		        delayFlag = true;
                $.message(data.message);
            }
        }
    })
}

function countDown() {
    delayTime--;
    $("#sendMobileCode").attr("disabled", "disabled");
    $("#dyMobileButton").val(delayTime + '秒后重新获取');
    if (delayTime == 1) {
        delayTime = 120;
        $("#dyMobileButton").val("获取短信验证码");
        $("#mobileCode_error").hide();
        $("#sendMobileCode").removeAttr("disabled");
        delayFlag = true;
    } else {
        delayFlag = false;
        r_time_out=setTimeout(countDown, 1000);
    }
}


