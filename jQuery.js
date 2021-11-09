$(function(){

    $('.btn').click(function(){
        $('#hidebody').hide();
        $('#signUP').show();

    });
    $('#send').click(function(){
        $('#hidebody').show();
        window.alert("Thank you for Contacting Me But Please Understand me that this website is only purposly designed for the front end mening that your submission will not come to me without Back End interaction By Abdulaziz Maripjonov Thank you!");
    });



    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               //  nav:true,
            },
            600:{
                items:2,
                // nav:false
            },
            800:{
                items:3,
               // nav:false
            },
            1000:{
                items:4,
              //  nav:true,
                loop:true
            }
        }
    })
    
    AOS.init();
 
});
//  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>