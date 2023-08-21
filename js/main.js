// open and close Left Menue
$('.openNav').click(function(){
    $('#leftMenu').animate({"width":'250px'} , 100);
    $('#home-content').animate({"margin-left":'250px'} , 100);
});

$('.closebtn').click(function(){
    $('#leftMenu').animate({"width":'0px'} , 100);
    $('#home-content').animate({"margin-left":'0px'} , 100);
});

//_________________________________________________________

// SliderDown Section
$('#sliderDown .toggle').click(function(){
    $(this).next().slideToggle(500);

    $('#sliderDown .inner').not($(this).next()).slideUp(500);
});


//_________________________________________________________


// control of textArea
$('textarea').keyup(function(){
    let textAreaLength = $(this).val().length;

    if(textAreaLength - 100 != 0){
        $('#chars').html(100 - textAreaLength);
    }
    else{
        $('#chars').html(100 - textAreaLength);
        $('#chars').next().html("<h4 class='d-inline'>: your available character finished</h4>").css("color" , "red");
    }
});


//_________________________________________________________


// counter section

window.addEventListener('load' , function(){
    countDownToTime("5 october 2024 1:22:00");
});

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }