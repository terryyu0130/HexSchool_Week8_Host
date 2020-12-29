(function () {
    
    $(document).ready(function(){
        //navbar 
        $('.location').on('click',function(){
            $('.room__calendar_wrap').hide(400);
            $('.room-classify').hide(400);
            $('.location-list').fadeToggle(800);
        });
        $('.date').on('click',function(){
            $('.location-list').hide(400);
            $('.room-classify').hide(400);
            $('.room__calendar_wrap').fadeToggle(800);
        });
        $('.person').on('click',function(){
            $('.location-list').hide(400);
            $('.room__calendar_wrap').hide(400);
            $('.room-classify').fadeToggle(800);
        });

        // destination
        $('.destination .material-icons').on('click',function(){
            $(this).toggleClass('active');
            $(this).parent().parent().toggleClass('active');
        });

        //notification
        $('.btn-notification').on('click',function(){
            $(".notification-bar").toggleClass('active');
        });
        $('.notification-bar .cancel').on('click',function(e){
            e.preventDefault();
            $('.notification-bar').removeClass('active');
        });

        //ham-btn
        $('.ham-btn').on('click',function(){
            $('.menu-mb').slideToggle(400);
        });

        //filter-btn
        $('.filter-btn').on('click',function(){
            $('.room-group .list').slideToggle();
        });

        //sort-btn 
        $('.sort-btn').on('click',function(){
            $('.room-group .content .menu').fadeToggle();
        });

        //btn-close
        $('.btn-close').on('click',function(){
            $('.room-group .list').slideUp();
        });

        //reservation-menu
        $('.reservation-menu .detail').on('click',function(){
            $('.reservation-menu').toggleClass('active');
            $('.reservation-group .price-group').slideToggle();
        });
    });

        // Swiper
        var mySwiper = new Swiper(".swiper-container", {
           // Optional parameters
           // 預設值是derection: 'horizonral，所以拿掉vertical就變水平'
           //direction: 'vertical',
           derection: "horizonral",
           //速度
           loop: true,
           //是否重複播放
           speed: 1200,
   
           //If we need Auto Play
           autoplay: {
               delay: 3000
           },
   
           //If we want to change effect
           effect: "slide",
   
           // If we need pagination
           pagination: {
               el: ".swiper-pagination"
           },
   
           // Navigation arrows
           navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev"
           }
   
           // And if we need scrollbar
           //如果不要就連同html一起拿掉
           // scrollbar: {
           //     el: '.swiper-scrollbar',
           // },
       });

})();