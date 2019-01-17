!function(){
    let duration = 50
    let id
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)//获得当前点击的按钮是哪一个
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
            duration = 100
            break
            case 'normal':
            duration = 50
            break
            case 'fast':
            duration = 10
            break
            case 'close':
            let container = document.querySelector('#code')
            let styleTage = document.querySelector('#styleTage')
            container.innerHTML = Prism.highlight(code,Prism.languages.css)
            styleTage.innerHTML = code
            container.scrollTop = container.scrollHeight
            window.clearTimeout(id)
        }
    })
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTage = document.querySelector('#styleTage')
        let n = 0
        id = setTimeout(function run(){
            n+=1
            container.innerHTML = Prism.highlight( code.substring(0,n),Prism.languages.css)
            styleTage.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n<code.length){
                id = setTimeout(run,duration)
                // 此处记录的将是最新的定时时间
            }else{
                fn && fn.call()
            }
        },duration)
    }

    let code = `
/*
 * 首先，画皮卡丘的皮
 */
.preview{
    background:#FEE433;
}
.wrapper{
    width:100%;
    height:168px;
    position:relative;
}
/*
 * 然后，画皮卡丘的鼻子
 */
.node{
    width:0px;
    height:0px;
    border-style:solid;
    border-width:12px;
    border-color:black transparent transparent;
    border-radius:50%;
    position:absolute;
    left:50%;
    top:28px;
    transform:translateX(-50%);
    /* 加上上面一句才能正确的居中 */
}
/*
 * 然后，画皮卡丘的眼睛
 */
.eye{
    width:49px;
    height:49px;
    border-radius:50%;
    background:#2e2e2e;
    border:2px solid #000000;
    position:absolute;
}
/*
 * 然后，画皮卡丘的眼球
 */
.eye::before{
    content:'';
    display:blak;
    width:24px;
    height:24px;
    border-radius:50%;
    background:white;
    position:absolute;
    left:6px;
    top:-1px;
    border: 2px solid #000;
}
/*
 * 左眼
 */
.eye.left{
    left:50%;
    margin-left:90px;
}
/*
 * 有睛
 */
.eye.right{
    right:50%;
    margin-right:90px;
}
/*
 * 然后，画皮卡丘的脸
 */
.face{
    width:60px;
    height:60px;
    border-radius:50%;
    border:2px solid black;
    position:absolute;
    background:#FC0D1C;
    top:69px;
}
.face.left{
    left:50%;
    margin-left:120px;
}
.face.right{
    right:50%;
    margin-right:120px;
}
/*
 * 然后，画皮卡丘的上嘴唇
 */
.upperLip{
    width:80px;
    height:25px;
    border:3px solid black;
    position:absolute;
    top:47px;
    background:#FDE348;
}
.upperLip.right{
    left:50%;
    border-bottom-right-radius:40px 20px;
    border-top:none;
    border-left:none;
    transform:rotate(20deg)
}
.upperLip.left{
    right:50%;
    border-bottom-left-radius:40px 20px;
    /* 胡须的圆弧形状 */
    border-top:none;
    border-right:none;
    transform:rotate(-20deg)
}
/*
 * 然后，画皮卡丘的小舌头
 */
.lowerLip-wrapper{
    position:absolute;
    width:300px;
    height:113px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    overflow:hidden;
}
.lowerLip{
    width:300px;
    height:12000px;
    background:#990513;
    border-radius:200px/1600px;
    border:3px solid;
    position:absolute;
    bottom:0;
    overflow:hidden;
}
.lowerLip::after{
    content:'';
    position:absolute;
    bottom:-10px;
    width:110px;
    height:100px;
    background:#fc4a62;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
}
/*
 * 好了，一只皮卡丘送给你
 */
`
    writeCode('',code)

}.call()
