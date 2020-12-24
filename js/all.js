$(document).ready(function(){

    $(window).scroll(function(){
        if( $(window).scrollTop() > 0) {
            $(".navbar").addClass("navbar-bg"),
            $(".explore").addClass("explore-transparent");
        }
        else{
            $(".navbar").removeClass("navbar-bg"),
            $(".explore").removeClass("explore-transparent");
        }
    });
    
    $("#up_top").click(function(){
        $("html,body").animate({scrollTop:0},700);
    });
    

    $(document).on("click","a",function(event){
        event.preventDefault();
        var href = $(this).attr("href");
        $("html,body").animate(
            { scrollTop:$(href).offset().top }
        ,700);
    });

    $(window).mousemove(function(event){


        var x = event.pageX;
        var y = event.pageY;
        $(".header-bottom").css("transform","translateX("+ ( x / -15 +80 ) +"px)"),
        $(".works-bottom").css("transform","translateX("+ ( x / -15 +50 ) +"px)");


        var sectionx = x-$("#about").offset().left;
        var sectiony = y-$("#about").offset().top;
        $(".text1").css("transform","translate("+ ( sectiony / -8 ) +"px)"),
        $(".text2").css("transform","translate("+ ( sectiony / -12 ) +"px)"),
        $(".text3").css("transform","translate("+ ( sectiony / -16 ) +"px)"),
        $(".tri1").css("transform","translate("+ ( sectionx / -8 ) +"px)"),
        $(".tri2").css("transform","translate("+ ( sectionx / -10 ) +"px)"),
        $(".tri3").css("transform","translate("+ ( sectionx / -12 ) +"px)"),
        $(".tri4").css("transform","translate("+ ( sectionx / -14 ) +"px)"),
        $(".tri5").css("transform","translate("+ ( sectionx / -16 ) +"px)");

        
        $("#cross").css("top",sectiony);
        $("#cross").css("left",sectionx);
        if(sectiony < 0 || sectiony > $("#works").outerHeight()+100){
            $("#cross").css("opacity","0")
        }else{
            $("#cross").css("opacity","1")
        }


        var cat_center = $("#cat").offset().left+$("#cat").width()/2;
        var cat_top = $("#cat").offset().top;
        if( x < cat_center-200 ){
            $("#cat").attr("src","images/cat_left.png")
        }
        else if( x < cat_center+50 ){
            $("#cat").attr("src","images/cat_top.png")
        }
        else if( x > cat_center+50 ){
            $("#cat").attr("src","images/cat_right.png")
        }
        if( x < cat_center-200 && y < cat_top ){
             $("#cat").attr("src","images/cat_lefttop.png")
        }
        else if( x > cat_center+50 && y < cat_top ){
            $("#cat").attr("src","images/cat_righttop.png")
        }


        var cat_blue_center = $("#cat_blue").offset().left+$("#cat_blue").width()/2;
        if (Math.abs(x-cat_blue_center)<50){
            $("#cat_blue").addClass("jump")
        }else{
            $("#cat_blue").removeClass("jump")
        }
        var cat_grey_center = $("#cat_grey").offset().left+$("#cat_grey").width()/2;
        if (Math.abs(x-cat_grey_center)<50){
            $("#cat_grey").addClass("jump")
        }else{
            $("#cat_grey").removeClass("jump")
        }
        var cat_yellow_center = $("#cat_yellow").offset().left+$("#cat_yellow").width()/2;
        if (Math.abs(x-cat_yellow_center)<50){
            $("#cat_yellow").addClass("jump")
        }else{
            $("#cat_yellow").removeClass("jump")
        }





    });

    var works =[

        {
      "name":"交大創業日 CIS/海報設計",
      "client":"交大產學中心",
      "description":"可能性與人群，創業的高峰論壇",
      "website":"",
      "img":"images/main1.jpg",
      "content":"<p>人群，每個人都是獨一無二的存在，而我們的構成又是生命歷程中所見所聞建構的，如同不同的零件拼湊成完整的人<br><br>藉由方塊小人的形式，闡述人格組合的概念，創業乃是由一群互補的夥伴或是敵人交織而成，在討論 爭吵 或合作中找到一條可行的未來。</p><img src='http://www.monoame.com/projects/proj_create_poster/poster.jpg' style='width: 100%'/>"
    },
    {
      "name":"動畫互動網頁程式入門",
      "client":"墨雨設計",
      "description":"從設計出發的程式教學，協助設計師轉型",
      "website":"https://hahow.in/cr/monoame-webdesign1",
      "img":"images/main2.png",
      "content":"<img src='https://i.giphy.com/3o6ZtmQ7DAO3Itq8Q8.gif' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_course/proj7.JPG' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_course/board.jpg' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_course/board2.jpg' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_course/pages.jpg' style='width: 100%'/>"
    },
    {
      "name":"DesigNAV 設計模組化 CIS",
      "client":"墨雨設計",
      "description":"提供設計模組化的服務，自動合約到專案管理",
      "website":"https://hahow.in/cr/monoame-webdesign1",
      "img":"images/main3.jpg",
      "content":"<img src='http://www.monoame.com/projects/proj_designav/p1.jpg' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_designav/p2.jpg' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_designav/p3.jpg' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_designav/p4.jpg' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_designav/p5.jpg' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_designav/p6.jpg' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_designav/p7.jpg' style='width: 100%'/>"
    },
    {
      "name":"2016花旗聯合勸募官網",
      "client":"花旗聯合勸募",
      "description":"動態漫畫，展現生命的活力",
      "website":"http://citi2016.unitedway.org.tw",
      "img":"images/main4.png"
    },
    {
      "name":"Monoame Design 墨雨設計視覺",
      "client":"墨雨設計",
      "description":"雨與墨水，將故事染入人心",
      "website":"http://www.monoame.com",
      "img":"images/main5.png",
      "content":"<a href='https://www.designawards.asia/tc/monoame-design/' target='_blank'>DAA亞洲設計網絡 Sep05 獎項</a><img src='http://www.monoame.com/projects/proj_monoame/01.png' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_monoame/02.png' style='width: 100%'/><img src='http://www.monoame.com/projects/proj_monoame/03.png' style='width: 100%'/>"
    }

    ]

    var vm = new Vue({
        el: "#app",
        data:{
            works
        },
        // ready: function(){
        //     var data = this;
        //     $.ajax({
        //         url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
        //         success: function(res){
        //             data.works = JSON.parse(res);
        //         },
        //     });
        // },
    });


});



