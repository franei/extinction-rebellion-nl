/*
This script contains some settings for the tab controls and image gallery on
single local group pages (single-xrnl_local_group.php).
*/

const sections = ['about', 'demands', 'actions', 'events', 'positions', 'pictures'];

function checkSectionExists(section) {
  if (! jQuery('#' + section).length) {
    jQuery('#lg-navigation')
    .find('a[href=\'#' + section + '\']')
    .parent()
    .remove();
  }
}

jQuery(document).ready(function($){

  // Remove optional sections from the navigation if they don't exist;
  // If there is only one nav-item left, remove that too.
  sections.forEach(checkSectionExists);
  if ($('#lg-navigation .nav .nav-item').length < 2){
    $('#lg-navigation .nav .nav-item').remove();
  };

  // See if a specific tab was requested in the URL
  var requestedTab = '';
  let URLParam = window.location.search.substring(1);
  if (sections.includes(URLParam)) {
    requestedTab = URLParam;
  }

  // Show the Contact tab by default on page load
  // If the About-us section exists, show that instead;
  // if a specific tab was requested, then show that.
  if (requestedTab.length && checkSectionExists(requestedTab)) {
    let navID = ['#', requestedTab, '-nav'].join('');
    $(navID).tab('show');
  } else if ($('#about-nav').length) {
    $('#about-nav').tab('show');
  } else {
    $('#contact-nav').tab('show');
  }

  // Needed to initate the carousel
  if ($('#pictures').length) {
    $('.carousel-item:first').addClass('active');
    $('.carousel-indicators > li:first').addClass('active');
  };

});
