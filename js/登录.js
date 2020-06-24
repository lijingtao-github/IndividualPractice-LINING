var daliy_login = document.getElementsByClassName("daliy_login")[0]
var phone_login = document.getElementsByClassName("phone_login")[0]
var daliy_process = document.getElementsByClassName("daliy_process")[0]
var phone_process = document.getElementsByClassName("phone_process")[0]

daliy_login.onclick = function () {
    daliy_login.classList.add("cuA")
    phone_login.classList.remove("cuA")
    daliy_process.style.display = "block"
    phone_process.style.display = "none"
}
phone_login.onclick = function () {
    daliy_login.classList.remove("cuA")
    phone_login.classList.add("cuA")
    daliy_process.style.display = "none"
    phone_process.style.display = "block"
}


var ipt_t = document.getElementsByClassName("ipt_t")
var button_hy_1 = document.getElementsByClassName("button_hy_1")
var notice_error = document.getElementsByClassName("notice_error")
var Storage = window.localStorage;
var data = JSON.parse(Storage.getItem("userInfor"))

var reg_yzmSend = document.getElementsByClassName("reg_yzmSend")[0]
var code;
reg_yzmSend.onclick = function () {
    code = ''
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    for (var a = 0; a < 4; a++) {
        var index = Math.floor(Math.random() * 36)
        code += random[index]
    }
    alert(code)
}

var reg_smsSend = document.getElementsByClassName("reg_smsSend")[0]
var code2;
reg_smsSend.onclick = function () {
    code2 = ''
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    for (var b = 0; b < 6; b++) {
        var index = Math.floor(Math.random() * 36)
        code2 += random[index]
    }
    alert(code2)
}

var reg_yzmSend2 = document.getElementsByClassName("reg_yzmSend")[1]
var code3;
reg_yzmSend2.onclick = function () {
    code3 = ''
    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    for (var a = 0; a < 4; a++) {
        var index = Math.floor(Math.random() * 36)
        code3 += random[index]
    }
    alert(code3)
}


var ipt_t_0_value2 = ipt_t[0].value
var ipt_t_1_value2 = ipt_t[1].value
var ipt_t_2_value2 = ipt_t[2].value
var ipt_t_3_value2 = ipt_t[3].value
var ipt_t_4_value2 = ipt_t[4].value
var ipt_t_5_value2 = ipt_t[5].value
button_hy_1[0].onclick = function () {
    var ipt_t_0_value2 = ipt_t[0].value
    var ipt_t_1_value2 = ipt_t[1].value
    var ipt_t_2_value2 = ipt_t[2].value
    if (ipt_t_0_value2 == "" || ipt_t_1_value2 == "" || ipt_t_2_value2 == "") {
        notice_error[0].style.display = "block"
        notice_error[0].innerHTML = "请将信息填写完整!"
    } else {
        for (var a = 0; a < data.length; a++) {
            if (ipt_t_0_value2 != data[a].ipt_t_3_value) {
                notice_error[0].style.display = "block"
                notice_error[0].innerHTML = "该手机号码未注册,请先注册!"
            } else if (ipt_t_1_value2 != data[a].ipt_t_1_value) {
                notice_error[0].style.display = "block"
                notice_error[0].innerHTML = "密码错误,请重新输入!"
            } else if (ipt_t_2_value2 != code) {
                notice_error[0].style.display = "block"
                notice_error[0].innerHTML = "验证码错误,请重新输入!"
            } else {
                notice_error[0].style.display = "none"
                notice_error[0].innerHTML = ""
                alert("登陆成功!")
                window.open("../html/首页.html", "_self")
            }
        }

    }
    var user = {
        ipt_t_0_value2
    }
    if (Storage.getItem("userInfor2")) {
        var userData2 = JSON.parse(Storage.getItem("userInfor2"))
        userData2.push(user)
        Storage.setItem("userInfor2", JSON.stringify(userData2))
    } else {
        Storage.setItem("userInfor2", JSON.stringify(user))
    }

}



button_hy_1[1].onclick = function () {
    var ipt_t_3_value2 = ipt_t[3].value
    var ipt_t_4_value2 = ipt_t[4].value
    var ipt_t_5_value2 = ipt_t[5].value
    if (ipt_t_3_value2 == "" || ipt_t_4_value2 == "" || ipt_t_5_value2 == "") {
        notice_error[1].style.display = "block"
        notice_error[1].innerHTML = "请将信息填写完整!"
    } else {
        for (var b = 0; b < data.length; b++) {
            if (ipt_t_3_value2 != data[b].ipt_t_3_value) {
                notice_error[1].style.display = "block"
                notice_error[1].innerHTML = "该手机号码未注册,请先注册!"
            } else if (ipt_t_4_value2 != code3) {
                notice_error[1].style.display = "block"
                notice_error[1].innerHTML = "验证码错误,请重新输入!"
            } else if (ipt_t_5_value2 != code2) {
                notice_error[1].style.display = "block"
                notice_error[1].innerHTML = "动态密码错误,请重新输入!"
            } else {
                notice_error[1].style.display = "none"
                notice_error[1].innerHTML = ""
                alert("登陆成功!")
                window.open("../html/首页.html", "_self")
            }
        }
    }
    var user = {
        ipt_t_0_value2
    }
    if (Storage.getItem("userInfor2")) {
        var userData2 = JSON.parse(Storage.getItem("userInfor2"))
        userData2.push(user)
        Storage.setItem("userInfor2", JSON.stringify(userData2))
    } else {
        Storage.setItem("userInfor2", JSON.stringify(user))
    }
}



var logo_img = document.getElementsByClassName("logo_img")[0]
logo_img.onclick = function () {
    window.open("../html/首页.html", "_self")
}