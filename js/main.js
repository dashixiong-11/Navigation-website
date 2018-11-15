   //1.初始化数据
   var keys = {
    0:{0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    1:{0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    2:{0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    length:3       
}
var hash = {
    q: 'qq.com',
    w: 'weibo.com',
    t: 'taobao.com'
}
var hashInLocalStorage =  gfls('uuu')//取出uuu中的hash 
if(hashInLocalStorage){
    hash = hashInLocalStorage // 覆盖当前hash
}
function gfls(name){
    return JSON.parse(localStorage.getItem(name)||'null')
}

//生成键盘   
//循环创建div 并加到 zzz中
        for(var index = 0;index<keys['length'];index++){               
        var div1 = cj('div',{className:'row'}) //创建div
        zzz.appendChild(div1) //在id为ZZZ的对象中加入div        
        
        var row = keys[index]   //获取 key的  的三个数组             
        //在div中循环创建 kbd  然后加入 内容
        for(var index2 = 0;index2<row['length'];index2++){           
        var k = cj('kbd',{className:'keys'}) //创建kbd标签 根据key中对象的个数                                   
        var img = createImage(hash[row[index2]])
        var span = createSpan(row[index2])
         //获取 key中 相应index对象的属性的值        
        var buttonx = createButton(row[index2]) 
        k.appendChild(img)
        k.appendChild(span)
        k.appendChild(img)
        k.appendChild(buttonx)
        div1.appendChild(k)
    }
           
}


        //3.监听键盘打开相应的网址
        document.onkeypress = function(xzkjcnxlkcjlk){
            var key = xzkjcnxlkcjlk['key']
            var wz = hash[key]
            window.open('http://'+wz,'_blank')
        }

        function cj(tagName,attributes){
            var element = document.createElement(tagName)
            for(var keykey in attributes){  // key为属性名 attributes 中传过来的参数
                element[keykey] = attributes[keykey]
            }
            return element
        }

        function createSpan(textContent){
            var span = cj('span',{className:'text'})
            span.textContent = textContent
            return span
        }

        function createButton(id){
            var buttonx = cj('div',{id:id}) // 在每个kbd中添加button标签
         buttonx.textContent = '+'
         //给每个button 加ID id就是button所在kbd的 key的对象的值
         buttonx.onclick = function(xzkjcnxlkcjlk){
            var button2 = xzkjcnxlkcjlk.target
            var img2 = button2.previousSibling
            var key = button2.id  //获取所点击button相应的id  
            var x = prompt('设置你想要的网址')  // 设置一个可以收入网址的弹窗 返回输入的内容
                if(x){
                    hash[key] = x  // 把这个网址赋值到相应的hash对象中去
                    img2.src = 'http://' + x + '/favicon.ico'
                    img2.onerror = function(e){
                        e.target.src = '//i.loli.net/2018/07/20/5b5192d32b8c2.png'
                    }
                    localStorage.setItem('uuu',JSON.stringify(hash))  // 把这个改变后的hash储存到本地 容器名uuu 
                        } 
                    console.log(x)
                }
            return buttonx 
        }

        function createImage(domain){
            var img = cj('img')
            //加入到div中
            if(domain){
                img.src = 'http://' + domain + '/favicon.ico'
            }else{
                img.src = '//i.loli.net/2018/07/20/5b5192d32b8c2.png'
            }
            img.onerror = function(e){
                e.target.src = '//i.loli.net/2018/07/20/5b5192d32b8c2.png'
            }
            return img
        }
        