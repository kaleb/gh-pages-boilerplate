/* Author: 

*/
$(function(){
  $('#site_header ul').buttonset()
  .find('a').each(function(){
    var $this = $(this);
    $this.button({
      icons: { primary: $this.attr('data-icon') }
    , text: false
    });
  });
});