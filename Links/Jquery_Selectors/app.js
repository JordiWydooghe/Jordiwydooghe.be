var main= function(){
    "use strict";
    $("h1").css("color","red");
    $(".belangrijk").css("font-size","30pt");
    $(".relevant p").first().css("background-color","grey");
    $(".relevant p:nth-child(2)").css("color","red");
    $("p").css("text-decoration","underline");
    $(".relevant p").css("font-weight","bold");
    $(".relevant p:nth-child(even)").css("text-align","center");
    $(".relevant p:nth-child(7)").css("color","green");
    $(".relevant p:nth-child(5),:nth-child(6),:nth-child(7)").css("text-align","right");
    $(".relevant p:not(.a)").css("font-size","16pt");
};
$(document).ready(main);