$(document).ready(()=>{
    $("#navbarCollapse").on("show.bs.collapse hide.bs.collapse", ()=>{
        $("header.navbar").toggleClass("navbar-opened");
    });

    $('#navbarCollapse .nav-link').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $(".comments-slider").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        speed: 1000,
        slidesToScroll: 2,
        dots: true,
        draggable: true,
        infinite: true,
        slidesToShow: 2,
    
        responsive: [
            {
                breakpoint: 850,
                settings:{
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ],
    });
});