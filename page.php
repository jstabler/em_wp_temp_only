<?php get_header(); ?>
<?php get_sidebar(); ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<article class="post" id="post-<?php the_ID(); ?>">

			<h2><?php the_title(); ?></h2>

			<!--?php include (TEMPLATEPATH . '/../../../wp-includes/meta.php' ); ?-->

			<div class="entry">

				<?php the_content(); ?>

				<?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>

			</div>

			<?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>

		</article>
		<!--?php include (TEMPLATEPATH . '/../../../wp-includes/nav-menu.php' ); ?-->
		<!--?php comments_template(); ?-->

		<?php endwhile; endif; ?>


<br clear="all">
<?php get_footer(); ?>
