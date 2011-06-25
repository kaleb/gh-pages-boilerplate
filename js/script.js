/* Author: 

*/
$(function(){
  $('#site_header a').each(function(){
    $(this).button({
      icons: { primary: this[data-icon] }
    , text: false
    });
  });
});