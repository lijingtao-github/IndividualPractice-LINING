var ipt_t = document.getElementsByClassName("ipt_t")
var notice_error = document.getElementsByClassName("notice_error")[0]
var notice_error_p = notice_error.getElementsByTagName("p")[0]
var reg_agreement = document.getElementsByClassName("reg_agreement")[0]
var button_hy_1 = document.getElementsByClassName("button_hy_1")[0]
var reg_yzmSend = document.getElementsByClassName("reg_yzmSend")[0]

var Storage = window.localStorage;
var rePhone = /^1[3578]\d{9}$/;
var reEmail = /^\w+@[a-zA-Z]+\.[a-zA-Z]+$/;


ipt_t[0].onblur = function () {
    var ipt_t_0_value = ipt_t[0].value
    if (ipt_t_0_value == "") {
        notice_error.style.display = "block"
        notice_error_p.innerHTML = "请输入用户名!"
    } else {
        notice_error.style.display = "none"
        notice_error_p.innerHTML = ""
    }
}

ipt_t[2].onblur = function () {
    var ipt_t_1_value = ipt_t[1].value
    var ipt_t_2_value = ipt_t[2].value
    if (ipt_t_1_value == "") {
        notice_error.style.display = "block"
        notice_error_p.innerHTML = "请输入密码!"
    } else if (ipt_t_2_value != ipt_t_1_value) {
        notice_error.style.display = "block"
        notice_error_p.innerHTML = "两次密码输入不一致!"
    } else {
        notice_error.style.display = "none"
        notice_error_p.innerHTML = ""
    }
}

ipt_t[3].onblur = function () {
    var ipt_t_3_value = ipt_t[3].value
    if (rePhone.test(ipt_t_3_value)) {
        notice_error.style.display = "none"
        notice_error_p.innerHTML = ""
    } else {
        notice_error.style.display = "block"
        notice_error_p.innerHTML = "请输入正确的手机号!"
    }
}


var code;
reg_yzmSend.onclick = function () {
    code = ''
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    for (var a = 0; a < 4; a++) {
        var index = Math.floor(Math.random() * 36)
        code += random[index]
    }
    reg_yzmSend.innerHTML = code
}

ipt_t[4].onblur = function () {
    var ipt_t_4_value = ipt_t[4].value.toLowerCase()
    if (ipt_t_4_value != reg_yzmSend.innerHTML) {
        notice_error.style.display = "block"
        notice_error_p.innerHTML = "验证码不正确,请重新输入!"
    } else {
        notice_error.style.display = "none"
        notice_error_p.innerHTML = ""
    }
}


var reg_smsSend = document.getElementsByClassName("reg_smsSend")[0]
var code2;
reg_smsSend.onclick = function () {
    code2 = ''
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    for (var b = 0; b < 6; b++) {
        var index2 = Math.floor(Math.random() * 10)
        code2 += random[index2]
    }
    alert(code2)
}



ipt_t[5].onblur = function () {
    var ipt_t_5_value = ipt_t[5].value
    if (ipt_t_5_value != code2) {
        notice_error.style.display = "block"
        notice_error_p.innerHTML = "动态密码不正确,请重新输入!"
    } else {
        notice_error.style.display = "none"
        notice_error_p.innerHTML = ""
    }
}

ipt_t[6].onblur = function () {
    var ipt_t_6_value = ipt_t[6].value
    if (reEmail.test(ipt_t_6_value)) {
        notice_error.style.display = "none"
        notice_error_p.innerHTML = ""
    } else {
        notice_error.style.display = "block"
        notice_error_p.innerHTML = "请输入正确的邮箱!"
    }
}


if (notice_error.style.display == 'block') {
    button_hy_1.onclick = null
} else {
    button_hy_1.onclick = function () {
        var ipt_t_3_value = ipt_t[3].value
        var ipt_t_6_value = ipt_t[6].value
        var ipt_t_0_value = ipt_t[0].value
        var ipt_t_1_value = ipt_t[1].value
        var ipt_t_2_value = ipt_t[2].value
        var ipt_t_4_value = ipt_t[4].value
        var ipt_t_5_value = ipt_t[5].value
        var user = {
            ipt_t_0_value,
            ipt_t_1_value,
            ipt_t_3_value,
            ipt_t_6_value
        }
        var arrPhone = []
        var arrPassword=[]
        var arrName=[]
        if (!reg_agreement.checked) {
            notice_error.style.display = "block"
            notice_error_p.innerHTML = "您必须阅读并同意协议才可以继续注册!"
        } else if (ipt_t_0_value == "" || ipt_t_1_value == "" || ipt_t_2_value == "" || ipt_t_4_value == "" || ipt_t_5_value == "") {
            notice_error.style.display = "block"
            notice_error_p.innerHTML = "请将信息填写完整!"
        } else {
            notice_error.style.display = "none"
            notice_error_p.innerHTML = ""
            if (rePhone.test(ipt_t_3_value) == true && reEmail.test(ipt_t_6_value) == true) {
                if (Storage.getItem("userInfor")) {
                    var userData = JSON.parse(Storage.getItem("userInfor"))
                    for (let i = 0; i < userData.length; i++) {
                        arrPhone.push(userData[i].ipt_t_3_value)
                        arrPassword.push(userData[i].ipt_t_1_value)
                        arrName.push(userData[i].ipt_t_0_value)
                    }
                    if (arrPhone.includes(user.ipt_t_3_value)) {
                        alert("该手机号已被注册,请重新输入手机号!")
                    } else {
                        userData.push(user)
                        Storage.setItem("userInfor", JSON.stringify(userData))
                        alert("注册成功!")
                    }
                } else {
                    Storage.setItem("userInfor", "[" + JSON.stringify(user) + "]")
                    alert("注册成功!")
                }
            } else {
                alert("请输入正确的信息")
            }
        }

    }
}



var logo_img = document.getElementsByClassName("logo_img")[0]
logo_img.onclick = function () {
    window.open("../html/首页.html", "_self")
}