  $('#menu-mainmenu ul.sub-menu').hide();
  // This makes sure that all the sub menus are open when applicable
  //$('#menu-mainmenu li.current-menu-item').children().show();
  // This keeps the nav open to the item that you are navigating to.
  $('#menu-mainmenu li.current-menu-item').parents().show(); 
 
$("#menu-mainmenu li a").click(function(e){
        if( $(this).parent().children('ul').length > 0 ){
            e.preventDefault(); //prevent the link from being followed
            //$('#menu-mainmenu ul.sub-menu').siblings().hide();
            $(this).parent().siblings().find('ul').slideUp(); //hide other sub-menus
            $(this).parent().find('ul').slideDown(); // show this sub-menu

        }
    });

// -- Search Field
  var searchField = '#s'
  var formLabel = 'form div label'
  $('form div').click(
  	function() {
  		$('#s').show(900);
  		$(formLabel).hide()
  		$('#s').focus()
  	});
  $('form div').focusout(
  	function() {
  		$(formLabel).show(900)
  		$('#s').hide();
  	});
  $('#s').hide();

// -- Mobile Menu
// var mobileMenu = $('.menu-mainmenu-container')
//   $('div .mobileCircle').click(
//     function() {
//       if ($(mobileMenu).hasClass('hideMenu')) {
//         $(mobileMenu).removeClass('hideMenu');
//       }
//       else {
//         $(mobileMenu).removeAttr('style');
//         $(mobileMenu).addClass('hideMenu');
//       }
//     });

var mobileMenu = $('.menu-mainmenu-container')
  $('div .mobileCircle').click(
      function() {
        if ($(window).width() < 580 /*&& $(mobileMenu).hasClass('showMenu')*/) {
        $(mobileMenu).slideToggle(900);
        $(mobileMenu).addClass('showMenu');
      }
      else {
        $(mobileMenu).addClass('showMenu');
        $(mobileMenu).slideToggle(900);
      }
    });
