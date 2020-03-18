$(function () {
    $('#username').focus(function (e) {
        $('#username-validation-message').text('');
    });
    $('#username').blur(function (e) {
        var unreg = /^[a-zA-Z0-9_\u4E00-\u9FA5\uF900-\uFA2D]/;
        var nbreg = /^[0-9]*$/;
        if (e.target.value == '') {
            $('#username-validation-message').text('用户名不能为空')
        } else if (!unreg.test(e.target.value) || nbreg.test(e.target.value)) {
            $('#username-validation-message').text('用户名仅支持中英文、数字和下划线，且不能为纯数字');
        }
    });
    $('#tel').focus(function (e) {
        $('#tel-validation-message').text('');
    });
    $('#tel').blur(function (e) {
        var telreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (e.target.value == '') {
            $('#tel-validation-message').text('手机号码不能为空')
        }
        else if (!telreg.test(e.target.value)) {
            $('#tel-validation-message').text('手机号码格式不正确')
        }

    });
    $('#pwd').focus(function (e) {
        $('#pwd-validation-message').text('');
    });
    $('#pwd').blur(function (e) {
        if (e.target.value == '') {
            $('#pwd-validation-message').text('密码不能为空')
        } else if (e.target.value.length < 6) {
            $('#pwd-validation-message').text('密码设置不符合要求(密码长度最少六位)')
        }
    });

    $('#getcode').click(function (e) {
        let i = 5;
        setInterval(() => {
            i--;
            if (i > 0) {
                $("#getcode").attr("disabled", true);
                $('#getcode').css("color", 'grey');
                e.target.value = i + 's后可重新发送';
            } else if (i == 0) {
                $("#getcode").attr("disabled", false);
                $('#getcode').css("color", '#333');
                e.target.value = '获取验证码';
            }
        }, 1000);


    });
})