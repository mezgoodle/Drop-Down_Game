let inwi = window.innerWidth;
let inhei = window.innerHeight ;
let step = inwi/10-2;
let step2 = inhei/15;
let pos = 0 ;
let dropnum = 0 ; 
let delay = 0;
let removenum = 0;
let intervaltime = 180;//Make this number smaller to make the game harder//
let score = 0;
let ausgefahren = false;
let green = new Array("44cf67","48c266","87f0a1","6abd7f","43cc65");
let blue = new Array("8dc9f6","488ace","4595d6","1495ff","0776d1");
let red = new Array("bf4c4c","d99797","ec3434","cc5252","e33030");
let col = green;
let highscore = 0;
window.onload = function (){
    alert("Thank you all so for over 300 upvotes!! Never thought it would get that big!");
    $(".choosecol,.choosediff").hide();
    $(".drop").css({"left":(inwi/5)});
    $(".down").css({"left":(inwi/2)});
    $(".drop").delay(400).animate({top:0-(inwi/10)},200);
    $(".down").delay(800).animate({top:0-(inwi/10)},200);
    $(".startbutton,.startbuttcon,.colors div,.colors div p,.scorecon p,.diffcon,.diff,.scorecon").delay(1100).animate({opacity:"1"},200);
    
    $(".drop,.down").css({"top":0-3*(inwi/8),"font-size":inwi/8});
    $(".startbuttcon,.color,.diffcon").css({"font-size":inhei/20});
    $(".scorecon").css({"font-size":inhei/25});
    $(".startbutton,.colorcon,.scorecon").css({"width":inwi/1.5,"height":inhei/8,"left":inwi/3/2});
    $(".colorcon,.diffcon").css({"width":inwi/1.5/2-4});
    $(".diffcon").css({"left":inwi/1.5/2+4+inwi/3/2,"height":inhei/8});
    $(".scorecon").css({"top":inwi/8+inhei/8+inhei/8+8+inhei/8+8});
    $(".score").css({"font-size":inwi/21});
    $(".startbutton").css({"top":inhei/8+inwi/8});
    $(".colorcon,.diffcon").css({"top":inwi/8+inhei/8+inhei/8+8});
    
    $(".startbuttcon,.lastscore,.highscore").css({"width":inwi/1.5,"top":inhei/8/4});
    $(".color,.diff").css({"width":inwi/1.5/2-4,"top":0-(inhei/8/5)});
    $(".lastscore").css({"top":0-inhei/8/3});
    $(".highscore").css({"bottom":inhei/8/3});
    
    $(".red,.blue,.green,.ok1,.ok2,.easy,.medium,.hard").css({"font-size":inhei/30});
    $(".choosecol,.choosediff").css({"width":inwi/1.5,"height":inhei/2,"left":inwi/6,"top":inhei/9+inwi/8});
    $(".redcon,.greencon,.bluecon,.easycon,.mediumcon,.hardcon").css({"left":inwi/2/4-2,"width":inwi/1.5/3*2,"height":inhei/2/6});
    $(".okcon1,.okcon2").css({"left":inwi/2/8*7,"width":inwi/1.5/4,"height":inhei/2/7,"top":inhei/2/6*5});
    $(".ok1,.ok2").css({"width":inwi/1.5/4,"top":0-(inhei/7/2/4)});
    $(".red,.green,.blue,.easy,.medium,.hard").css({"width":inwi/1.5/3*2,"top":0-(inhei/6/2/6)});
    $(".greencon,.easycon").css({"top":inhei/2/6*1.1});
    $(".redcon,.mediumcon").css({"top":inhei/2/6*2.2});
    $(".bluecon,.hardcon").css({"top":inhei/2/6*3.3});
    
    $(".left,.right").css({"height":inhei/9,"width":inwi/7,"bottom":inhei/12});
    $(".left").css({"left":inwi/9});
    $(".right").css({"right":inwi/9});
    $("hr").css({"width":inwi-2,"position":"absolute","top":10*step2+10,"left":"0px"});
    $(".score").css({"width":inwi});
    $(".info").css({"width":inwi,"font-size":inhei/40});
};
$(function(){
    $(".colorcon").click(function(){
        $(".choosecol").fadeIn(200);
    });
    $(".okcon1").click(function (){
        $(".choosecol").fadeOut(200);
    });
    $(".greencon").click(function(){
        $("body").css({"background":"#68e696"});
        $(".drop,.down").css({"color":"#4fff90"});
        col = green;
    });
    $(".bluecon").click(function(){
        $("body").css({"background":"#65ace6"});
        $(".drop,.down").css({"color":"#8ad0ff"});
        col = blue;
    });
    $(".redcon").click(function(){
        $("body").css({"background":"#F96969"});
        $(".drop,.down").css({"color":"#D36464"});
        col = red;
    });
});
$(function(){
    $(".diffcon").click(function(){
        $(".choosediff").fadeIn(200);
    });
    $(".okcon2").click(function (){
        $(".choosediff").fadeOut(200);
    });
    $(".easycon").click(function(){
        intervaltime = 250;
    });
    $(".mediumcon").click(function(){
        intervaltime = 180;
    });
    $(".hardcon").click(function(){
        intervaltime = 110;    
    });
    $(".redcon,.bluecon,.greencon,.easycon,.mediumcon,.hardcon").click(function (){
        $(this).animate({width: "+="+inwi/1.5/3*2/8,left : "-="+inwi/1.5/3*2/8/2},55);
        $(this).animate({width:inwi/1.5/3*2,left :inwi/2/4-2},55);
        $(this).children().animate({width: "+="+inwi/1.5/3*2/8},55);
        $(this).children().animate({width:inwi/1.5/3*2},55);
    });
});
$(function (){
    $(".game").hide();
    $(".startbutton").click(function (){
        $(".player").css({"top":10*step2});
        $(".start").hide();
        $(".game").show();
        $("body").keypress(function keyDown(data){
            if(data.keyCode === 37){
                if(pos > 0){
                pos -= step;
                $(".player").css({"left":"-="+step});
                }
            }
            else if(data.keyCode === 39){
                if(pos < inwi-inwi/10-2){
                pos  += step;
                $(".player").css({"left":"+="+step});
                }
            }
        });
        function spawndadrops(){
            dropnum +=1;
            delay += 1;
            let player = $(".player");
            let drop = $(".droparea").children();
            let playerpos = player.position();
            let bottomdrop = drop.position();
            let zuf = Math.floor(Math.random()*4);
            $(".droparea").append("<div class=drop"+dropnum+"></div>");
            $(".drop"+dropnum).css({"position":"absolute","border":"10px solid","border-color":"#"+col[parseFloat(zuf)],"left":playerpos.left,"top":"0px"});
            $(".droparea").children().animate({top:10*step2},intervaltime*10,"linear");
            if(delay > 10){
                removenum += 1;
                $(".drop"+removenum).remove();
                if(bottomdrop.left === playerpos.left ){
                     if(score > highscore){
                        highscore = score;
                        $(".highscore").text("Highscore:"+score);
                    }
                    let lastscore = score;
                    $(".lastscore").text("Lastscore:"+score);
                    removenum = 0;
                    dropnum = 0;
                    score = 0;
                    delay = 0;
                    clearInterval(createdrops);
                    $(".game").hide();
                    $(".droparea").children().remove();
                    $(".score").text("Score:"+score);
                    $(".start").show(); 
                    $("body").off("keypress");       
                }
                else{score += 1;
                    $(".score").text("Score:"+score);
                }
            }
        }
        var createdrops = setInterval(spawndadrops,intervaltime);
    });
    $(".left").click(function (){
        if(pos > 0){
            pos -= step;
            $(".player").css({"left":"-="+step});
        }
    });
    $(".right").click(function (){
        if(pos < inwi-inwi/10-2){
            pos  += step;
            $(".player").css({"left":"+="+step});
         }
     });
});
