<div id="sidebar">
	<div class="mlVert">
		<div id="mobileMenuLogo"></div>
<?php wp_nav_menu( array( 'theme_location' => 'primary', 'depth' => 2, 'menu' => 'mainMenu' ) ); ?>
    <?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Sidebar Widgets')) : else : ?>
    
    
        <!-- All this stuff in here only shows up if you DON'T have any widgets active in this zone -->
	
	<?php endif; ?>
<div class="cowSide"></div></div><br clear="all" />

<div class="mobileCircle">Menu</div>

</div>
