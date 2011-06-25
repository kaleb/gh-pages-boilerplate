/* Author: 

*/
$(function(){
  $('#site_header a').each(function(){
    var $this = $(this);
    console.log($this);
    $this.button({
      icons: { primary: $this.attr('data-icon') }
    , text: false
    });
  });
});