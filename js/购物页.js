var thumblist = document.getElementsByClassName("thumblist")[0]
var thumblistli = thumblist.getElementsByTagName("li")


var flitimg = document.getElementsByClassName("f_litimg")[0]
var futop = document.getElementsByClassName("fu_top")[0]
var fudown = document.getElementsByClassName("fu_down")[0]

futop.onclick = function () {
    startMove(flitimg, {
        "top": -330
    })
}
fudown.onclick = function () {
    startMove(flitimg, {
        "top": 0
    })
}



var jqzoom = document.getElementsByClassName("jqzoom")[0]
var LiNingPup = document.getElementsByClassName("LiNingPup")[0]
var zoomDiv = document.getElementsByClassName("zoomDiv")[0]

jqzoom.onmouseover = function () {
    LiNingPup.style.display = "block"
    zoomDiv.style.display = "block"
}
jqzoom.onmouseout = function () {
    LiNingPup.style.display = "none"
    zoomDiv.style.display = "none"
}

jqzoom.onmousemove = function (ev) {
    var left = ev.clientX - jqzoom.offsetLeft - LiNingPup.offsetWidth - 110
    var top = ev.clientY - jqzoom.offsetTop - LiNingPup.offsetHeight + 20

    if (left < 0) {
        left = 0
    } else if (left > jqzoom.offsetWidth - LiNingPup.offsetWidth) {
        left = jqzoom.offsetWidth - LiNingPup.offsetWidth
    }

    if (top < 0) {
        top = 0
    } else if (top > jqzoom.offsetHeight - LiNingPup.offsetHeight) {
        top = jqzoom.offsetHeight - LiNingPup.offsetHeight
    }

    LiNingPup.style.left = left + "px"
    LiNingPup.style.top = top + "px"

    var x = zoomDiv.offsetWidth / LiNingPup.offsetWidth * left
    var y = zoomDiv.offsetHeight / LiNingPup.offsetHeight * top

    zoomDiv.style.backgroundPositionX = -x + "px"
    zoomDiv.style.backgroundPositionY = -y + "px"

}


var sideBarr = document.getElementsByClassName("sideBar_r")[0]
var layerclose = document.getElementsByClassName("layer-close")[0]
var rcart = document.getElementsByClassName("r_cart")[0]
var usercart = document.getElementsByClassName("user-cart")[0]
rcart.onclick = function () {
    sideBarr.style.width = 209 + "px"
    usercart.style.display = "block"
}
layerclose.onclick = function () {
    sideBarr.style.width = 0
    usercart.style.display = "none"
}

var r_show = document.getElementsByClassName("r_show")[0]
var hideBar = document.getElementsByClassName("hideBar")[0]
var sideBar_l = document.getElementsByClassName("sideBar_l")[0]
r_show.onclick = function () {
    sideBar_l.style.display = "none"
    hideBar.style.display = "block"
}
hideBar.onclick = function () {
    sideBar_l.style.display = "block"
    hideBar.style.display = "none"
}

var num = window.location.search.substr(1)
ajax("../json/首页&购物页.json", function (str) {
    var obj = JSON.parse(str)
    var thumblist2 = document.getElementsByClassName("thumblist2")[0]
    for (var f = 0; f < obj[num].colorselect.length; f++) {
        var oLi3 = document.createElement("li")
        oLi3.innerHTML = `
        <a href="javascript:;"><img src="${obj[num].colorselect[f].colorimg}" alt=""></a>
        `
        thumblist2.appendChild(oLi3)
    }

    var thumblist = document.getElementsByClassName("thumblist")
    for (var e = 0; e < obj[num].firstlittleimg.length; e++) {
        var oLi1 = document.createElement("li")
        oLi1.innerHTML = `
        <div class="tb-selected">
            <a href="JavaScript:;"><img src="${obj[num].firstlittleimg[e].litimg}" alt=""></a>
        </div>
        `
        var oLi2 = document.createElement("li")
        oLi2.innerHTML = `
        <div class="tb-selected">
            <a href="JavaScript:;"><img src="${obj[num].secondlittleimg[e].litimg}" alt=""></a>
        </div>
        `
        thumblist[0].appendChild(oLi1)
        thumblist[1].appendChild(oLi2)
    }

    var thumblist2 = document.getElementsByClassName("thumblist2")[0]
    var thumblist2li = thumblist2.getElementsByTagName("li")
    for (var g = 0; g < thumblist2li.length; g++) {
        thumblist2li[g].index = g
        thumblist2li[0].classList.add("thumbimgchecked")
        thumblist2li[g].onclick = function () {
            var thumblist = document.getElementsByClassName("thumblist")
            for (var h = 0; h < thumblist2li.length; h++) {
                thumblist2li[h].classList.remove("thumbimgchecked")
                thumblist[h].classList.remove("active")
            }
            thumblist2li[this.index].classList.add("thumbimgchecked")
            thumblist[this.index].classList.add("active")
        }
    }



    var goodsinfo = document.getElementsByClassName("goodsinfo")[0]
    var oDiv1 = document.createElement("div")
    oDiv1.className = "pd_desc"
    oDiv1.innerHTML = `
        <h1 class="product_name">${obj[num].goodsname}</h1>
        <div class="goods_promotion">
            <strong><a href="JavaScript:;"><span>全场满99包邮 部分地区除外</span></a></strong>
            <br>
            <strong><a href="JavaScript:;"><span>力灌狂篮，放肆开打！此商品满369减30，满499减50，点亮可立减80！详戳</span></a></strong>
        </div>
        <div class="background-gray">
            <span class="partNumber">
                <span class="t">商品编码：</span>
                <span class="v">${obj[num].Commoditycode}</span>
            </span>
            <span class="priceDiv">
                <span class="desc">
                    <span class="t">吊牌价：</span>
                    <span class="v" style="text-decoration: line-through;">￥${obj[num].dprice}</span>
                </span>
                <span class="desc" style="margin: 0;">
                    <span class="t">销售价：</span>
                    <span class="v" style="color:#ee2b3a;font-weight: bold;">
                        <span style="font-size:14px;vertical-align:middle;font-weight:bold;">￥</span>
                        <span style="font-size:25px;vertical-align:middle;font-weight:bold;display:inline-block;overflow:hidden;">${obj[num].price}</span>
                    </span>
                </span>
            </span>
        </div>
    `
    goodsinfo.appendChild(oDiv1)


    var jqzoom = document.getElementsByClassName("jqzoom")[0]
    var zoomDiv = document.getElementsByClassName("zoomDiv")[0]
    var thumblist = document.getElementsByClassName("thumblist")[0]
    var thumblistli = thumblist.getElementsByTagName("li")
    for (var a = 0; a < thumblistli.length; a++) {
        jqzoom.style.backgroundImage = "url(" + obj[num].firstlittleimg[0].litimg + ")"
        zoomDiv.style.backgroundImage = "url(" + obj[num].firstlittleimg[0].litimg + ")"
        thumblistli[a].index = a
        thumblistli[a].onmouseover = function () {
            for (var b = 0; b < thumblistli.length; b++) {
                thumblistli[b].classList.remove("tb-selected-active")
            }
            thumblistli[this.index].classList.add("tb-selected-active")
            jqzoom.style.backgroundImage = "url(" + obj[num].firstlittleimg[this.index].litimg + ")"
            zoomDiv.style.backgroundImage = "url(" + obj[num].firstlittleimg[this.index].litimg + ")"
        }
    }



    var thumblist = document.getElementsByClassName("thumblist")[1]
    var thumblistli = thumblist.getElementsByTagName("li")
    for (var a = 0; a < thumblistli.length; a++) {
        jqzoom.style.backgroundImage = "url(" + obj[num].secondlittleimg[0].litimg + ")"
        zoomDiv.style.backgroundImage = "url(" + obj[num].secondlittleimg[0].litimg + ")"
        thumblistli[a].index = a
        thumblistli[a].onmouseover = function () {
            for (var b = 0; b < thumblistli.length; b++) {
                thumblistli[b].classList.remove("tb-selected-active")
            }
            thumblistli[this.index].classList.add("tb-selected-active")
            jqzoom.style.backgroundImage = "url(" + obj[num].secondlittleimg[this.index].litimg + ")"
            zoomDiv.style.backgroundImage = "url(" + obj[num].secondlittleimg[this.index].litimg + ")"
        }
    }


    var addtoshoppingcar = document.getElementsByClassName("addtoshoppingcar")[0]
    var k=38;
    var onsale = document.getElementsByClassName("onsale")
    for (var c = 0; c < onsale.length; c++) {
        onsale[c].index = c
        onsale[c].onclick = function () {
            for (var d = 0; d < onsale.length; d++) {
                onsale[d].classList.remove("selected")
            }
            onsale[this.index].classList.add("selected")
            k = onsale[this.index].value
            return k
        }
    }

    addtoshoppingcar.onclick = function () {
        var good = {}
        good.id = obj[num].id
        good.img = obj[num].shouyeImg
        good.goodsname = obj[num].goodsname
        good.price = obj[num].price
        good.dprice = obj[num].dprice
        good.number = obj[num].number
        good.colorimg = obj[num].colorselect[0].colorimg
        good.colorimg2 = obj[num].colorselect[1].colorimg
        good.size = k

        var cardId = []
        var sizeId = []
        if (getCookie("shopJson")) {
            var ckData = JSON.parse(getCookie("shopJson"))
            for (var i = 0; i < ckData.length; i++) {
                cardId.push(ckData[i].id)
                sizeId.push(ckData[i].size)
                console.log(sizeId)
            }
            if (cardId.includes(good.id)) {
                for (var j = 0; j < ckData.length; j++) {
                    if (ckData[j].id == good.id && ckData[j].size == good.size) {
                        ckData[j].number += 1
                        setCookie("shopJson", JSON.stringify(ckData), 14)
                    }
                }
            } else {
                ckData.push(good)
                setCookie("shopJson", JSON.stringify(ckData), 14)
            }
            if(!sizeId.includes(good.size)){
                ckData.push(good)
                setCookie("shopJson", JSON.stringify(ckData), 14)
            }
        } else {
            setCookie("shopJson", "[" + JSON.stringify(good) + "]", 14)
        }
        alert("成功添加1件商品!")
        location.reload()
    }
})

var data = JSON.parse(getCookie("shopJson"));
var slide_goods_amount = document.getElementsByClassName("slide-goods-amount")[0]
var span_red = document.getElementsByClassName("span_red")[0]
slide_goods_amount.innerHTML = `${data.length}`
span_red.innerHTML = `${data.length}`
setCookie("shopJson", JSON.stringify(data), 14)
var tbody = document.getElementsByTagName("tbody")[0]
for (var k = 0; k < data.length; k++) {
    var oTr = document.createElement("tr")
    oTr.innerHTML = `
    <td width="10%">
        <input type="checkbox" name="check_slide_goods" class="check_slide_goods" checked>
    </td>
    <td class="miniimg_td">
        <a href="javascript:;" class="miniimg">
            <img src="${data[k].colorimg}" alt="">
        </a>
    </td>
    <td width="20%">
        <div style="text-align:left;">尺码:</div>
        <div style="height:3px;"></div>
        <div style="text-align:left;">${data[k].size}</div>
    </td>
    <td width="15%" class="num1">${data[k].number+1}</td>
    <td width="28%" class="num2">${data[k].price}</td>
    `
    tbody.appendChild(oTr)

    
    var tr = tbody.getElementsByTagName("tr")
    var can_checkout = document.getElementsByClassName("can-checkout")[0]
    var no_checkout = document.getElementsByClassName("no-checkout")[0]
    if (tr.length > 0) {
        can_checkout.style.display = "block"
        no_checkout.style.display = "none"
    } else {
        can_checkout.style.display = "none"
        no_checkout.style.display = "block"
    }
    var allprice = document.getElementsByClassName("allprice")[0]
    var total_price = document.getElementsByClassName("total_price")[0]
    allprice.innerHTML = `
    已选择
    <span class="cart_goods_amount">${data.length}</span>
    件商品
    `
    var sum = 0
    for (var n = 0; n < tr.length; n++) {
        var num1 = document.getElementsByClassName("num1")[n]
        var num2 = document.getElementsByClassName("num2")[n]
        var num1inn = parseInt(num1.innerHTML)
        var num2inn = parseInt(num2.innerHTML)
        sum += num1inn * num2inn
        total_price.innerHTML = `￥${sum}`
    }

}

var check_slide_all = document.getElementsByClassName("check_slide_all")[0]
var check_slide_goods = document.getElementsByClassName("check_slide_goods")
var num2 = 0
check_slide_all.onclick = function () {
    num2++
    if (num2 > 1) {
        num2 = 0
    }
    if (num2 == 0) {
        for (var l = 0; l < check_slide_goods.length; l++) {
            check_slide_goods[l].checked = true
        }
    } else {
        for (var m = 0; m < check_slide_goods.length; m++) {
            check_slide_goods[m].checked = false
        }
    }
}

var jsbtn = document.getElementsByClassName("jsbtn")[0]
var addtonowcart = document.getElementsByClassName("addtonowcart")[0]
jsbtn.onclick = function () {
    window.open("../html/我的购物车.html")
}
addtonowcart.onclick = function () {
    window.open("../html/我的购物车.html")
}

var logo_img = document.getElementsByClassName("logo_img")[0]
logo_img.onclick = function () {
    window.open("../html/首页.html", "_self")
}


var login = document.getElementsByClassName("login")[0]
var zhuce = document.getElementsByClassName("zhuce")[0]
login.onclick = function () {
    window.open("../html/登录.html", "_self")
}
zhuce.onclick = function () {
    window.open("../html/注册.html", "_self")
}



var Storage = window.localStorage;
var user=JSON.parse(Storage.getItem("userInfor2"))
var login=document.getElementsByClassName("login")[0]
var zhuxiao=document.getElementsByClassName("zhuxiao")[0]
if(user!=null){
    login.innerHTML=`欢迎您,联合会员_${user.ipt_t_0_value2}`
    zhuxiao.style.display="block"
}else{
    login.innerHTML="登录"
    zhuxiao.style.display="none"
}

zhuxiao.onclick=function(){
    login.innerHTML="登录"
    zhuxiao.style.display="none"
    Storage.removeItem("userInfor2")
}