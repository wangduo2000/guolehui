//点击北京选择城市
var btnBeijin = document.getElementById("btn-beijin");
var coverMisk = document.getElementById("cover-misk");

btnBeijin.onclick = function(){
    var contWhere = document.getElementById("contwhere");
    
    var closeX = document.getElementById("closex");
    
    var iW = document.documentElement.clientWidth;
    var iH = document.documentElement.clientHeight;
    
    var disX = contWhere.offsetWidth;
    var disY = contWhere.offsetHeight;

    coverMisk.style.display = "block";
    contWhere.style.display = "block";
    contWhere.style.left = (iW-disX)/2 + "px";
    contWhere.style.top = (iH-455)/2 + "px";
    closeX.onclick = function(){
        coverMisk.style.display = "none";
        contWhere.style.display = "none";
    }
}

//登录 注册
var headHead = document.getElementById("headhead");
var signTit = document.getElementById("signtit");
var signIn = document.getElementById("signin");

var clientW = document.documentElement.clientWidth;
var clientH = document.documentElement.clientHeight;

var checkNumber = randomCode(4);
signIn.children[2].children[3].children[2].innerText = checkNumber;


//头部的点击事件
headHead.onclick = function(e){
    var e = e||event;
    var target = e.target || e.srcElement;
    signIn.children[0].children[0].children[1].style.marginLeft = 76+"px";
    

    if(target.tagName == "A" && (target.className=="enter" || target.className=="vipnumb") || target.tagName == "LI" && target.id=="headernob2"){
        signIn.style.display = "block";
        coverMisk.style.display = "block";
        var disW = signIn.offsetWidth;
        var disH = signIn.offsetHeight;
        signIn.style.left = (clientW-disW)/2 + "px";
        signIn.style.top = (clientH-disH)/2 + "px";

    }
    if(target.tagName == "A" && target.className=="login"){
        signIn.style.display = "block";
        coverMisk.style.display = "block";
        signIn.children[1].style.display = "none";
        signIn.children[2].style.display = "block";
        signIn.children[0].children[0].children[0].className = "active2";
        signIn.children[0].children[0].children[1].className = "active1";
        var disW = signIn.offsetWidth;
        var disH = signIn.offsetHeight;
        signIn.style.left = (clientW-disW)/2 + "px";
        signIn.style.top = (clientH-disH)/2 + "px";


        mMcheck();

    }
    
}
//注册表单的点击事件
signIn.onclick = function(e){
    var e = e||event;
    var target = e.target || e.srcElement;

    if(target.tagName == "A" && target.className=="changenum"){
        checkNumber = randomCode(4);
        target.parentNode.children[2].innerText = checkNumber;
    }
    if(target.tagName == "IMG" && target.id=="closesign"){
        signIn.style.display = "none";
        coverMisk.style.display = "none";
    }
    if(target.tagName == "LI" && target.id=="signtit2"){
        target.className = "active1";
        target.parentNode.children[0].className = "active2"
        signIn.children[1].style.display = "none";
        signIn.children[2].style.display = "block";
        var disW = signIn.offsetWidth;
        var disH = signIn.offsetHeight;
        signIn.style.left = (clientW-disW)/2 + "px";
        signIn.style.top = (clientH-disH)/2 + "px";
        

        mMcheck();
    }
    if(target.tagName == "LI" && target.id=="signtit1"){
        target.className = "active1";
        target.parentNode.children[1].className = "active2"
        signIn.children[1].style.display = "block";
        signIn.children[2].style.display = "none";
        var disW = signIn.offsetWidth;
        var disH = signIn.offsetHeight;
        signIn.style.left = (clientW-disW)/2 + "px";
        signIn.style.top = (clientH-disH)/2 + "px";
    }
}
signTit.onmouseover = function(e){
    var e = e||event;
    var target = e.target || e.srcElement;
    if(target.tagName == "IMG" && target.id=="closesign"){
        target.src = "images/close2.png";
    }
    if(target.tagName == "LI" && (target.id=="signtit1"||target.id=="signtit2")){
        target.style.cursor = "pointer";
    }
}
signTit.onmouseout = function(e){
    var e = e||event;
    var target = e.target || e.srcElement;
    if(target.tagName == "IMG" && target.id=="closesign"){
        target.src = "images/close1.png";
    }
}
//表单验证   
function mMcheck(){
    var passWord = document.getElementById("password");
    var passWord1 = document.getElementById("password1");
    var userName = document.getElementById("username");
    var mM = passWord.parentNode.children[2];

    for(var i=1;i<5;i++){
        mM.children[i].style.display = "none";
    }
    passWord.oninput = function(){
        var reg = {
            weak1:/^[a-zA-Z]{6,16}$/,
            weak2:/^\d{6,16}$/,
            in:/^[a-zA-Z0-9]{6,16}$/,
            stronger:/^[\w\|\.@_]{6,16}$/
        }
        var val = this.value;
        
        if(reg.weak1.test(val)||reg.weak2.test(val)){
            for(var i=1;i<5;i++){
                mM.children[i].style.display = "none";
            }
            mM.children[2].style.display = "block";
            mM.children[5].children[0].style.width = 33+"%";
            mM.children[5].children[0].style.background = "red";
        }else if(reg.in.test(val)){
            for(var i=1;i<5;i++){
                mM.children[i].style.display = "none";
            }
            mM.children[3].style.display = "block";
            mM.children[5].children[0].style.width = 67+"%";
            mM.children[5].children[0].style.background = "orange";
        }else if(reg.stronger.test(val)){
            for(var i=1;i<5;i++){
                mM.children[i].style.display = "none";
            }
            mM.children[4].style.display = "block";
            mM.children[5].children[0].style.width = 100+"%";
            mM.children[5].children[0].style.background = "green";
        }else{
            for(var i=1;i<5;i++){
                mM.children[i].style.display = "none";
            }
            mM.children[1].style.display = "block";
            mM.children[5].children[0].style.width = 0+"%";
        }
    }
    passWord1.onblur = function(){
        var val1 = this.value;
        var val = passWord.value;

        if(val1 == val){
            this.parentNode.children[2].style.color = "green";
            this.parentNode.children[2].innerText = "正确";
        }else{
            this.parentNode.children[2].style.color = "red";
            this.parentNode.children[2].innerText = "错误";
        }
    }
    userName.onblur=function(){
        var reg = {
            phone:/^\d{11,11}$/,
            email:/^[a-zA-Z0-9]+@(163|qq)\.(com)$/,
        }
        var val = this.value;
        
        if(reg.phone.test(val)||reg.email.test(val)){
            this.parentNode.children[2].style.color = "green";
            this.parentNode.children[2].innerText = "正确";
        }else{
            this.parentNode.children[2].style.color = "red";
            this.parentNode.children[2].innerText = "错误";
        }
    }
}





//header 中的图片
var headChart = document.getElementById("headchart")
var headLi = headChart.querySelectorAll("#headchart>li")
var chartPic = document.getElementById("chartpic");
var vip = document.getElementById("vip");
for(var i=0;i<headLi.length;i++){
    headLi[i].index = i;
    headLi[i].onmouseover = function(){
        for(var j=0;j<headLi.length;j++){
            headLi[j].children[1].style.display = "none";
        }
        headLi[this.index].children[1].style.display = "block";
    } 
}   

headChart.onmouseout = function(e){
    for(var j=0;j<headLi.length;j++){
        headLi[j].children[1].style.display = "none";
    }
}


//banner 导航的数据渲染
var bannerBar = document.getElementById("bannerbar");
var navbarbody = document.getElementById("navbarbody");
if(bannerBar || navbarbody){
    new Promise(function(resolve,reject){
        if(bannerBar){
            ajax({
                type:"get",
                url:"json/fruitcont.json",
                data:{},
                success:function(data){
                    var arr = JSON.parse(data);
                    resolve(arr);
                }
            })
        }else{
            ajax({
                type:"get",
                url:"../json/fruitcont.json",
                data:{},
                success:function(data){
                    var arr = JSON.parse(data);
                    resolve(arr);
                }
            })
        }
    }).then(function(arr){
            var str = "";
            var str1 = "";
            var bannerBox = document.getElementById("bannerbox");
            var nav1Box = document.getElementById("nav1box");
                str1 =`
                <div class="banner-nav" id="bannernav">
                    <ul>  
                        <li><a href="html/classifygoods.html">
                            <h5>${arr[5].title}</h5>
                            <i>${arr[5].detailnav1}</i>
                            <i>${arr[5].detailnav2}</i>
                            <i>${arr[5].detailnav3}</i></a>
                            <div>
                                <ul>
                                    <h5>${arr[5].title}</h5>
                                    <li><a href="##">${arr[5].detailnav1}</a></li>
                                    <li><a href="##">${arr[5].detailnav2}</a></li>
                                    <li><a href="##">${arr[5].detailnav3}</a></li>
                                    <li><a href="##">${arr[5].detailnav4}</a></li>
                                    <li><a href="##">${arr[5].detailnav5}</a></li>
                                    <li><a href="##">${arr[5].detailnav6}</a></li>
                                    <li><a href="##">${arr[5].detailnav7}</a></li>
                                    <li><a href="##">${arr[5].detailnav8}</a></li>
                                    <li><a href="##">${arr[5].detailnav9}</a></li>
                                    <li><a href="##">${arr[5].detailnav10}</a></li>
                                    <li><a href="##">${arr[5].detailnav11}</a></li>
                                    <li><a href="##">${arr[5].detailnav12}</a></li>
                                </ul>
                                
                            </div>
                        </li>
                    
                        <li>  <a href="##">
                            <h5>${arr[6].title}</h5>
                            <i>${arr[6].detailnav1}</i>
                            <i>${arr[6].detailnav2}</i>
                            <i>${arr[6].detailnav3}</i>   </a> 
                            <div>
                                <ul>
                                    <h5>${arr[6].title}</h5>
                                    <li><a href="##">${arr[6].detailnav1}</a></li>
                                    <li><a href="##">${arr[6].detailnav2}</a></li>
                                    <li><a href="##">${arr[6].detailnav3}</a></li>
                                    <li><a href="##">${arr[6].detailnav4}</a></li>
                                </ul>

                            </div>
                        </li>    
                        
                        <li>   <a href="##">                  
                            <h5>${arr[7].title}</h5>
                            <i>${arr[7].detailnav1}</i> </a> 
                            <div>
                                <ul>
                                    <h5>${arr[7].title}</h5>
                                    <li><a href="##">${arr[7].detailnav1}</a></li>
                                </ul>
                                
                            </div>
                        </li>    
                    
                        <li>   <a href="##"> 
                            <h5>${arr[8].title}</h5>
                            <i>${arr[8].detailnav1}</i>
                            <i>${arr[8].detailnav2}</i>   </a>  
                            <div>
                                <ul>
                                    <h5>${arr[8].title}</h5>
                                    <li><a href="##">${arr[8].detailnav1}</a></li>
                                    <li><a href="##">${arr[8].detailnav2}</a></li>
                                </ul>

                            </div>
                        </li>    
                    
                        <li>    <a href="##">
                            <h5>${arr[9].title}</h5>
                            <i>${arr[9].detailnav1}</i></a> 
                            <div>
                                <ul>
                                    <h5>${arr[9].title}</h5>
                                    <li><a href="##">${arr[9].detailnav1}</a></li>
                                </ul>

                            </div>
                        </li>    

                        <li><a href="##">
                            <h5>${arr[10].title}</h5>
                            <i>${arr[10].detailnav1}</i></a>
                            <div>
                                <ul>
                                    <h5>${arr[10].title}</h5>
                                    <li><a href="##">${arr[10].detailnav1}</a></li>
                                    <li><a href="##">${arr[10].detailnav2}</a></li>
                                    <li><a href="##">${arr[10].detailnav3}</a></li>
                                </ul>

                            </div>
                            
                        </li>    
                        
                        <li class="bannavbot"><a href="##">
                            <h5>${arr[11].title}</h5>
                            <i>${arr[11].detailnav1}</i></a>
                            <div>
                                <ul>
                                    <h5>${arr[11].title}</h5>
                                    <li><a href="##">${arr[11].detailnav1}</a></li>
                                </ul>

                            </div>
                        </li>                          
                    
                    </ul>
                </div>`;
                str =`
                <div class="banner-pic" id="bannerpic">
                <ul id="banbox">
                    <li class="banshow">
                        <a href="##">
                            <img src="${arr[0].img}" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="##">
                            <img src="${arr[1].img}" alt="">                        
                        </a>
                    </li>
                    <li>
                        <a href="##">
                            <img src="${arr[2].img}" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="##">
                            <img src="${arr[3].img}" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="##">
                            <img src="${arr[4].img}" alt="">
                        </a>
                    </li>  
                </ul>
                <div id="banbtn">
                    <span class="banactive">1</span><i></i>
                    <span>2</span><i></i>
                    <span>3</span><i></i>
                    <span>4</span><i></i>
                    <span>5</span><i></i>
                </div>
            </div>
            <!-- banner 导航 -->
            <div class="banner">
                <div class="banner-nav" id="bannernav">
                    <ul>  
                        <li><a href="html/classifygoods.html">
                            <h5>${arr[5].title}</h5>
                            <i>${arr[5].detailnav1}</i>
                            <i>${arr[5].detailnav2}</i>
                            <i>${arr[5].detailnav3}</i></a>
                            <div>
                                <ul>
                                    <h5>${arr[5].title}</h5>
                                    <li><a href="##">${arr[5].detailnav1}</a></li>
                                    <li><a href="##">${arr[5].detailnav2}</a></li>
                                    <li><a href="##">${arr[5].detailnav3}</a></li>
                                    <li><a href="##">${arr[5].detailnav4}</a></li>
                                    <li><a href="##">${arr[5].detailnav5}</a></li>
                                    <li><a href="##">${arr[5].detailnav6}</a></li>
                                    <li><a href="##">${arr[5].detailnav7}</a></li>
                                    <li><a href="##">${arr[5].detailnav8}</a></li>
                                    <li><a href="##">${arr[5].detailnav9}</a></li>
                                    <li><a href="##">${arr[5].detailnav10}</a></li>
                                    <li><a href="##">${arr[5].detailnav11}</a></li>
                                    <li><a href="##">${arr[5].detailnav12}</a></li>
                                </ul>
                                
                            </div>
                        </li>
                    
                        <li>  <a href="##">
                            <h5>${arr[6].title}</h5>
                            <i>${arr[6].detailnav1}</i>
                            <i>${arr[6].detailnav2}</i>
                            <i>${arr[6].detailnav3}</i>   </a> 
                            <div>
                                <ul>
                                    <h5>${arr[6].title}</h5>
                                    <li><a href="##">${arr[6].detailnav1}</a></li>
                                    <li><a href="##">${arr[6].detailnav2}</a></li>
                                    <li><a href="##">${arr[6].detailnav3}</a></li>
                                    <li><a href="##">${arr[6].detailnav4}</a></li>
                                </ul>

                            </div>
                        </li>    
                        
                        <li>   <a href="##">                  
                            <h5>${arr[7].title}</h5>
                            <i>${arr[7].detailnav1}</i> </a> 
                            <div>
                                <ul>
                                    <h5>${arr[7].title}</h5>
                                    <li><a href="##">${arr[7].detailnav1}</a></li>
                                </ul>
                                
                            </div>
                        </li>    
                    
                        <li>   <a href="##"> 
                            <h5>${arr[8].title}</h5>
                            <i>${arr[8].detailnav1}</i>
                            <i>${arr[8].detailnav2}</i>   </a>  
                            <div>
                                <ul>
                                    <h5>${arr[8].title}</h5>
                                    <li><a href="##">${arr[8].detailnav1}</a></li>
                                    <li><a href="##">${arr[8].detailnav2}</a></li>
                                </ul>

                            </div>
                        </li>    
                    
                        <li>    <a href="##">
                            <h5>${arr[9].title}</h5>
                            <i>${arr[9].detailnav1}</i></a> 
                            <div>
                                <ul>
                                    <h5>${arr[9].title}</h5>
                                    <li><a href="##">${arr[9].detailnav1}</a></li>
                                </ul>

                            </div>
                        </li>    

                        <li><a href="##">
                            <h5>${arr[10].title}</h5>
                            <i>${arr[10].detailnav1}</i></a>
                            <div>
                                <ul>
                                    <h5>${arr[10].title}</h5>
                                    <li><a href="##">${arr[10].detailnav1}</a></li>
                                    <li><a href="##">${arr[10].detailnav2}</a></li>
                                    <li><a href="##">${arr[10].detailnav3}</a></li>
                                </ul>

                            </div>
                            
                        </li>    
                        
                        <li class="bannavbot"><a href="##">
                            <h5>${arr[11].title}</h5>
                            <i>${arr[11].detailnav1}</i></a>
                            <div>
                                <ul>
                                    <h5>${arr[11].title}</h5>
                                    <li><a href="##">${arr[11].detailnav1}</a></li>
                                </ul>

                            </div>
                        </li>                          
                    
                    </ul>
                </div>
            </div>`;

            if(nav1Box){
                nav1Box.innerHTML += str1;
            }
            if(bannerBox){
                bannerBox.innerHTML += str;
            }
            
            // banner 处左导航
            function navdynamic(){
                var bannerNav = document.getElementById("bannernav");
                var oLiBan = bannerNav.querySelectorAll("#bannernav>ul>li");
                for(var i=0;i<oLiBan.length;i++){
                    oLiBan[i].index = i;
                    oLiBan[i].onmouseover = function(){
                        for(var j=0;j<oLiBan.length;j++){
                            oLiBan[j].children[1].style.display = "none";
                        }
                        this.style.background = "#ccc";
                        
                        oLiBan[this.index].children[1].style.display = "block";
                        oLiBan[0].children[1].style.top = -0 + "px";
                        oLiBan[1].children[1].style.top = -65 + "px";
                        oLiBan[6].children[1].style.top = -33 + "px";
                        
                    } 
                }   
                
                bannerNav.onmouseout = function(e){
                    for(var j=0;j<oLiBan.length;j++){
                        oLiBan[j].children[1].style.display = "none";
                        oLiBan[j].style.background = "#99cc00";
                        
                    }
                }                
            }


            if(!nav1Box){
                navdynamic();
            }else{
                var bannerNav = document.getElementById("bannernav");
                bannerNav.style.display = "none";
                nav1Box.onmouseover = function(){
                    bannerNav.style.display = "block";
                    navdynamic();
                }
                nav1Box.onmouseout = function(){
                    bannerNav.style.display = "none";
                }
            }



            if(bannerBox){
                //banner 简单滑动
                var iNow = 0;
                var next = 0
                var banBox = document.getElementById("banbox");
                var banLi = banBox.querySelectorAll("#banbox>li")
                var bannerPic = document.getElementById("bannerpic");
                var banBtn = document.getElementById("banbtn");
                var banSpan = banBtn.getElementsByTagName("span");

                for(var i=0;i<banSpan.length;i++){
                    banSpan[i].index = i;
                    banSpan[i].onmouseover = function(){
                        for(var j=0;j<banSpan.length;j++){
                            banLi[j].style.opacity = 0;
                            banSpan[j].className = "";
                        }
                        
                        banLi[this.index].style.opacity = 1;
                        this.className = "banactive";
                        next = this.index;
                        iNow = next;
                    }
                }
                //banner 的淡入淡出轮播
                bannerPic.onmouseover = function(){
                    clearInterval(timer);
                }
                bannerPic.onmouseout = function(){
                    autoplay();
                }
                var timer;

                function autoplay(){
                    timer = setInterval(function(){
                        move(banLi[next],{opacity:0});
                        if(next == banLi.length -1){
                            next = 0;
                        }else{
                            next++;
                        }
                        toImg();
                    },3500);
                }
                autoplay();
                function toImg(){
                    
                    move(banLi[next],{opacity:100});
                    move(banLi[iNow],{opacity:0});
                    iNow = next;
                    for(var i=0;i<banLi.length;i++){
                        banSpan[i].className = "";
                    }
                    
                    banSpan[next].className = "banactive";
                }

            }
    })

}




// 广告及新闻 
var contentnews = document.getElementById("contentnews");
if(contentnews){
    ajax({
        type:"get",
        url:"json/fruitcont.json",
        data:{},
        success:function(data){
            var arr = JSON.parse(data);
            var str = "";
            var contNews = document.getElementById("contnews");
            str +=`
            <div>
                <a href="##">
                    <img src="${arr[12].img}" alt="">
                </a>
                <a href="##">
                    <img src="${arr[13].img}" alt="">
                </a>
            </div>
            <div>
                <h5>${arr[14].title}</h5>
                <ul>
                    <li><a href="##">${arr[15].title}</a></li>
                    <li><a href="##">${arr[16].title}</a></li>
                    <li><a href="##">${arr[17].title}</a></li>
                    <li><a href="##">${arr[18].title}</a></li>
                    <li><a href="##">${arr[19].title}</a></li>
                    <li><a href="##">${arr[21].title}</a></li>
                    <li><a href="##">${arr[21].title}</a></li>
                    <li><a href="##">${arr[22].title}</a></li>
                </ul>
            </div>`;
        
            contNews.innerHTML += str;

            var contNews = document.getElementById("contnews");
            var contNDiv = contNews.getElementsByTagName("div");
            contNews.style.height = 282 + "px";
            contNDiv[0].style.width = 950 + "px";
            contNDiv[1].style.width = 238 + "px";
            contNDiv[1].style.height = 274 + "px";
            contNDiv[1].style.border = 1 + "px"+" "+"solid"+" "+"#eee";
            contNDiv[1].style.borderTop = 2 + "px"+" "+"solid"+" "+"#9c0";
            contNDiv[1].children[1].style.margin = 11 + "px"+" "+0+" "+0+" "+10+"px";
            for(var i=0;i<8;i++){
                contNDiv[1].children[1].children[i].style.listStyleType = "square";
                contNDiv[1].children[1].children[i].style.listStyleSize = 5+"px";
                contNDiv[1].children[1].children[i].style.listStylePosition = "inside";
                contNDiv[1].children[1].children[i].style.fontSize = 14 + "px"; 
                contNDiv[1].children[1].children[i].style.margin = 6 + "px"+" "+0;
                contNDiv[1].children[1].children[i].style.color = "#333";
                contNDiv[1].children[1].children[i].children[0].style.color = "#333";
                contNDiv[1].children[1].children[i].children[0].onmouseover = function(){
                    for(var j=0;j<8;j++){
                        contNDiv[1].children[1].children[j].children[0].style.color = "#333";
                    }
                    this.style.color = "#e22a40";
                }
                contNDiv[1].children[1].children[i].children[0].onmouseout = function(){
                    for(var j=0;j<8;j++){
                        contNDiv[1].children[1].children[j].children[0].style.color = "#333";
                    }
                }
                
            }
            // contNews.onclick = function(e){
            //     var e = e||event;
            //     var target = e.target||e.srcElement;
            //     if(target.tagName == "IMG"){
            //         var imgId = target.parentNode.parentNode.getAttribute("data-id");
            //         location.href = "goods.html?imgId="+imgId;
            //     }                
            // }
        }
    });
}




//热门水果
var hotfruitbox = document.getElementById("hotfruitbody");
if(hotfruitbox){
    ajax({
        type:"get",
        url:"json/fruitcont.json",
        data:{},
        success:function(data){
            var arr = JSON.parse(data);
            var str = "";
            var hotFruit = document.getElementById("hotfruit");
            
                str +=`
                <ul class="hot-fruit-tit" >
                    <li ><h3>${arr[23].title}</h3></li>
                    <li id="hotfruitall"><a href="##">${arr[24].title}</a></li>
                </ul>
                <ul class="hot-fruit-cont" id="hotfruitcont">
                    <li data-id="${arr[25].id}">
                        <a href="##">
                            <img src="${arr[25].img}" alt="">
                        </a>
                    </li>
                    <li data-id="${arr[26].id}">
                        <a href="##">
                            <img src="${arr[26].img}" alt="">
                        </a>
                    </li>
                    <li data-id="${arr[27].id}">
                        <a href="##">
                            <img src="${arr[27].img}" alt="">
                        </a>
                    </li>
                    <li data-id="${arr[28].id}">
                        <a href="##">
                            <img src="${arr[28].img}" alt="">    
                        </a>
                    </li>
                    <li data-id="${arr[29].id}">
                        <a href="##">
                            <img src="${arr[29].img}" alt="">    
                        </a>
                    </li>
                    <li data-id="${arr[30].id}">
                        <a href="##">
                            <img src="${arr[30].img}" alt="">    
                        </a>
                    </li>
                </ul>`;
            
            hotFruit.innerHTML += str;

            hotFruit.onclick = function(e){
                var e = e||event;
                var target = e.target||e.srcElement;
                if(target.tagName == "IMG"){
                    var imgId = target.parentNode.parentNode.getAttribute("data-id");
                    if(imgId == 304||imgId == 306||imgId == 308){
                        location.href = "##";
                    }else{
                        location.href = "html/goods.html?imgId="+imgId;
                    }

                }                
            }

        }
    });
}




// 水果分类展示
var fruitdifcont = document.getElementById("fruitdifcont");
if(fruitdifcont){
    ajax({
        type:"get",
        url:"json/fruitcont.json",
        data:{},
        success:function(data){
            var arr = JSON.parse(data);
            var str = "";
            var fruitCont = document.getElementById("fruitcont");
            for(j=0;j<4;j++){
                str +=`<div class="fruitcont">
                    <div class="fruitcont-l">
                        <div class="fruitcont-l1">${arr[31+j*8].title}</div>
                        <div data-id="${arr[32+j*8].id}"><a href="##"><img src="${arr[32+j*8].img}"></a></div>
                    </div>
                    <div class="fruitcont-box">
                        <ul class="fruitcont-r" id="fruitcontr">
                            <div class="fruitcont-r-big">
                                <div class="fruitcont-r-big-img" data-id="${arr[33+j*8].id}">
                                    <a href="##"><img src="${arr[33+j*8].img}"></a>
                                </div>
                                <div class="fruitcont-r-big-c">
                                    <div class="fruitcont-r-big-c1">
                                        <a href="##" class="fruitcont-r-big-c1-1">&lt;</a>
                                        <a href="##" class="fruitcont-r-big-c1-2">&gt;</a>
                                    </div>
                                    <div class="fruitcont-r-big-c2">
                                        <a href="##"></a>
                                    </div>
                                </div>
                            </div>
                            <li class="fruitcont-r-li" data-id="${arr[34+j*8].id}">
                                <a href="##"><img src="${arr[34+j*8].img}" alt=""></a>
                                <div>
                                    <a href="##">${arr[34+j*8].title}</a>
                                    <div>${arr[34+j*8].price}</div>
                                </div>                    
                            </li>
                            <li data-id="${arr[35+j*8].id}">
                                <a href="##"><img src="${arr[35+j*8].img}" alt=""></a>
                                <div>
                                    <a href="##">${arr[35+j*8].title}</a>
                                    <div>${arr[35+j*8].price}</div>
                                </div>                   
                            </li>
                            <li data-id="${arr[36+j*8].id}">
                                <a href="##"><img src="${arr[36+j*8].img}" alt=""></a>
                                <div>
                                    <a href="##">${arr[36+j*8].title}</a>
                                    <div>${arr[37+j*8].price}</div>
                                </div>                    
                            </li>
                            <li data-id="${arr[37+j*8].id}">
                                <a href="##"><img src="${arr[37+j*8].img}" alt=""></a>
                                <div>
                                    <a href="##">${arr[37+j*8].title}</a>
                                    <div>${arr[37+j*8].price}</div>
                                </div>                       
                            </li>
                            <li data-id="${arr[38+j*8].id}">
                                <a href="##"><img src="${arr[38+j*8].img}" alt=""></a>
                                <div>
                                    <a href="##">${arr[38+j*8].title}</a>
                                    <div>${arr[38+j*8].price}</div>
                                </div>                    
                            </li>        
                        </ul>
                    </div>
                </div>`;
            }

            fruitCont.innerHTML += str;


            fruitCont.onclick = function(e){
                var e = e||event;
                var target = e.target||e.srcElement;
                if(target.tagName == "IMG"){
                    var imgId = target.parentNode.parentNode.getAttribute("data-id");
                    if(imgId==402||imgId==404||imgId==405||imgId==406||imgId==407){
                        location.href = "html/goods.html?imgId="+imgId;
                    }else{
                        location.href = "##";
                    }
                }                
            }
        }

        
    });    
}




// 底部 头
var footHeadBody = document.getElementById("footheadbody");
var oLi = footHeadBody.getElementsByTagName("li");
oLi[1].style.width = 239 + "px";
oLi[1].style.backgroundPosition = -305 + "px" + " "+0;
oLi[1].children[0].style.width = 177 + "px";
oLi[2].style.width = 251 + "px";
oLi[2].style.backgroundPosition = -585 + "px" + " "+0;
oLi[2].children[0].style.width = 189 + "px";
oLi[3].style.width = 254 + "px";
oLi[3].style.backgroundPosition = -889 + "px" + " "+0;
oLi[3].children[0].style.width = 192 + "px";

// 底部 链接
var footLinkBody = document.getElementById("footlinkbody");
var footLinkDiv = footLinkBody.getElementsByTagName("div");
for(var i=0;i<footLinkDiv.length;i++){
    
    footLinkDiv[i].style.width = 170+"px";
    footLinkDiv[i].style.height = 185+"px";
    footLinkDiv[i].style.float = "left";
    footLinkDiv[i].children[0].style.width = 150+"px";
    footLinkDiv[i].children[0].style.height = 160+"px";
    footLinkDiv[i].children[0].style.marginLeft = 20+"px";
    if(i==6){
        footLinkDiv[6].children[0].style.paddingTop = 25+"px";
        footLinkDiv[6].style.height = 160+"px";
    }else{}

    var footLinkLi = footLinkDiv[i].children[0].getElementsByTagName("li");
    if(footLinkLi[0]){

        footLinkLi[0].style.height = 32+"px";
        footLinkLi[0].style.lineHeight = 32+"px";
        footLinkLi[0].style.marginTop = 14+"px";
        footLinkLi[0].style.fontSize = 14+"px";
        footLinkLi[0].style.color = "#333";
        footLinkLi[0].style.fontWeight = "bold";
        for(var j=1;j<footLinkLi.length;j++){
            footLinkLi[j].style.fontSize = 12+"px";
            footLinkLi[j].style.marginTop = 7+"px";
            footLinkLi[j].style.marginBottom = 6+"px";
            footLinkLi[j].style.color = "#333"; 
        }
    }

}

// 底部版权
var footCopyBody = document.getElementById("footcopybody");footcopybody
var footCopyDiv = footCopyBody.getElementsByTagName("div");
footCopyDiv[0].style.marginTop = 10+"px";
for(var i=0;i<footCopyDiv.length;i++){
    footCopyDiv[0].children[i].style.fontSize = 12+"px";
    footCopyDiv[0].children[i].style.height = 28+"px";
    footCopyDiv[0].children[i].style.lineHeight = 28+"px";
    footCopyDiv[0].children[i].style.textAlign = "center";
}
footCopyDiv[1].children[0].style.overflow = "hidden";
footCopyDiv[1].children[0].style.margin = 0+" "+"auto";
footCopyDiv[1].children[0].style.width = 513+"px";
for(var i=0;i<5;i++){
    footCopyDiv[1].children[0].children[i].style.float = "left";
}
footCopyDiv[1].children[0].children[1].style.marginLeft = 22+"px";
footCopyDiv[1].children[0].children[2].style.marginLeft = 14+"px";
footCopyDiv[1].children[0].children[3].style.marginLeft = 14+"px";
footCopyDiv[1].children[0].children[4].style.marginLeft = 11+"px";




//页面右边的固定栏
var rightBanBody = document.getElementById("rightbanbody");
var rightBanLi = rightBanBody.getElementsByTagName("li");
var heightArr = [120,243,323,393,434];

rightBanBody.style.position = "absolute";
rightBanBody.style.left = 0;
rightBanBody.style.bottom = 0;
for(var i=0;i<rightBanLi.length;i++){
    rightBanLi[i].style.textAlign = "center"
    rightBanLi[i].style.display = "block";
    rightBanLi[i].style.padding = 10+"px"+" "+0;
    if(i==2 || i==3){
        rightBanLi[i].children[0].children[0].style.height = 30+"px";
    }
    if(i==4 || i==5){
        rightBanLi[i].style.padding = 0;
    }
    if(i != 0){
        rightBanLi[i].children[0].style.backgroundPosition = -72+"px"+" "+(-(45+heightArr[i-1]))+"px";
    }
    if(i==0 || i==4){
        rightBanLi[i].style.position = "relative";
    }
    rightBanLi[i].index = i;
    rightBanLi[i].onmouseover = function(){
        this.style.background = "#71b320";
        this.style.color = "#fff";
        if(this.index==0||this.index==4){
            this.children[0].children[2].style.display = "block";         
        }
    }
    rightBanLi[i].onmouseout = function(){
        this.style.background = "#363636";
        this.style.color = "#aaa";
        if(this.index==0||this.index==4){
            this.children[0].children[2].style.display = "none";         
        }
    }
}
rightBanLi[4].children[0].style.paddingTop = 40+"px";
rightBanLi[5].children[0].style.paddingTop = 30+"px";


