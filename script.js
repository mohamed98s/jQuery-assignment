$('.open-menu').click(function(){
    $('#nav-menu').animate({width: '250px'},50)
    $('.home-content').animate({marginLeft: '250px'},50)
})

$('.exist-nav').click(function(){
    $('#nav-menu').animate({width: '0px'},50)
    $('.home-content').animate({marginLeft: '0px'},50)
})





$("#nav-menu a").click(function(){
    
    var secId= $(this).attr("href");
    
    var sectionPosition = $(secId).offset().top;
    
    $("html , body").animate({scrollTop:sectionPosition},2000);
    
})


function countDownToTime(conDate) {
  
    let futureDate = new Date(conDate);
futureDate = (futureDate.getTime()/1000);

let currentDate = new Date();
currentDate = (currentDate.getTime()/1000);
timeDifference = (futureDate- currentDate);
    // console.log(timeDifference)
let days = Math.floor( timeDifference / (24*60*60));
let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


$('.days').html(`${days} D`);
$('.hours').html(`${hours} h`);
$('.minutes').html(`${ mins } m`);
$('.seconds').html(`${ secs} s`);


let x= setInterval(function() {  countDownToTime(conDate); }, 1000);

if(timeDifference < 0){
    $('.days').html(`0 D`);
    $('.hours').html(`0 h`);
    $('.minutes').html(`0 m`);
    $('.seconds').html(`0 s`);

}

}

window.onload = function(){
    countDownToTime('30 january 2024 17:46:00')
}






const maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("you have reached maximum number of letters");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});




$('#slider-down .toggle').click(function(){
    $('.hide-parag').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
