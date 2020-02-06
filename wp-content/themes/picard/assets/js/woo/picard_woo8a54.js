/**
 * Custom OWL in theme
 */
(function ($) {
  "use strict";
  jQuery(document).ready(function($) {
    $('.view_list').on('click', function(){
        Cookies.set('picard_shop_view', 'list');
        $(this).addClass('active');
        $('.view_grid').removeClass('active');
        $('ul.products').addClass('products_list_view');
        picard_show_listview();
    });
    $('.view_grid').on('click', function(){
        Cookies.set('picard_shop_view', 'grid');
        $(this).addClass('active');
        $('.view_list').removeClass('active');
        $('ul.products').removeClass('products_list_view');
        picard_show_gridview();
    });
    var view = Cookies.get( 'picard_shop_view' );
    if (view != '') {
      if (view == 'list') {
          $('.view_grid').removeClass('active');
          $('.view_list').addClass('active');
          $('.site-main').children('ul.products').addClass('products_list_view');
          picard_show_listview();

      }else{
        $('.view_list').removeClass('active');
        $('.view_grid').addClass('active');
        $('.site-main').children('ul.products').removeClass('products_list_view');
        picard_show_gridview();
      }
    }
    function picard_show_listview(){
      $('.site-main').children('ul.products').find('.woo-images-block').addClass('col-md-4 col-sm-6 col-xs-12');
      $('.site-main').children('ul.products').find('.product-content-wrap').addClass('col-md-8 col-sm-6 col-xs-12');
      $('.site-main').children('ul.products').find('li.product').addClass('row');
    }
    function picard_show_gridview(){
      $('.site-main').children('ul.products').find('.woo-images-block').removeClass('col-md-4 col-sm-6 col-xs-12');
      $('.site-main').children('ul.products').find('.product-content-wrap').removeClass('col-md-8 col-sm-6 col-xs-12');
      $('.site-main').children('ul.products').find('li.product').removeClass('row');
    }
    $(document).find('.add-to-cart-susscces').addClass('hide').removeClass('show');
    $(document).find('.add-to-cart-susscces .close').on('click', function(){
        $(document).find('.add-to-cart-susscces').addClass('hide').removeClass('show');
      });
    });
    $(document).on('click',function (e) {
      var target = $(e.target);
      var check =  $('.add-to-cart-susscces');
      if(!(target.is(check) || target.closest(check).length > 0)){
           $('.add-to-cart-susscces').removeClass('show').addClass('hide');
      }
    });
    $(document).ajaxComplete(function(){  
        $(document).find('.add-to-cart-susscces .close').on('click', function(){
        $(document).find('.add-to-cart-susscces').addClass('hide').removeClass('show');

        $(document).on('click',function (e) {
          var target = $(e.target);
          var check =  $('.add-to-cart-susscces');
          if(!(target.is(check) || target.closest(check).length > 0)){
               $('.add-to-cart-susscces').removeClass('show').addClass('hide');
          }
        });
         
      });
    });
   /* cart icon */
    $(document).on('click',function (e) {
        var target = $(e.target);
        var check =  $('.widget_shopping_cart_content');
        if(!(target.is(check) || target.closest(check).length > 0)){
             $('.widget_shopping_cart_content').removeClass('open').slideUp();
        }
    });
    $('.picard-iconcart-header').on('click', function (e) {
        var $el_target = $('.widget_shopping_cart_content');
        e.stopPropagation();
        if ($el_target.hasClass('open')) {
            $el_target.removeClass('open').slideUp();
        } else {
            $el_target.addClass('open').slideDown().css('display', 'block');
        }
    });
})(jQuery)