$(function() {
  $('.content__submenu').hide();
  $('.content__menu-title').click(function(){
    $(this).next().slideToggle('slow').siblings('.content__submenu:visible').slideUp('slow');  
  });
})