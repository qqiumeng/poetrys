//轮播部分
$(function () {
    //具体实现的代码
    //第一步：动态地生成圆点
    // var a=$('.slide_img');
    var a=$('.slide_img li').length;
    //声明一个变量，获取小圆点所在的ul
    var c=$('.points');
    var d=$('.slide_img li');
    var nowli=0;
    d.not(":first").css({"left":1500});
    for(var i=0;i<a;i++){
        //每次生成一个li标签
        var b=$('<li>');

        if(i==0){
            b.addClass("active")
        }
        // b.appendTo(c) 把b加到c中；c.append(b)在c中加入b
        c.append(b);
     }
    // 声明一个变量来获取小圆点
    var e=$(".points li");
    var f=0;
    // 点击小圆点执行的动作
    e.click(function () {
        //获取当前下标
        nowli=$(this).index();
        if (nowli==f){
            return
        }
        move();
        // siblings(指代当前元素的兄弟元素）
        // removeClass()指代当前元素移除一个类名
        // addClass()指代当前元素增加一个类名
        $(this).addClass("active").siblings().removeClass("active");

    });
    //点击左箭头
    $(".left").click(function(){
                nowli-=1;
                move();
                //或取当前元素的下标
                e.eq(nowli).addClass("active").siblings().removeClass("active");
    });
    $(".right").click(function () {
        nowli+=1;
        move();
        e.eq(nowli).addClass("active").siblings().removeClass("active");
    });
    //自动播放
    function autoplay() {
         nowli+=1;
         move();
         e.eq(nowli).addClass("active").siblings().removeClass("active");
    }
    //如果setInterval里面的第一个参数是封装好的函数，
    // 直接写函数的名字，不用加引号
    //调用函数使之自动播放
    h=setInterval(autoplay,1500);
    $("#box02").mouseenter(function(){
        clearInterval(h)
    });
    $("#box02").mouseleave(function(){
        h=setInterval(autoplay,1500)
    });
    //封装一个函数，用来实现图片的运动
    function  move() {
        // 设置图片向右到达末尾实行的动作
        if (nowli>2){
            nowli=0;
            f=2;
            //将在右边的图片移到左边
            d.eq(nowli).css({"left":1500});
            //第三张图片让开
            d.eq(f).stop().animate({"left":-1500});
            //第一张图片过来
            d.eq(nowli).stop().animate({"left":0});
            f=nowli;
            return
        }
        // 设置图片向左到达末尾实行的动作
        if(nowli<0){
                    nowli=2;
                    f=0;
                    d.eq(nowli).css({"left":-1500});
                    d.eq(f).stop().animate({"left":1500});
                    d.eq(nowli).stop().animate({"left":0});
                    f=nowli;
                    return
                }
        //图片向右运动时执行的代码
        if (nowli>f) {
            //eq是按照一个索引获取当前元素
            //animate()指通过动画执行一个动作
            d.eq(nowli).css({"left":1500});
            d.eq(f).stop().animate({"left":-1500});
            d.eq(nowli).stop().animate({"left":0});
            f=nowli
            //图片向左运动时执行的代码
        }else {
            d.eq(nowli).css({"left":-1500});
            d.eq(f).stop().animate({"left":1500});
            d.eq(nowli).stop().animate({"left":0});
            f=nowli
        }
    }
});


 //置顶部分的js
 $(function () {
    c=$('#box03');//.totop
    $(window).scroll(function () {
        //获取导航栏长度
        var d=$(document).scrollTop();
        //当d>400时使箭头出现
        if (d>400){
            $("#box03").fadeIn(2000)
        }
        //使箭头隐藏
        else {
             $("#box03").fadeOut(2000)
        }
        });
    //点击箭头后的行为
    $('#box03').click(function () {
            $('html,body').animate({'scrollTop':0})
    });
});


  //下拉菜单
  $(function () {
            //鼠标移上去执行一个动作 .mouseover(函数)
            $("#box>ul>li").mouseover(function(){
                $(this).children("ul").stop().show(500)
            });
             $("#box>ul>li").mouseout(function(){
                $(this).children("ul").stop().hide(500)
            });
        });