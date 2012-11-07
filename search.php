<?php get_header(); ?>
<?php get_sidebar(); ?>

<div class="searchPage">
	<?php if (have_posts()) : ?>
	
		<h2>Search Results</h2>

		<!--?php include (TEMPLATEPATH . '/_/inc/nav.php' ); ?-->

		<?php while (have_posts()) : the_post(); ?>

			<article <?php post_class() ?> id="post-<?php the_ID(); ?>">

				<a href="<?php the_permalink(); ?>"><h2><?php the_title(); ?></h2></a>

				<!--?php include (TEMPLATEPATH . '/_/inc/meta.php' ); ?-->

				<div class="entry">
<?php get_permalink( $id ); ?>
					<?php the_excerpt(); ?>

				</div>

			</article>

		<?php endwhile; ?>

		<!--?php include (TEMPLATEPATH . '/_/inc/nav.php' ); ?-->

	<?php else : ?>

		<h2>No posts found.</h2>

	<?php endif; ?>
</div>


<br clear="all">
<?php get_footer(); ?>
