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

var data = JSON.parse(getCookie("shopJson"));
var general_goods=document.getElementsByClassName("general_goods")[0]
var slide_goods_amount=document.getElementsByClassName("slide-goods-amount")[0]
var span_red=document.getElementsByClassName("span_red")[0]
slide_goods_amount.innerHTML=`${data.length}`
span_red.innerHTML=`${data.length}`
setCookie("shopJson",JSON.stringify(data),14)
var tbody=document.getElementsByTagName("tbody")[0]
for(var a=0;a<data.length;a++){
    var oTr2=document.createElement("tr")
    oTr2.innerHTML=`
    <td width="10%">
        <input type="checkbox" name="check_slide_goods" class="check_slide_goods" checked>
    </td>
    <td>
        <a href="javascript:;" class="miniimg">
            <img src="${data[a].colorimg}" alt="">
        </a>
    </td>
    <td width="20%">
        <div style="text-align:left;">尺码:</div>
        <div style="height:3px;"></div>
        <div style="text-align:left;">${data[a].size}</div>
    </td>
    <td width="15%" class="num1">${data[a].number+1}</td>
    <td width="28%" class="num2">${data[a].price}</td>
    `
    tbody.appendChild(oTr2)

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



    var oTr=document.createElement("tr")
    oTr.innerHTML=`
    <td class="goods_img">
        <a href="javascript:;"><img src="${data[a].img}" alt=""></a>
    </td>
    <td class="tal">
        <a href="javascript:;">${data[a].goodsname}</a>
    </td>
    <td class="goods_spec">
        <p>尺码:${data[a].size}</p>
    </td>
    <td class="goods_gray">
        <p>￥${data[a].price}</p>
        <p class="goods_oldPrice"> ￥${data[a].dprice}<span></span></p>
    </td>
    <td>${data[a].number+1}</td>
    <td>0</td>
    <td class="haveSubPrice">${parseInt(data[a].dprice-data[a].price)}</td>
    <td class="goods_subtotal">${parseInt(data[a].number+1)*parseInt(data[a].price)}</td>
    `
    general_goods.appendChild(oTr)

}


var tr2=general_goods.getElementsByTagName("tr")
var font_total_amount=document.getElementsByClassName("font_total_amount")[0]
var sum2=0
for(var b=0;b<tr2.length;b++){
    var goods_subtotal=document.getElementsByClassName("goods_subtotal")[b]
    var goods_subtotalinn=parseInt(goods_subtotal.innerHTML)
    sum2+=goods_subtotalinn
    font_total_amount.innerHTML=sum2
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

var checkout_submit=document.getElementsByClassName("checkout_submit")[0]
checkout_submit.onclick=function(){
    window.open("../html/订单支付.html","_self")
}


var login=document.getElementsByClassName("login")[0]
var zhuce=document.getElementsByClassName("zhuce")[0]
login.onclick=function(){
    window.open("../html/登录.html")
}
zhuce.onclick=function(){
    window.open("../html/注册.html")
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