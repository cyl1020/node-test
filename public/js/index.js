window.onload = function(){

    //菜单栏点击出现二级菜单
    var menu = document.querySelector('#menu');
    var two_menu = document.querySelector('.two_menu');
    var flag = true;
    menu.addEventListener('click',function(){
        if(flag){
            two_menu.style.display = 'block';
            flag = false;
        }else{
            two_menu.style.display = 'none';
            flag = true;
        }

    })

    //经过和离开主题
    var zhuti = document.querySelector('#zhuti');
    var three_menu_color = document.querySelector('.three_menu_color');
    zhuti.addEventListener('mouseenter',function(){
        three_menu_color.style.display = 'block';
    })
    zhuti.addEventListener('mouseleave',function(){
        three_menu_color.style.display = 'none';
    })

    //经过和离开字体
    var fontSize = document.querySelector('#fontSize');
    var three_menu_fontSize = document.querySelector('.three_menu_fontSize');
    fontSize.addEventListener('mouseenter',function(){
        three_menu_fontSize.style.display = 'block';
    })
    fontSize.addEventListener('mouseleave',function(){
        three_menu_fontSize.style.display = 'none';
    })


    //点击浅色
    var color_q = document.querySelector('#color_q');
    var color_s = document.querySelector('#color_s');
    var color_f = document.querySelector('#color_f');
    var color_m = document.querySelector('#color_m');
    var tltle = document.querySelector('.title');
    color_q.addEventListener('click',function(){
        tltle.style.background = 'rgb(230, 235, 164)';
        body.style.background = 'rgb(230, 230, 160)';
    })
    color_s.addEventListener('click',function(){
        tltle.style.background = 'gray';
        body.style.background = 'rgb(150, 150, 150)';
    })
    color_f.addEventListener('click',function(){
        tltle.style.background = 'pink';
        body.style.background = 'rgb(255, 150, 167)';
    })
    color_m.addEventListener('click',function(){
        tltle.style.background = '#ececec';
        body.style.background = '#d4d2cc';
    })


    //点击字体
    var fontSizeAdd = document.querySelector('#fontSizeAdd')
    var fontSizeSub = document.querySelector('#fontSizeSub')
    var body = document.querySelector('.body');
    var i = 16;
    fontSizeAdd.addEventListener('click',function(){
        i += 2;
        if(i >= 22){
            i = 22;
        }
        body.style.fontSize = i+'px';  
    })
    fontSizeSub.addEventListener('click',function(){
        i -= 2;
        body.style.fontSize = i+'px';
    })


    var xc_box = document.querySelector('.xc_box');
    var xxc_box = document.querySelector('.xxc_box');
    //点击-
    var hidden = document.querySelector('#hidden');
    hidden.addEventListener('click',function(){
        xc_box.style.display = 'none';
        xxc_box.style.display = 'block';
    })
    xxc_box.addEventListener('click',function(){
        xc_box.style.display = 'block';
        xxc_box.style.display = 'none';
    })

    //点击o
    var scale = document.querySelector('#scale');
    var flag_s = true;
    scale.addEventListener('click',function(){
        if(flag_s){
            xc_box.style.transform = 'scale(0.8)';
            flag_s = false;
        }else{
            xc_box.style.transform = 'scale(1.0)';
            flag_s = true;
        }
    })

    //点击X
    var exit = document.querySelector('#exit');
    exit.addEventListener('click',function(){
        var str = confirm('你确定要退出吗？');
        if(str){
            xc_box.style.display = 'none';
        }
        
    })

    //点击name
    var name = document.querySelector('#name');
    var name_c = document.querySelector('.name_c');
    var name_c_exit = document.querySelector('.name_c_exit');
    name.addEventListener('dblclick',function(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        name_c.style.display = 'block';
    })
    name_c_exit.addEventListener('click',function(){
        name_c.style.display = 'none';
    })



    document.addEventListener('selectstart',function(e){
        e.preventDefault();
    })
}