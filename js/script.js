/* Author: 

*/
$(function(){
  $('#site_header a').each(function(){
    $(this).button({
      icons: { primary: $(this).attr('data-icon') }
    , text: false
    });
  });
});