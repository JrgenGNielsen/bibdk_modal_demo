(function($) {

  var BibdkModalDemo = {};

  BibdkModalDemo.setLinkActions = function(context) {
    // Rewrite link
    $("a[href*='bibdk_modal_demo/form']", context).attr({
      'data-reveal-id': 'bibdk-modal',
      'data-reveal-ajax': 'true',
      'href': function(key, value) {
        return value.replace(/bibdk_modal_demo\/form/, 'bibdk_modal/bibdk_modal_demo');
      }
    }).addClass('bibdk-modal-demo');
  };

  Drupal.behaviors.bibdk_modal_demo = {
    attach: function(context, settings) {
      BibdkModalDemo.setLinkActions(context);
    },
  };

  Drupal.BibdkModalDemo = BibdkModalDemo;
  
  /** Get ajax */
  /*
  Drupal.behaviors.modalDemo = {
      attach:function (context) {
          $('.field-type-worktabs .bibdk-tabs', context).one( "click", function() {
              $('.about-author-load', context).each(function (i, element) {
                  Drupal.foo(element);
              });
          });
      },
      detach:function (context) {
      }
  };
  */

}(jQuery));
