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

var jsbtn=document.getElementsByClassName("jsbtn")[0]
jsbtn.onclick=function(){
    window.open("../html/我的购物车.html")
}


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


    var goods=document.getElementsByClassName("goods")[0]
    var oTr2=document.createElement("tr")
    oTr2.innerHTML=`
    <td>
        <span class="checkboxSpan unCheck"></span>
    </td>
    <td class="textLeft">
        <a href="javascript:;">
            <img class="item" src="${data[k].colorimg}" alt="">
        </a>
    </td>
    <td class="cartGoodsName">
        <a href="javascript:;"> ${data[k].goodsname} </a>
    </td>
    <td>
        <div class="goodsSpec">尺码：${data[k].size}</div>
    </td>
    <td>
        <div class="cartMarketPrice">¥${data[k].price}</div>
        <div>
            <del>¥ ${data[k].dprice}</del>
        </div>
    </td>
    <td>
        <div class="quantity">
            <a href="javascript:;" class="icon_reduce" _reduce=${data[k].size}>-</a>
            <input class="input_quantity" type="text" value="${data[k].number+1}">
            <a href="javascript:;" class="icon_subjoin" _add=${data[k].size}>+</a>
        </div>
    </td>
    <td class="goodsDiscount">
        <div class="discount">${data[k].dprice-data[k].price}</div>
    </td>
    <td>
        <div class="goodsPrice">${parseInt(data[k].number+1)*parseInt(data[k].price)}</div>
    </td>
    <td class="cart-goods-operation">
        <div class="relative">
            <a href="javascript:;" class="move" _remove=${data[k].id}>删除</a>
        </div>
    </td>
    `
    goods.appendChild(oTr2)

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
var goods=document.getElementsByClassName("goods")[0]
var tr2=goods.getElementsByTagName("tr")
var input_quantity=document.getElementsByClassName("input_quantity")
var goodsPrice=document.getElementsByClassName("goodsPrice")
var totalOffer=document.getElementsByClassName("totalOffer")[0]
var sum2=0
for(var l=0;l<tr2.length;l++){
    var discount=document.getElementsByClassName("discount")[l]
    var discountinn=parseInt(discount.innerHTML)
    sum2+=discountinn
    totalOffer.innerHTML=`-¥${sum2}`
}

goods.onclick=function(ev){
    var target=ev.target||ev.srcElement
    if(target.className=="move"){
        var move=target.getAttribute("_remove")
        for(var i=0;i<data.length;i++){
            if(data[i].id==move){
                data.splice(i,1)
                goods.removeChild(tr2[i])
                setCookie("shopJson",JSON.stringify(data),14)
            }
        }
    }

    if(target.className=="icon_reduce"){
        var reduce=target.getAttribute("_reduce")
        for(var j=0;j<data.length;j++){
            if(data[j].size==reduce){
                if(data[j].number==0){
                    data[j].number=0
                    input_quantity[j].value=1
                    goodsPrice[j].innerHTML=`${parseInt(data[j].price)}`
                }else{
                    data[j].number-=1
                    input_quantity[j].value=data[j].number+1
                    goodsPrice[j].innerHTML=`${parseInt(data[j].number+1)*parseInt(data[j].price)}`
                }
                setCookie("shopJson",JSON.stringify(data),14)
            }
        }
    }

    if(target.className=="icon_subjoin"){
        var add=target.getAttribute("_add")
        for(var k=0;k<data.length;k++){
            if(data[k].size==add){
                data[k].number+=1
                input_quantity[k].value=data[k].number+1
                goodsPrice[k].innerHTML=`${parseInt(data[k].number+1)*parseInt(data[k].price)}`
                setCookie("shopJson",JSON.stringify(data),14)
            }
        }
    }

    var totalSum=document.getElementsByClassName("totalSum")[0]
    var sum3=0
    for(var n=0;n<goodsPrice.length;n++){
        var goodsPrice2=document.getElementsByClassName("goodsPrice")[n]
        var goodsPriceinn=parseInt(goodsPrice2.innerHTML)
        sum3+=goodsPriceinn
        totalSum.innerHTML=`¥${sum3}`
    }
}

var totalSum=document.getElementsByClassName("totalSum")[0]
var sum3=0
for(var n=0;n<goodsPrice.length;n++){
    var goodsPrice2=document.getElementsByClassName("goodsPrice")[n]
    var goodsPriceinn=parseInt(goodsPrice2.innerHTML)
    sum3+=goodsPriceinn
    totalSum.innerHTML=`¥${sum3}`
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


var logo_img=document.getElementsByClassName("logo_img")[0]
logo_img.onclick=function(){
    window.open("../html/首页.html")
}

var c_r_right=document.getElementsByClassName("c-r-right")[0]
c_r_right.onclick=function(){
    window.open("../html/填写订单.html")
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