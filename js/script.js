/* Author: 

*/
$(function(){
  $('#site_header ul a').each(function(){
    var $this = $(this);
    $this.button({
      icons: { primary: $this.attr('data-icon') }
    , text: false
    });
  });
});