  $('#menu-mainmenu ul.sub-menu').hide();
  // This makes sure that all the sub menus are open when applicable
  //$('#menu-mainmenu li.current-menu-item').children().show();
  // This keeps the nav open to the item that you are navigating to.
  //$('#menu-mainmenu li.current-menu-item').parents().show(); 
 
$("#menu-mainmenu li a").click(function(e){
        if( $(this).parent().children('ul').length > 0 ){
            e.preventDefault(); //prevent the link from being followed
            //$('#menu-mainmenu ul.sub-menu').siblings().hide();
            $(this).parent().siblings().find('ul').slideUp(); //hide other sub-menus
            $(this).parent().find('ul').slideDown(); // show this sub-menu

        }
    });

/*  $('#menu-mainmenu ul li a').click(
    function() {
      var checkElement = $(this).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        return false;
        }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$(this).parent().siblings("li:has(ul)").find("ul").slideUp('normal');      	      	
        $('#nav-main ul ul li ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
        return false;
        }
      }
    );
  $('#menu-mainmenu ul ul li a').click(
    function() {
      var checkElement = $(this).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        return false;
        }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('#menu-mainmenu ul ul').slideUp('normal');    
        $('#menu-mainmenu ul ul li ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
        return false;
        }
      }
    );	*/
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
  
var mobileMenu = $('.menu-mainmenu-container')
  $('div .mobileCircle').click(
    function() {
      if ($(mobileMenu).hasClass('hideMenu')) {
        $(mobileMenu).removeAttr('style');
        $(mobileMenu).removeClass('hideMenu');
      }
      else {
        $(mobileMenu).removeAttr('style');
        $(mobileMenu).addClass('hideMenu');
      }
    });
  $(mobileMenu).removeAttr('style');
