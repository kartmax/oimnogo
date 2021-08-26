$(function() {

	// Custom JS

    //MainMenu
    var Navigation = $('#navigation');
    $(Navigation).slimmenu(
        {
            resizeWidth: '1199',
            collapserTitle: '',
            animSpeed: 'fast',
            easingEffect: 'linear',
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });

    var CollapseBtn = $('.collapse-button');
    var MenuCollapser = $('.menu-collapser');
    var OverLeft = $('.overlay-main-left');
    var OverRight = $('.overlay-main-right');
    $(CollapseBtn).click(function () {
        $(this).toggleClass('btn-open');
        $(MenuCollapser).toggleClass('open-menu');
        $(OverLeft).toggleClass('active-overlay');
        $(OverRight).toggleClass('active-overlay');
    });

    var NavHasSubmenu = $(Navigation).find('li.has-submenu');
    $(NavHasSubmenu).append('<svg class="icon-open"><use xlink:href="#next-prev" /></svg>');
    var IconOpen = $('.icon-open');

    $(NavHasSubmenu).children('.sub-toggle').on('click', function () {
        var screenMax = window.matchMedia('(max-width: 1200px)');
        if (screenMax.matches) {
            $(this).parent('.has-submenu').children('.icon-open').toggleClass('transdeg');
        }
    });
    $(NavHasSubmenu).hover(function () {
        var screenMin = window.matchMedia('(min-width: 1200px)');
        if (screenMin.matches) {
            $(this).children('.icon-open').toggleClass('transdeg');
        }
    });


    var linkMenu = $(Navigation).find('a');
    linkMenu.click(function () {
       linkMenu.removeClass('active-link');
       $(this).addClass('active-link');
    });

    //orientation window for mobail devices and resize for desctop devices
    var SignUp = $('.sign-up');
    var SignIn = $('.sign-in');
    $(window).on('orientationchange',function(){
        $(CollapseBtn).removeClass('btn-open');
        $(IconOpen).removeClass('transdeg');
        $(MenuCollapser).removeClass('open-menu');
        $(OverLeft).removeClass('active-overlay');
        $(OverRight).removeClass('active-overlay');
        $(SignUp).removeClass('active-modal');
        $(SignIn).removeClass('active-modal');
        $(Navigation).css({'display':'none'});
    });
    $(window).resize(function(){
        $(CollapseBtn).removeClass('btn-open');
        $(IconOpen).removeClass('transdeg');
        $(MenuCollapser).removeClass('open-menu');
        $(OverLeft).removeClass('active-overlay');
        $(OverRight).removeClass('active-overlay');
        $(SignUp).removeClass('active-modal');
        $(SignIn).removeClass('active-modal');
    });
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(window).unbind('resize');
    }


    //modal windows
    $('.user-log').click(function () {
       $(SignIn).addClass('active-modal');
        if(window.matchMedia('(max-width: 1199px)').matches) {
            $(OverLeft).addClass('active-overlay');
            $(OverRight).addClass('active-overlay');
            $(CollapseBtn).removeClass('btn-open');
            $(Navigation).css({'display':'none'});
        }
    });

    $('.close-modal').click(function () {
        $(SignUp).removeClass('active-modal');
        $(SignIn).removeClass('active-modal');
        $(OverLeft).removeClass('active-overlay');
        $(OverRight).removeClass('active-overlay');
    });

    $(SignUp).find('.transition-btn').click(function () {
        $(SignUp).removeClass('active-modal');
        $(SignIn).addClass('active-modal');
    });

    $(SignIn).find('.transition-btn').click(function () {
        $(SignUp).addClass('active-modal');
        $(SignIn).removeClass('active-modal');
    });

    //---------------Form Registration
    //btn on mobile

    var $WrapOnMobTop = $('.wrap-submit.on-mobile-top');
    $('.form-registration .wrap-submit .adv-search-btn').click(function () {
        $WrapOnMobTop.find('.adv-search-btn').toggleClass('click-adv-btn');
        $WrapOnMobTop.toggleClass('active-after');
        $WrapOnMobTop.children('input[type=submit]').toggleClass('no-active-input');
    });


    //btn on tablet
    var $WrapOnTab = $('.wrap-submit.on-tablet');
    $('.form-registration .adv-search-btn').click(function () {
       $WrapOnTab.find('.wrap-clear-filtr').toggleClass('active-clear');
       $('.form-registration .label').toggleClass('active-label');
       $('.form-registration .wrap-time').toggleClass('active-label-time');
    });

    //data
    $.datetimepicker.setLocale('ru');
    $('.datetimepicker').datetimepicker({
        value:' ',
        format:'d M Y в H:i'
    });

    //multiselect select2
    var $ProfesionSelect = $(".js-example-basic-multiple").select2({
        placeholder: "Начните вводить услугу"
    });

    //checkbox
    var $checkbox = $('input.base-checkbox');
    $checkbox.css("opacity", "0");
    $checkbox.wrap("<div class='checkbox-wrap'></div>");
    $checkbox.before("<div class='checkbox'></div>");
    $checkbox.click(function(){

        var bbb = $(this).parent().find('.checkbox-checked-base');
        if( bbb.length ){
            $(this).parent().find('.checkbox').removeClass('checkbox-checked-base');
        } else{
            $(this).parent().find('.checkbox').addClass('checkbox-checked-base');
        }
    });

    var $checkboxFiltr = $('.wrap-filter-check, .wrap-check-disability').find('input[type=checkbox]');
    $checkboxFiltr.css("opacity", "0");
    $checkboxFiltr.wrap("<div class='checkbox-wrap'></div>");
    $checkboxFiltr.before("<div class='checkbox'></div>");
    $checkboxFiltr.click(function(){

        var bbb = $(this).parent().find('.checkbox-checked');
        if( bbb.length ){
            $(this).parent().find('.checkbox').removeClass('checkbox-checked');
        } else{
            $(this).parent().find('.checkbox').addClass('checkbox-checked');
        }
    });

    //select-bootstrap
    var $ToWhomMultSelect =  $('.to-whom.multiselect-bootstrap');
    $ToWhomMultSelect.multiselect({
        includeSelectAllOption: true,
        selectAllValue: 'all',
        selectAllName: 'all',
        selectAllText: 'все',
        allSelectedText: 'вce',
        nonSelectedText: 'Ничего не выбрано'
    });

    var $ClassServMultSelect = $('.class-services.multiselect-bootstrap');
    $ClassServMultSelect.multiselect({
        includeSelectAllOption: true,
        selectAllValue: 'all',
        selectAllName: 'all',
        selectAllText: 'все классы услуг',
        allSelectedText: 'всe',
        nonSelectedText: 'Любой класс услуг'
    });

    var $MaterislsMultSelect = $('.materials.multiselect-bootstrap');
    $MaterislsMultSelect.multiselect({
        includeSelectAllOption: true,
        selectAllValue: 'all',
        selectAllName: 'all',
        selectAllText: 'все материалы',
        allSelectedText: 'вce',
        nonSelectedText: 'Работа с материалами'
    });

    var $ServiceMultSelect = $('.service.multiselect-bootstrap');
    $ServiceMultSelect.multiselect({
        includeSelectAllOption: true,
        selectAllValue: 'all',
        selectAllName: 'all',
        selectAllText: 'все удобства',
        allSelectedText: 'вce',
        nonSelectedText: 'Удобство и обслуживание'
    });

    //adress
    var $adresses = $('form .search-input input');
    $adresses.after('<div><p>Киев</p><p>Чернигов</p><p>Житомир</p></div>');
    $adresses.siblings('div').hide();

    $adresses.focusout(function () {
        $adresses.siblings('div').slideUp();
    });

    $adresses.on('focusin keydown ', function () {
       $(this).siblings('div').slideDown();
    });

    var $DecorLine = $('form .search-input .decor-line');

    $(document).click(function(event) {
        if ($(event.target).closest($adresses).length) return;
        if ($(event.target).closest($DecorLine).length) return;
        $adresses.siblings('div').hide("slow");
        event.stopPropagation();
    });


    $('form .search-input div p').on('click',function () {
        var valInputAdress = $(this).parent('div').siblings('input');
        $(valInputAdress).val($(this).text());
        $(this).parent('div').slideUp();
    });


    //adv-search
    $('.form-registration .adv-search-btn').click(function () {
        $('.form-registration .adv-search-btn .icon-adv-search').toggleClass('transdeg');
        $('.advanced-search').slideToggle().toggleClass('active-adv');
    });

    //range
    var current_slider_range;

    $('.rating-range').each(function () {

        current_slider_range = $(this);

        var $box = $(this).parents('.wrap-range'),
            $input = $(this).find('.input-rating');

       current_slider_range.slider({
            range: true,
            min: $input.data('min'),
            max: $input.data('max'),
            step: $input.data('step'),
            values: [ $input.data('min'), $input.data('max') ],
            slide: function( event, ui ) {
                $input.val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            },

            change: function () {
                var Price = $input.val();
                var Value = Price.split(' - ');
                var A = Value[0];
                var B = Value[1];
                var $handle = $(this).find('.ui-slider-handle');

                $handle.empty('<span class="value-rating"></span>');
                $handle.append('<span class="value-rating"></span>');

                $handle.eq(0).find('.value-rating').text(A);
                $handle.eq(1).find('.value-rating').text(B);
            }
       });

       // init values & labels
        $input.val( "" + $box.find( ".rating-range" ).slider( "values", 0 ) +
            " - " + $box.find( ".rating-range" ).slider( "values", 1 ) );

        var $new_handle = $(this).find('.ui-slider-handle');
        $new_handle.empty('<span class="value-rating"></span>');
        $new_handle.append('<span class="value-rating"></span>');
        $new_handle.eq(0).find('.value-rating').text($input.data('min'));
        $new_handle.eq(1).find('.value-rating').text($input.data('max'));
    });


    //clear-filtre
    $('.clear-filtr').click(function () {

        $ProfesionSelect.val(null).trigger("change");

        $('.form-registration')[0].reset();

        $('.form-registration').find('.checkbox').removeClass('checkbox-checked checkbox-checked-base');


        $ToWhomMultSelect.multiselect('selectAll', false);
        $ToWhomMultSelect.multiselect('updateButtonText');

        $ClassServMultSelect.multiselect('selectAll', false);
        $ClassServMultSelect.multiselect('updateButtonText');

        $MaterislsMultSelect.siblings('.btn-group').find('li').removeClass('active');
        $MaterislsMultSelect.multiselect('updateButtonText');

        $ServiceMultSelect.siblings('.btn-group').find('li').removeClass('active');
        $ServiceMultSelect.multiselect('updateButtonText');
    });

    //---------------end Form Registration


    //gallary populary
    $('.gallery-master').owlCarousel({
        loop:true,
        margin:2,

        responsive:{
            0:{
                items:4,
                nav:false
            },
            768:{
                items:6
            }
        }
    });

    //Magnifig-popup - gallery-slider-master
    var Slider = $('.popup-gallery');
    $(Slider).each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
                enabled: true
            },

            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    });

    $(Slider).find('.overlay').click(function () {
        $(this).siblings('a').click();
    });

    //paginatop page
    $('.paginator').pagination({
        items: 100,
        itemsOnPage: '10',
        edges: '1',
        cssStyle: 'light-theme',
        ellipsePageSet: false,
        displayedPages: '3',
        prevText: '',
        nextText: 'Далее'
    });

    //SCROLL-TO-TOP
    $('#toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


});

//FUNCTIONS FOR CLICK LABEL
function MyFuncOpenAdress ( el ) {
    jQuery( el ).parents('.search-input').find('input').siblings('div').slideDown();
};

//multiselect select2
var ProfesionSelect = jQuery(".js-example-basic-multiple").select2();
function MyFuncTrigger( el ) {
    var x = jQuery(".js-example-basic-multiple").val();
    x.push( el );
    jQuery('.js-example-basic-multiple').val( x ).trigger('change');
    console.log( jQuery(".js-example-basic-multiple").val() );
};
