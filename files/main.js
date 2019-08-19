/**
 * Created by Noisky on 17/05/13.
 * Revised by Noisky on 18/11/27.
 */
$(document).ready(function() {

    $('a.blog-button').click(function() {
        // If already in blog, return early without animate overlay panel again.
        if (location.hash && location.hash == "#blog") return;
        if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
        $('.main-post-list').removeClass('hidden');
        currentWidth = $('.panel-cover').width();
        if (currentWidth < 960) {
            $('.panel-cover').addClass('panel-cover--collapsed');
        } else {
            $('.panel-cover').css('max-width', currentWidth);
            $('.panel-cover').animate({ 'max-width': '700px', 'width': '30%' }, 400, swing = 'swing', function() {});
        }
    });

    if (window.location.hash && window.location.hash == "#blog") {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.main-post-list').removeClass('hidden');
    }

    if (window.location.pathname.substring(0, 5) == "/tag/") {
        $('.panel-cover').addClass('panel-cover--collapsed');
    }

    function bounceOutUp() {
        $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
            $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        });
        $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
    }

    $('.btn-mobile-menu').click(function() {
        if ($(".navigation-wrapper").hasClass("bounceInDown")) {
            bounceOutUp();
        } else {
            $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
        }
        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });

    // 点击下拉菜单以外的其他标签区域收起菜单生效
    $(".panel-main").on('click', ':not(.mobile,.btn-mobile-menu,.navigation-wrapper)', function(e) {
        if ($(".navigation-wrapper").hasClass("bounceInDown")) {
            bounceOutUp();
            $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
        }
    });
    // 阻止冒泡事件执行
    $(".navigation-wrapper").click(function(event) {
        event.stopPropagation();
    });
    $('.year').html(new Date().getFullYear());
});