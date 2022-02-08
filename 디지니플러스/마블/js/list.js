$(function(){

    // 호버시 이미지 사라짐

    function video_play(a){
        setTimeout(function(){
            $(a).children(".vid").children(".slice").children("video").get(0).play()
        })    
    }


    $(".list ul li").hover(function(){
        $(this).children(".vid").children(".slice").children("img").css("display","none");
        video_play(this)
    },function(){
        $(this).children(".vid").children(".slice").children("img").css("display","block")
        $(this).children(".vid").children(".slice").children("video").get(0).pause()
    });

    // 마우스 호버 li 영역 줄이기
    $(".list ul li").hover(function(){
        $(this).children(".vid").not("#m_vid").stop().animate({width:"400px"},300).css("border-radius","10px")
        $(this).children(".vid").children(".slice").css("clip-path","polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)")
    },function(){
        $(this).children(".vid").not("#m_vid").stop().animate({width:"550px"},300).css("border-radius","0")
        $(this).children(".vid").children(".slice").css("clip-path","polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 0)")
    });
    // 메인영상 애니메이션 별도
    $("#title li").hover(function(){
        $("#m_vid").stop().stop().animate({width:"900px"},300).css("border-radius","10px")
    },function(){
        $("#m_vid").stop().stop().animate({width:"1200px"},300).css("border-radius","0")
    })

    // 휠 좌표 애니메이션 영상
    // $(window).scroll(function(){
    //     var height = $(document).scrollTop()
    //     console.log(height);
    //     if(height = 300){
    //         $(".one li").eq(0).addClass("on");
    //     }else if(height = 500){
    //         $(".one li").eq(1).addClass("on");
    //     }
    // });

    // 마우스 움직임 애니메이션
    $("#title li").mousemove(function(e){
        var x = e.pageX - $(this).children(".vid").offset().left;
        var y = e.pageY - $(this).children(".vid").offset().top;
        var a = e.pageX - $(this).offset().left;
        var b = e.pageY - $(this).offset().top;
        console.log(x/2 - 225)
        console.log(y/2 - 168.75)
        if(a > 360 && a < 840 & b < 457.5 && b > 217.5){
            $(this).children(".vid").addClass("plus")
        }
        $(this).children(".vid.plus").css("transform","translate(" + (x/3 - 150) +"px,"+ (y/3 - 112.5) + "px)")
        // $(this).css("transform","translate(-50px,-50px)")
    });

    // 작은 리스트 애니메이션
    $(".sub").children("li").mousemove(function(e){
        var x = e.pageX - $(this).children(".vid").offset().left;
        var y = e.pageY - $(this).children(".vid").offset().top;
        var a = e.pageX - $(this).offset().left;
        var b = e.pageY - $(this).offset().top;
        console.log(a)
        console.log(b)
        // $(this).children(".vid").addClass("plus")

        if(a > 165 && a < 385 & b < 217 && b > 93){
            $(this).children(".vid").addClass("plus")
        }
        $(this).children(".vid.plus").css("transform","translate(" + (x/2 - 100) +"px,"+ (y/2 - 77.5) + "px)")
        // $(this).css("transform","translate(-50px,-50px)")
    });
    $(".vid").mouseover(function(){
        $(this).removeClass("transition");
    })
    $(".vid").parent("li").mouseleave(function(){
        $(this).children(".vid").css("transform","translate(0,0)")
        $(this).children(".vid").addClass("transition");
        $(this).children(".vid").removeClass("plus");
    })
})