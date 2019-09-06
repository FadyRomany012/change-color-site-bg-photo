/*

$(".test).hide(2000)
$(".test).show(2000)
$(".test).toggle(2000)
$(".test).slideUp(2000)
$(".test).slideDown(2000)
$(".test).slideToggle(2000)
$(".test).fadeIn(2000)
$(".test).FadeOut(2000)
$(".test).fadeToggle(2000)
$(".test).fadeTo(2000,0.5)
callback function
$("#btn").click(function(){
$(".test").slideDown(1000,function(){
$(".test")/show(1000)
})

})



})
$(".test").animate({width:'100%',height:'400px'},2000)

$("#btn").click(function(){
   
   
   
$(".test").animate({height:'+=50%'},1000)
   
})
$(".item-img").click(function(){
    let imgSrc = $(this).attr("src");
    $("#main-img").attr("src",imgSrc);
})

*/

// $("#options i ").click(function(){
//     $("#colors-options").toggle();

// })

let boxWidth = $("#colors-options").outerWidth();

$("#options i").click(function(){
    if($("#options").css("left")=='0px'){
        $("#options").animate({left:`-${boxWidth}`},700)
    }
    else{
        $("#options").animate({left:`0px`},700)
    }
})
let lis =$ ("#options ul li");
// lis.eq(0).css("backgroundColor","#09c")
// lis.eq(1).css("backgroundColor","tomato")
// lis.eq(2).css("backgroundColor","teal")
// lis.eq(3).css("backgroundColor","tan")
// lis.eq(4).css("backgroundColor","orange")

for(let i =0 ; i<lis.length; i++){
    let x =Math.round(Math.random()*254)
    let y =Math.round(Math.random()*254)
    let z =Math.round(Math.random()*254)
lis.eq(i).css("backgroundColor",`rgb(${x},${y},${z})`)
}
lis.click(function(){
    let color =$(this).css("backgroundColor");
    $("h1,h2,h3,h4,h5,h6").css("color",color)
})


$("#options img ").click(function(){
    let imgSrc = $(this).attr("src");
    $("#home").css("backgroundImage","url("+imgSrc+")")
})