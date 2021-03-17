
// $(document).ready(function(){
//     $('.mainArea').css('opacity',0)
//         .slideDown('slow')
//         .animate({opacity:1},2000);
//     $('#mediumCards').css('opacity',0)
//         .slideDown('slow')
//         .animate({opacity:1},1000);
// })

// $('#mediumCards').ready(function(){
//     $('.mediumCardstyle').css('display', 'none');
//     $('.mediumCardstyle').fadeIn(1000);
// });

// $('#casestudies').ready(function(){
//     $('.casestudyCard').css('display', 'none');
//     $('.casestudyCard').fadeIn(500);
// });

// $(window).on('load', function(){
//     $('#loadingScreen').fadeIn('5000');
//     $('#loadingScreen').('5000');
//     $('#loadingScreen').fadeOut('5000');
// });

// $(window).on('load', function(){
//     setTimeout(function(){
//         $('#loadingScreen').fadeIn('5000');
//     }, 6000);
//     $('#loadingScreen').fadeOut('5000');
// });

$(document).ready(function(){
    $(body).css('opacity',0)
    .animate({opacity:1},'slow');
});

$('#hamburgermenu').on("click", function(){
    $(".mobilenavigation").slideToggle();
    $(".openMenu").toggle();
    $(".closeMenu").toggle();
});