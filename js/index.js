


$(function(){


    $("#header-tj").click(function(){

        $(".tjkuang").toggle();
    })

    $("#texiao").click(function(){
        $("#texiao").toggle();
        $("#texiao-hanzi").toggle();
    })
    $(".texiaokuang").click(function(){
        $("#texiao").toggle();
        $("#texiao-hanzi").toggle();
    })


    $(".menu-item").click(function() {

        $("#body").load($(this).data("page"))
        $("#header").load($(this).data("page2"))

    })
    $(".menu-itm").click(function() {

        $("#body").load($(this).data("page"))
        $("#header").load($(this).data("page2"));
        $("#foot").toggle();
    })
    $("#btn").click(function() {

        $("#body").load($(this).data("cnm"))
        $("#header").load($(this).data("cnm2"))
        $("#foot").toggle();
    })


    // var btn=document.getElementById('btn');
    //
    // btn.onclick=function(){
    //     window.location.href="../wechat/faxian.html"
    //     // alert('hello world');
    // }

})