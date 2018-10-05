
var oList = document.getElementById("list");
var priceAll = document.getElementById("priceAll");
var shopcarttab = document.getElementById("shopcarttab");
var str = "";
var arr = [];
var len = 0;
var money = 0;


//网站搜索框购物车
var btnshopcart = document.getElementById("btnshopcart");
btnshopcart.onclick = function(){
    location.href = "shopcart.html";
}

//将对应数据渲染到页面
new Promise(function(resolve,reject){
    ajax({
        type:"get",
        url:"../json/fruitcont.json",
        data:{},
        success:function(data){
            var arrjson = JSON.parse(data);   
            resolve(arrjson);
        }
    })
}).then(function(obj){
    var shopcarttab = document.getElementById("shopcarttab");
    var oList = document.getElementById("list");
    var priceAll = document.getElementById("priceAll");

    if(getCookie("info")){
        arr = JSON.parse(getCookie("info"))
        len = arr.length;
    }
    for(var i=0;i<len;i++){
        for(var j=0;j<obj.length;j++){
            if(arr[i].id == obj[j].id){
                str+=`<tr>
                <td>
                    <div class="tabtoppic" data-id="${obj[j].id}">
                        <img src="../images/firefruit${obj[j].id+1}.jpg" width="80" height="80"/ class="imgto">
                    </div>
                </td>
                <td class="tabcont" data-id="${obj[j].id}">
                    <div class="imgto">${obj[j].title}</div>
                    <div>重量：${obj[j].weight1}</div>
                </td>
                <td>${obj[j].price}</td>
                <td>
                    <div class="quantity">
                        <b class="left" id="reduce">-</b>
                        <input type="text" value="${arr[i].num}" class="left" id="num">
                        <b class="left" id="add">+</b>
                    </div>
                </td>
                <td>￥0.00</td>
                <td>255</td>
                <td>￥${arr[i].num*obj[j].price.slice(1)}.00</td>
                <td>
                    <a href="##">收藏</a>
                    <em>|</em>
                    <a href="##" class="del">移除</a>
                </td>
            </tr>`;
            }
        }
    }

    //输出添加内容
    oList.innerHTML+=str;

    //计算已添加内容总价格 
    for(var i=0;i<len;i++){
        money+=parseInt(oList.children[i].children[6].innerText.slice(1));
    }
    priceAll.children[0].children[0].children[0].children[1].children[0].innerText = "￥"+money+".00";
    priceAll.children[0].children[0].children[2].children[1].children[0].innerText = "￥"+money+".00";

    //点击事件发生
    shopcarttab.onclick = function(e){
        var ele = e || event;
        var target = ele.target || ele.srcElement;

        //判断是哪里点的    增加减少的button按钮点击的
        if(target.tagName == "B"){

            //是button下 减少按钮 数量减1
            if(target.id == "reduce"){
                if(target.parentNode.children[1].value >0){
                    target.parentNode.children[1].value = parseInt(target.parentNode.children[1].value) - 1;
                }
            }

            //是button按钮下增加按钮 数量加1
            if(target.id == "add"){
                target.parentNode.children[1].value = parseInt(target.parentNode.children[1].value) + 1;
            }

            //判断改变后商品单个总价
            var priceVal = target.parentNode.parentNode.parentNode.children[2].innerText.slice(1);
            target.parentNode.parentNode.parentNode.children[6].innerText = "￥"+priceVal*target.parentNode.children[1].value;

        }
        
        //是删除按钮 减少个数
        if(target.tagName == "A"&&target.className == "del"){
            target.parentNode.parentNode.remove();
            len--;
        }

        //跳转详情页
        if((target.tagName == "IMG"||target.tagName == "DIV")&&target.className == "imgto"){
            var imgId = target.parentNode.getAttribute("data-id");
            location.href = "goods.html?imgId="+imgId;
        }

        //计算事件触发后的价格
        money = 0;
        for(var i=0;i<len;i++){
            money+=parseInt(oList.children[i].children[6].innerText.slice(1));        
        }

        //输出 事件触发后的价格
        priceAll.children[0].children[0].children[0].children[1].children[0].innerText = "￥"+money+".00";
        priceAll.children[0].children[0].children[2].children[1].children[0].innerText = "￥"+money+".00";
        
        //点击图片去详情页
        if(target.tagName == "A" && target.className == "going"){
            location.href = "../index.html";
        }

    }

});


