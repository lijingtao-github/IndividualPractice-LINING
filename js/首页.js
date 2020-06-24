var swiperwrapper=document.getElementsByClassName("swiper-wrapper")[0]
var arrowleft=document.getElementsByClassName("arrow-left")[0]
var arrowright=document.getElementsByClassName("arrow-right")[0]
var swipera=document.getElementsByClassName("swiper-a")
var num=0
var point=0

for(var a=0;a<swipera.length;a++){
    swipera[a].index=a
    swipera[a].onmouseover=function(){
        for(var b=0;b<swipera.length;b++){
            swipera[b].classList.remove("swiper-a-active")
        }
        num=point=this.index
        swipera[this.index].classList.add("swiper-a-active")
        startMove(swiperwrapper,{"left":-this.index*1536})
    }
}

function autoplay(){
    num++
    point++
    if(num>3){
        swiperwrapper.style.left=0
        num=1
    }
    point = point > swipera.length - 1 ? 0 : point
    for(var b=0;b<swipera.length;b++){
        swipera[b].classList.remove("swiper-a-active")
    }
    swipera[point].classList.add("swiper-a-active")
    startMove(swiperwrapper,{"left":-num*1536})
}

arrowright.onclick=function(){
    autoplay()
}
arrowleft.onclick=function(){
    num--
    point--
    if(num<0){
        swiperwrapper.style.left=-3*1536+"px"
        num=swipera.length-1
    }
    point = point < 0 ? swipera.length -1 : point
    for(var c=0;c<swipera.length;c++){
        swipera[c].classList.remove("swiper-a-active")
    }
    swipera[point].classList.add("swiper-a-active")
    startMove(swiperwrapper,{"left":-num*1536})
}

var timer=setInterval(autoplay,5000)

arrowleft.onmouseover=function(){
    clearInterval(timer)
}
arrowleft.onmouseout=function(){
    timer=setInterval(autoplay,5000)
}
arrowright.onmouseover=function(){
    clearInterval(timer)
}
arrowright.onmouseout=function(){
    timer=setInterval(autoplay,5000)
}

var arr=[
    {
        coverImg1:"../img/lining_170119_technology_icon_01.png",
        coverImg2:"../img/lining_170119_technology_icon_01_2.png",
        word:"智能芯片"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_02.png",
        coverImg2:"../img/lining_170119_technology_icon_02_2.png",
        word:"LI-NING CLOUD"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_03.png",
        coverImg2:"../img/lining_170119_technology_icon_03_2.png",
        word:"LI-NING ARC"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_04.png",
        coverImg2:"../img/lining_170119_technology_icon_04_2.png",
        word:"WARM AT"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_05.png",
        coverImg2:"../img/lining_170119_technology_icon_05_2.png",
        word:"AT PROOF WIND"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_06.png",
        coverImg2:"../img/lining_170119_technology_icon_06_2.png",
        word:"LI-NING BOUNSE"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_07.png",
        coverImg2:"../img/lining_170119_technology_icon_07_2.png",
        word:"WARM AT FAR INFRARED"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_08.png",
        coverImg2:"../img/lining_170119_technology_icon_08_2.png",
        word:"AT PROOF SMART"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_09.png",
        coverImg2:"../img/lining_170119_technology_icon_09_2.png",
        word:"FOAM EVA LITE"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_10.png",
        coverImg2:"../img/lining_170119_technology_icon_10_2.png",
        word:"CUSHION"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_11.png",
        coverImg2:"../img/lining_170119_technology_icon_11_2.png",
        word:"PROBAR LOC"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_12.png",
        coverImg2:"../img/lining_170119_technology_icon_12_2.png",
        word:"TUFF RB"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_13.png",
        coverImg2:"../img/lining_170119_technology_icon_13_2.png",
        word:"DYNAMIC SHELL"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_14.png",
        coverImg2:"../img/lining_170119_technology_icon_14_2.png",
        word:"AT DRY BASE"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_15.png",
        coverImg2:"../img/lining_170119_technology_icon_15_2.png",
        word:"LITE AT"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_01.png",
        coverImg2:"../img/lining_170119_technology_icon_01_2.png",
        word:"智能芯片"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_02.png",
        coverImg2:"../img/lining_170119_technology_icon_02_2.png",
        word:"LI-NING CLOUD"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_03.png",
        coverImg2:"../img/lining_170119_technology_icon_03_2.png",
        word:"LI-NING ARC"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_04.png",
        coverImg2:"../img/lining_170119_technology_icon_04_2.png",
        word:"WARM AT"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_05.png",
        coverImg2:"../img/lining_170119_technology_icon_05_2.png",
        word:"AT PROOF WIND"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_06.png",
        coverImg2:"../img/lining_170119_technology_icon_06_2.png",
        word:"LI-NING BOUNSE"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_07.png",
        coverImg2:"../img/lining_170119_technology_icon_07_2.png",
        word:"WARM AT FAR INFRARED"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_08.png",
        coverImg2:"../img/lining_170119_technology_icon_08_2.png",
        word:"AT PROOF SMART"
    },
    {
        coverImg1:"../img/lining_170119_technology_icon_09.png",
        coverImg2:"../img/lining_170119_technology_icon_09_2.png",
        word:"FOAM EVA LITE"
    }
]

var innerBox=document.getElementsByClassName("innerBox")[0]
for(var d=0;d<arr.length;d++){
    var icon_box=document.createElement("div")
    icon_box.className="icon_box"
    icon_box.innerHTML=`
    <div class="icon_pic">
        <div class="icon_pic_2">
            <img src="${arr[d].coverImg2}" alt="">
        </div>
        <div class="icon_pic_1">
            <img src="${arr[d].coverImg1}" alt="">
        </div>
    </div>
    <div class="icon_word">
        <a href="JavaScript:;">${arr[d].word}</a>
    </div>
    `
    innerBox.appendChild(icon_box)
}

var iconbox=document.getElementsByClassName("icon_box")
var leftbtn=document.getElementsByClassName("left_btn")[0]
var rightbtn=document.getElementsByClassName("right_btn")[0]
var num2=0
function autoplay2(){
    num2++
    if(num2>5){
        num2=1
        innerBox.style.left=0
    }
    startMove(innerBox,{"left":-num2*3*iconbox[0].offsetWidth})
}
var timer2=setInterval(autoplay2,3000)

rightbtn.onclick=function(){
    autoplay2()
}
leftbtn.onclick=function(){
    num2--
    if(num2<0){
        num2=5
        innerBox.style.left=-5*3*iconbox[0].offsetWidth+"px"
    }
    startMove(innerBox,{"left":-num2*3*iconbox[0].offsetWidth})
}

leftbtn.onmouseover=function(){
    clearInterval(timer2)
}
leftbtn.onmouseout=function(){
    timer2=setInterval(autoplay2,3000)
}
rightbtn.onmouseover=function(){
    clearInterval(timer2)
}
rightbtn.onmouseout=function(){
    timer2=setInterval(autoplay2,3000)
}



var man=document.getElementsByClassName("man")[0]
var woman=document.getElementsByClassName("woman")[0]
var wdman=document.getElementsByClassName("wd_man")[0]
var wdwoman=document.getElementsByClassName("wd_woman")[0]

man.onmouseover=function(){
    man.classList.add("we_check")
    woman.classList.remove("we_check")
    wdman.style.display="block"
    wdwoman.style.display="none"
}

woman.onmouseover=function(){
    man.classList.remove("we_check")
    woman.classList.add("we_check")
    wdman.style.display="none"
    wdwoman.style.display="block"
}

var tabbtn1=document.getElementsByClassName("tab-btn1")[0]
var tabbtn2=document.getElementsByClassName("tab-btn2")[0]
var tb1=document.getElementsByClassName("tb1")[0]
var tb2=document.getElementsByClassName("tb2")[0]

tabbtn1.onmouseover=function(){
    tabbtn1.classList.add("check")
    tabbtn2.classList.remove("check")
    tb1.style.display="block"
    tb2.style.display="none"
}
tabbtn2.onmouseover=function(){
    tabbtn1.classList.remove("check")
    tabbtn2.classList.add("check")
    tb1.style.display="none"
    tb2.style.display="block"
}


var tabbtn3=document.getElementsByClassName("tab-btn3")[0]
var tabbtn4=document.getElementsByClassName("tab-btn4")[0]
var tb3=document.getElementsByClassName("tb3")[0]
var tb4=document.getElementsByClassName("tb4")[0]

tabbtn3.onmouseover=function(){
    tabbtn3.classList.add("check2")
    tabbtn4.classList.remove("check2")
    tb3.style.display="block"
    tb4.style.display="none"
}
tabbtn4.onmouseover=function(){
    tabbtn3.classList.remove("check2")
    tabbtn4.classList.add("check2")
    tb3.style.display="none"
    tb4.style.display="block"
}


var tabbtn5=document.getElementsByClassName("tab-btn5")[0]
var tabbtn6=document.getElementsByClassName("tab-btn6")[0]
var tb5=document.getElementsByClassName("tb5")[0]
var tb6=document.getElementsByClassName("tb6")[0]

tabbtn5.onmouseover=function(){
    tabbtn5.classList.add("check3")
    tabbtn6.classList.remove("check3")
    tb5.style.display="block"
    tb6.style.display="none"
}
tabbtn6.onmouseover=function(){
    tabbtn5.classList.remove("check3")
    tabbtn6.classList.add("check3")
    tb5.style.display="none"
    tb6.style.display="block"
}


var tabbtn7=document.getElementsByClassName("tab-btn7")[0]
var tabbtn8=document.getElementsByClassName("tab-btn8")[0]
var tb7=document.getElementsByClassName("tb7")[0]
var tb8=document.getElementsByClassName("tb8")[0]

tabbtn7.onmouseover=function(){
    tabbtn7.classList.add("check4")
    tabbtn8.classList.remove("check4")
    tb7.style.display="block"
    tb8.style.display="none"
}
tabbtn8.onmouseover=function(){
    tabbtn7.classList.remove("check4")
    tabbtn8.classList.add("check4")
    tb7.style.display="none"
    tb8.style.display="block"
}



var sideBarr=document.getElementsByClassName("sideBar_r")[0]
var layerclose=document.getElementsByClassName("layer-close")[0]
var rcart=document.getElementsByClassName("r_cart")[0]
var usercart=document.getElementsByClassName("user-cart")[0]
rcart.onclick=function(){
    sideBarr.style.width=209+"px"
    usercart.style.display="block"
}
layerclose.onclick=function(){
    sideBarr.style.width=0
    usercart.style.display="none"
}

var r_show=document.getElementsByClassName("r_show")[0]
var hideBar=document.getElementsByClassName("hideBar")[0]
var sideBar_l=document.getElementsByClassName("sideBar_l")[0]
r_show.onclick=function(){
    sideBar_l.style.display="none"
    hideBar.style.display="block"
}
hideBar.onclick=function(){
    sideBar_l.style.display="block"
    hideBar.style.display="none"
}

var r_top=document.getElementsByClassName("r_top")[0]
var top=document.getElementsByClassName("top")[0]
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
var timer3
r_top.onclick = function () {
    clearInterval(timer3)
    timer3 = setInterval(function () {
        var speed = (0 - scrollTop) / 4
        if (speed > 0) {
            Math.ceil(speed)
        } else {
            Math.floor(speed)
        }
        if (scrollTop == 0) {
            document.documentElement.scrollTop = document.body.scrollTop = 0
            clearInterval(timer3)
        } else {
            scrollTop += speed
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop
        }
    }, 40)
}


var arr=[2149,2483,5161,7583,10441,16119]
var navsel=document.getElementsByClassName("nav-sel")
window.onscroll=function(){
    scrollTop=document.documentElement.scrollTop
    var nav=document.getElementsByTagName("nav")[0]
    if(scrollTop>=2148){
        nav.style.display="block"
    }else{
        nav.style.display="none"
    }
    
}
for(var h=0;h<navsel.length;h++){
    navsel[h].index=h
    navsel[h].onclick=function(){
        document.documentElement.scrollTop = document.body.scrollTop=arr[this.index]
    }
}


ajax("../json/首页&购物页.json",function(str){
    var obj=JSON.parse(str)
    for(var e=0;e<5;e++){
        var t1shop=document.getElementsByClassName("t1shop")[0]
        var oDiv1=document.createElement("div")
        oDiv1.className="goods tshop1"
        oDiv1.innerHTML=`
        <a href="javascript:;">
            <img class="goods-img" src="${obj[e].shouyeImg}" alt="">
        </a>
        <div class="goods-info">
            <div class="goods-name">${obj[e].goodsname}</div>
            <div class="price-style2">
                <div class="rmb">¥</div>
                <div class="price">${obj[e].price}</div>
            </div>
            <a href="javascript:;" class="buyitnow-a"><img src="../img/buyitnow.png" alt=""></a>
        </div>
        `
        t1shop.appendChild(oDiv1)
    }

    for(var f=5;f<10;f++){
        var t2shop=document.getElementsByClassName("t2shop")[0]
        var oDiv2=document.createElement("div")
        oDiv2.className="goods tshop2"
        oDiv2.innerHTML=`
        <a href="javascript:;">
            <img class="goods-img" src="${obj[f].shouyeImg}" alt="">
        </a>
        <div class="goods-info">
            <div class="goods-name">${obj[f].goodsname}</div>
            <div class="price-style2">
                <div class="rmb">¥</div>
                <div class="price">${obj[f].price}</div>
            </div>
            <a href="javascript:;" class="buyitnow-a"><img src="../img/buyitnow.png" alt=""></a>
        </div>
        `
        t2shop.appendChild(oDiv2)
    }

    for(var g=10;g<15;g++){
        var t3shop=document.getElementsByClassName("t3shop")[0]
        var oDiv3=document.createElement("div")
        oDiv3.className="goods tshop3"
        oDiv3.innerHTML=`
        <a href="javascript:;">
            <img class="goods-img" src="${obj[g].shouyeImg}" alt="">
        </a>
        <div class="goods-info">
            <div class="goods-name">${obj[g].goodsname}</div>
            <div class="price-style2">
                <div class="rmb">¥</div>
                <div class="price">${obj[g].price}</div>
            </div>
            <a href="javascript:;" class="buyitnow-a"><img src="../img/buyitnow.png" alt=""></a>
        </div>
        `
        t3shop.appendChild(oDiv3)
    }

    for(var h=15;h<20;h++){
        var tb1=document.getElementsByClassName("tb1")[0]
        var oDiv4=document.createElement("div")
        oDiv4.className="goods tshop4"
        oDiv4.innerHTML=`
        <a href="javascript:;">
            <img class="goods-img" src="${obj[h].shouyeImg}" alt="">
        </a>
        <div class="goods-info">
            <div class="goods-name">${obj[h].goodsname}</div>
            <div class="price-style2">
                <div class="rmb">¥</div>
                <div class="price">${obj[h].price}</div>
            </div>
            <a href="javascript:;" class="buyitnow-a"><img src="../img/buyitnow.png" alt=""></a>
        </div>
        `
        tb1.appendChild(oDiv4)
    }

    for(var i=20;i<25;i++){
        var tb2=document.getElementsByClassName("tb2")[0]
        var oDiv5=document.createElement("div")
        oDiv5.className="goods tshop4"
        oDiv5.innerHTML=`
        <a href="javascript:;">
            <img class="goods-img" src="${obj[i].shouyeImg}" alt="">
        </a>
        <div class="goods-info">
            <div class="goods-name">${obj[i].goodsname}</div>
            <div class="price-style2">
                <div class="rmb">¥</div>
                <div class="price">${obj[i].price}</div>
            </div>
            <a href="javascript:;" class="buyitnow-a"><img src="../img/buyitnow.png" alt=""></a>
        </div>
        `
        tb2.appendChild(oDiv5)
    }

    var goods=document.getElementsByClassName("goods")
    for(var h=0;h<obj.length;h++){
        goods[h].index=h
        goods[h].onclick=function(){
            var o_num=obj[this.index].id
            window.open("../html/购物页.html?"+o_num)
        }
    }
})



var data = JSON.parse(getCookie("shopJson"));
var slide_goods_amount=document.getElementsByClassName("slide-goods-amount")[0]
var span_red=document.getElementsByClassName("span_red")[0]
slide_goods_amount.innerHTML=`${data.length}`
span_red.innerHTML=`${data.length}`
setCookie("shopJson",JSON.stringify(data),14)
var tbody=document.getElementsByTagName("tbody")[0]
for(var k=0;k<data.length;k++){
    var oTr=document.createElement("tr")
    oTr.innerHTML=`
    <td width="10%">
        <input type="checkbox" name="check_slide_goods" class="check_slide_goods" checked>
    </td>
    <td>
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
    var tr=tbody.getElementsByTagName("tr")
    var can_checkout=document.getElementsByClassName("can-checkout")[0]
    var no_checkout=document.getElementsByClassName("no-checkout")[0]
    if(tr.length>0){
        can_checkout.style.display="block"
        no_checkout.style.display="none"
    }else{
        can_checkout.style.display="none"
        no_checkout.style.display="block"
    }

    var allprice=document.getElementsByClassName("allprice")[0]
    var total_price=document.getElementsByClassName("total_price")[0]
    allprice.innerHTML=`
    已选择
    <span class="cart_goods_amount">${data.length}</span>
    件商品
    `
    var sum=0
    for(var n=0;n<tr.length;n++){
        var num1=document.getElementsByClassName("num1")[n]
        var num2=document.getElementsByClassName("num2")[n]
        var num1inn=parseInt(num1.innerHTML)
        var num2inn=parseInt(num2.innerHTML)
        sum+=num1inn*num2inn
        total_price.innerHTML=`￥${sum}`
    }
}

var check_slide_all=document.getElementsByClassName("check_slide_all")[0]
var check_slide_goods=document.getElementsByClassName("check_slide_goods")
var num2=0
check_slide_all.onclick=function(){
    num2++
    if(num2>1){
        num2=0
    }
    if(num2==0){
        for(var l=0;l<check_slide_goods.length;l++){
            check_slide_goods[l].checked=true
        }
    }else{
        for(var m=0;m<check_slide_goods.length;m++){
            check_slide_goods[m].checked=false
        }
    }
}

var jsbtn=document.getElementsByClassName("jsbtn")[0]
jsbtn.onclick=function(){
    window.open("../html/我的购物车.html")
}

var logo_img=document.getElementsByClassName("logo_img")[0]
logo_img.onclick=function(){
    window.open("../html/首页.html","_self")
}

var login=document.getElementsByClassName("login")[0]
var zhuce=document.getElementsByClassName("zhuce")[0]
login.onclick=function(){
    window.open("../html/登录.html","_self")
}

zhuce.onclick=function(){
    window.open("../html/注册.html","_self")
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
