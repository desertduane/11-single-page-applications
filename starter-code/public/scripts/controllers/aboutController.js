'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    $('.tab').on('click', 'li', function() {
      if($(this).attr('data-content') === 'about' || $(this).attr('data-content') === 'articles') {
        $('main').hide();
        $('#' + $(this).attr('data-content')).fadeIn();
      } else {
        $('main').fadeIn();
      }
    })
  }


  module.aboutController = aboutController;
})(app);
