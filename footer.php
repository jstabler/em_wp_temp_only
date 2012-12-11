</div>
    <div id="footer">
<br/>

  <ul class="ulBorder">
    <li id="footerLogo"><a href="#">Enzo's Market</a></li>
    <li><p>1501 Long Street | Chattanooga, TN 37408 |<span> Store 423.xxx.xxxx | Fax 423.xxx.xxxx</span></p></li>
    <li class="lastUL">
      <a href="http://twitter.com/EnzosMarket"target="_blank" id="footerT">Twitter</a>
      <a href="https://www.facebook.com/enzosmarkets"target="_blank" id="footerFB">Facebook</a>
        </li>  <br clear="all" /> 

  </ul>

  
    <div id="footer-content">
    <small>&copy;<?php echo date("Y"); echo " "; bloginfo('name'); ?> | All Rights Reserved.</small>
    </div>
  </div>
        
        
        
        
  
  </div>

  <?php wp_footer(); ?>


<!-- here comes the javascript -->

<!-- jQuery is called via the Wordpress-friendly way via functions.php -->

<!-- this is where we put our custom functions -->
<script src="<?php bloginfo('template_directory'); ?>/js/functions.js"></script>


<!-- Asynchronous google analytics; this is the official snippet.
   Replace UA-XXXXXX-XX with your site's ID and uncomment to enable.
   
<script>

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXX-XX']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
-->
</body>

</html>
