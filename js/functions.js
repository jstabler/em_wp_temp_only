  $('#menu-mainmenu ul.sub-menu').hide();
  // This makes sure that all the sub menus are open when applicable
  // $('#menu-mainmenu li.current-menu-item').children().show();
  // This keeps the nav open to the item that you are navigating to.
  $('#menu-mainmenu li.current-menu-item').parents().show();
  // makes menu show on homepage, but not in subs in mobile view
  $(document).ready(function() {
    if($(('body.home, body.page-id-264, body.page-id-192, .search, .page-id-368')).length > 0) {
        console.log('i am home');
}
    else { $('.mlVert').toggle(); console.log('menu hide');}
  });
 
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

//-- Mobile Menu
// var mobileMenu = $('.menu-mainmenu-container')
//   $('div .mobileCircle').click(
//     function() {
//       if ($(mobileMenu).hasClass('showMenu')) {
//         $(mobileMenu).removeClass('showMenu', 900, 'easeOutBounce');
//       }
//       else {
//         $(mobileMenu).removeAttr('style');
//         $(mobileMenu).addClass('showMenu', 900, 'easeOutBounce');
//       }
//     });

var mobileMenu = $('.mlVert')
  $('div .mobileCircle').click(
      function() {
        if ($('#sidebar').hasClass('showMenu')) {
        
        $('#sidebar, #searchform div').removeClass('showMenu');
        $(mobileMenu).slideToggle(600);
        console.log('absolute');
      }
      else {
        
        $('#sidebar, #searchform div').addClass('showMenu');
        $(mobileMenu).slideToggle(600);
        console.log('fixed');
      }
    });