
//通过location得到对应id值
var imgId = location.href.split("?")[1].split("=")[1];


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
            var arr = JSON.parse(data);   
            resolve(arr);
        }
    })
}).then(function(arr){
    var str = "";
    var goodsclassbody = document.getElementById("goodsclassbody");

    //获取商品点击的个数
    var arr1 = [];
    if(getCookie("info")){
        arr1 = JSON.parse(getCookie("info"));
    }
    var goodsNum = 1;
    for(var i=0;i<arr1.length;i++){
        if(arr1[i].id == imgId){
            goodsNum = arr1[i].num;
        }
    }

    for(var i=0;i<arr.length;i++){
        if(arr[i].id == imgId){
            str = `<div class="gooddethead">
            <ul>
                <li><a href="../index.html">首页</a></li>
                <li>&nbsp;&gt;&nbsp;</li>
                <li>${arr[i].title}</li>
            </ul>
        </div>
        <div class="gooddetbigbox">
            <div  class="gooddetbigbox1">
                <div class="gooddetl">
                    <h3 class="gooddetltop">进口鲜果</h3>
                    <ul>
                        <li>南非水果</li>
                        <li>泰国水果</li>
                        <li>越南水果</li>
                        <li>法国水果</li>
                        <li>智利水果</li>
                        <li>菲律宾水果</li>
                        <li>墨西哥水果</li>
                        <li>澳大利亚水果</li>
                        <li>西班牙水果</li>
                        <li>新西兰水果</li>
                        <li>秘鲁水果</li>
                        <li>USA其他水果</li>
                    </ul>
                </div>
                <div class="gooddetlx">
                    <h3 class="gooddetlxtop">热销排行榜</h3>
                    <ul id="gooddetll">
                        <li data-id="${arr[34].id}">
                            <a href="##"><img src="../images/firefruit${arr[34].id}1.jpg" width="160" height="160" class="imgto"></a>
                            <div>
                                <a href="##" class="imgto">${arr[34].title}</a>
                                <div>${arr[34].price}</div>
                            </div>                       
                        </li>
                        <li data-id="${arr[25].id}">
                            <a href="##"><img src="../images/firefruit${arr[25].id}1.jpg" width="160" height="160" class="imgto"></a>
                            <div>
                                <a href="##" class="imgto">${arr[25].title}</a>
                                <div>${arr[25].price}</div>
                            </div>                       
                        </li>
                        <li data-id="${arr[27].id}">
                            <a href="##"><img src="../images/firefruit${arr[27].id}1.jpg" width="160" height="160" class="imgto"></a>
                            <div>
                                <a href="##" class="imgto">${arr[27].title}</a>
                                <div>${arr[27].price}</div>
                            </div>                       
                        </li>
                        <li data-id="${arr[32].id}">
                            <a href="##"><img src="../images/firefruit${arr[32].id}1.jpg" width="160" height="160" class="imgto"></a>
                            <div>
                                <a href="##" class="imgto">${arr[32].title}</a>
                                <div>${arr[32].price}</div>
                            </div>                       
                        </li>
                    </ul>
                </div>
            </div>
            <div class="gooddetbigbox2">
                <div>
                    <div>
                        <h3 class="gooddet-r-l-head">${arr[i].title}</h3>
                    </div>
                    <div>
                        <!-- 放大镜 -->
                        <div class="left gooddet-r-l">
                            <div id="gooddetbody">
                                <div class="gooddetbox">
                                    <div class="gooddetfilter"></div>
                                    <img src="../images/firefruit${imgId+1}.jpg" class="gooddetmiddle" width="330" height="330">
                                </div>
                                <div class="gooddetminImg"></div>
                                <div class="gooddetmax">
                                    <img src="../images/firefruit${imgId+1}.jpg" class="gooddetbigImg" width="660" height="660">
                                </div>
                            </div>                            
                        </div>
                        <div class="right gooddet-r-r">
                            <div class="gooddet-r-r-t">
                                <div>
                                    <i>销售价：</i>
                                    <span>${arr[i].price}</span>
                                    <i>(节省￥${arr[i].marketPrice.slice(1)-arr[i].price.slice(1)})</i>
                                </div>
                                <div>
                                    <i>市场价：</i><s>${arr[i].marketPrice}</s>
    
                                </div>
                                <div>
                                    <div class="left">
                                        <i>会员价：</i><i>最低￥77.00起</i>
    
                                    </div>
                                    <ul class="moreprice">
                                        <h3>更多会员价</h3>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                    </ul>
                                </div>
    
                            </div>
                            <div class="clear gooddet-r-r-b" id="pirceinfo">
                                <div>
                                    <i>送至：</i>
                                    <select id="">
                                        <option>北京 北京市 东城区</option>
                                        <option>北京 北京市 西城区</option>
                                        <option>北京 北京市 南城区</option>
                                    </select>
                                </div>
                                <div>
                                    <i>配送时效：</i>
                                    <i>今日19:00截单</i>
                                    <i>理赔保障：签收24小时</i>
    
                                </div>
                                <div>
                                    <i class="left fruitweight-t">重量：</i>
                                    <ul class="fruitweight">
                                        <li><a href="##" class="fruitactive">${arr[i].weight1}</a></li>
                                        <li><a href="##">${arr[i].weight2}</a></li>
                                        <li><a href="##">${arr[i].weight3}</a></li>
                                    </ul>
                                </div>
                                <div class="clear fruitnum">
                                    <i class="left">数量：</i>
                                    <b class="left" id="reduce">-</b>
                                    <input type="text" value="${goodsNum}" class="left" id="num">
                                    <b class="left" id="add">+</b>
                                </div>
                                <div class="clear addshopcart">
                                    <span class="left">
                                        <button id="shopcart">加入购物车</button>
                                        
                                    </span>
                                    <span class="left" id="scan">
                                        <i>扫一扫购买</i>
                                    </span>
                                </div>
                                <div id="remind">
                                    <div id="remindtit">
                                        <h4>提醒</h4>
                                        <img src="../images/close1.png" alt="##" class="closeremind">
                                    </div>
                                    <div class="clear remindcont">
                                        <p>加入购物车成功</p>
                                        <span>
                                            <i>目前选购商品共</i>
                                            <em>1</em>
                                            <i>种</i>
                                            <em>1</em>
                                            <i>件。合计:</i>
                                            <em>￥85.00</em>
                                            <button class="closeremind">继续购物</button>
                                            <a href="shopcart.html">进入购物车</a>
                                        </span>
                                    </div>
                                </div>
                                <div id="chartwe">
                                    <img src="../images/mm.png" alt="">
                                </div>
                                <div class="clear"></div>  
                            </div>
                        </div>
                        <div class="clear"></div>                            
                    </div>
                </div>
                <div class="goodsdetail">
                    <!-- 吸顶 -->
                    <div class="goodsdetail-head" id="goodsdetailnav">
                        <h4 class="left">商品详情</h4>
                        <ul id ="goodsdetailnavcont" class="right">
                            <li><a href="">${arr[i].price}</a></li>
                            <li><a href="##" class="hr2">立即购买</a></li>
                            <li><a href="##" class="hr3">加入购物车</a></li>
                        </ul>
                    </div>
                    <div class="goodsdetail-intro">
                        <ul>
                            <li>品牌：</li>
                            <li>所属分类：越南水果</li>
                        </ul>                            
                    </div>
    
                    <div>
                        <img src="${arr[i].detimg1}" alt="">
                        <img src="${arr[i].detimg2}" alt="">
                        <img src="${arr[i].detimg3}" alt="">
                    </div>
                    <div>
                        <img src="../images/goods4034.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>`;
    
        }
    }
    goodsclassbody.innerHTML = str;


    /* 放大镜 */
    function Magnifier(container,options){
        this.content = document.querySelector(container);
        this.minImg = this.content.querySelector(options.minImg);
        this.middle = this.content.querySelector(options.middle);
        this.bigImg = this.content.querySelector(options.bigImg);
        this.oBox = this.content.querySelector(options.box);
        this.max = this.content.querySelector(options.max);
        this.oFilter = this.content.querySelector(options.filter);
    }

    Magnifier.prototype.init = function(){
        var str = "";
        for(var i=0;i<3;i++){
            str+="<img src=../images/firefruit"+imgId+(i+1)+".jpg class='small'  data-url=../images/firefruit"+imgId+(i+1)+".jpg width="+60+" height="+60+">";
        }
        this.minImg.innerHTML = str;
        this.out();
        this.charu();
        this.over();
        this.move1();
    }

    Magnifier.prototype.charu = function(){
        var _this = this;
        this.aImg = this.minImg.querySelectorAll("img");
        for(var i=0;i<this.aImg.length;i++){
            this.aImg[i].onmouseover = function(){
                _this.src = this.getAttribute("data-url");
                _this.middle.src = _this.src;
                _this.bigImg.src = _this.src;
            }
        }    
    }

    Magnifier.prototype.over = function(){
        var _this = this;
        this.oBox.onmouseover = function(){
            _this.oFilter.style.display = "block";
            _this.max.style.display = "block";
        }    
    }

    Magnifier.prototype.out = function(){
        var _this = this;
        this.oBox.onmouseout = function(){
            _this.oFilter.style.display = "none";
            _this.max.style.display = "none";
        }    
    }

    Magnifier.prototype.move1 = function(){
        var _this = this;
        this.oBox.onmousemove = function(e){
            var e = e||event;
            var l = e.pageX - _this.content.offsetLeft -  _this.oFilter.offsetWidth/2;
            var t = e.pageY - _this.content.offsetTop -  _this.oFilter.offsetHeight/2;
            l = l>_this.oBox.offsetWidth - _this.oFilter.offsetWidth?_this.oBox.offsetWidth - _this.oFilter.offsetWidth:(l<0?0:l);
            t = t>_this.oBox.offsetHeight - _this.oFilter.offsetHeight?_this.oBox.offsetHeight - _this.oFilter.offsetHeight:(t<0?0:t);
            _this.oFilter.style.left = l + "px";
            _this.oFilter.style.top = t +"px";
            _this.bigImg.style.left = -2*l +"px";
            _this.bigImg.style.top = -2*t +"px";
        }
    }

    // goods 页面的放大镜
    var magnifier1 = new Magnifier("#gooddetbody",{
        minImg:".gooddetminImg",
        middle:".gooddetmiddle",
        bigImg:".gooddetbigImg",
        filter:".gooddetfilter",
        box:".gooddetbox",
        max:".gooddetmax",
    });
    magnifier1.init()



    //吸顶
    var box = document.getElementById("goodsdetailnav");
    var nav = document.getElementById("goodsdetailnavcont");

    window.onscroll = function(){
        var nTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(nTop > 723){
            box.style.position = "fixed";
            box.style.top = "0";
            nav.style.display = "block";
        }else{
            box.style.position = "relative";
            nav.style.display = "none";
        }
    }



    //事件触发
    var pirceInfo = document.getElementById("pirceinfo");
    var num = document.getElementById("num");
    var shopcart = document.getElementById("shopcart")
    var remind = document.getElementById("remind");
    var scan = document.getElementById("scan");
    var chartwe = document.getElementById("chartwe");

    pirceInfo.onclick = function(e){
        
        var ele = e || event;
        var target = ele.target || ele.srcElement;

        //点击 +
        if(target.tagName == "B" && target.id == "add"){
            
            var val = this.children[3].children[2].value;
            val++;
            this.children[3].children[2].value = val;
        }

        //点击 -
        if(target.tagName == "B" && target.id == "reduce"){
            
            var val = this.children[3].children[2].value;
            if(val>1){
                val--;
            }

            this.children[3].children[2].value = val;
        }

        //点击加入购物车
        if(target.tagName == "BUTTON" && target.id == "shopcart"){

            remind.style.display = "block";

            var goods = {};
            var val = this.children[3].children[2].value;

            remind.children[1].children[1].children[3].innerText = val;
            remind.children[1].children[1].children[5].innerText = "￥"+val*85
            
            if(getCookie("info")){
                arr = JSON.parse(getCookie("info"));
            }else{
                var arr = [];
            }

            if(arr.length>0){
                var bStop = false;
                for(var i=0;i<arr.length;i++){
                    
                    if(arr[i].id == imgId){
                        arr[i].num = val;
                        bStop = true;
                        break;
                    }
                }    
                if(!bStop){
                    goods.id = imgId;
                    goods.num = val;
                    arr.push(goods);
                }
                
            }else{
                goods.id = imgId;
                goods.num = val;
                arr.push(goods);
            }
        setCookie("info",JSON.stringify(arr),7)
        }
        
        //关闭弹出的购物框
        if((target.tagName == "IMG" || target.tagName == "BUTTON") && target.className == "closeremind"){
            remind.style.display = "none";
        }


        
    }
    

    //侧边栏点击
    var gooddetll = document.getElementById("gooddetll");
    gooddetll.onclick = function(e){
        var ele = e || event;
        var target = ele.target || ele.srcElement;

        //跳转详情页
        if((target.tagName == "IMG"||target.tagName == "A")&&target.className == "imgto"){
            var imgId = target.parentNode.parentNode.getAttribute("data-id");
            location.href = "goods.html?imgId="+imgId;
        }
    }    


    //扫一扫
    scan.onmouseover = function(){
        chartwe.style.display = "block";
        chartwe.onmouseover = function(){
            chartwe.style.display = "block";
        }
    }
    scan.onmouseout = function(){
        chartwe.style.display = "none";
        chartwe.onmouseout = function(){
            chartwe.style.display = "none";
        }
    }
    
})


