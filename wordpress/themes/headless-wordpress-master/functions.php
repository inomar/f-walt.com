<?php
add_theme_support('post-thumbnails', array('post'));
add_theme_support('menus'); 

function sb_add_cpts_to_api() {
  global $wp_post_types;

  // Add CPT slugs here
  $arr = ['news'];

  foreach( $arr as $key ) {

  // If the post type doesn't exist, skip it
  if( !$wp_post_types[$key] )
      continue;

      $wp_post_types[$key]->show_in_rest = true;
      $wp_post_types[$key]->rest_base = $key;
  }
}
add_action( 'init', 'sb_add_cpts_to_api', 30 );
?>
