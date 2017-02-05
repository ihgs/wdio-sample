var $ = require('jquery');


$(document).ready(function(){
  $('#mb').click(function(){
    $('#selector').delay(2000).queue(function(){
      $(this).addClass("aaaaaaaaaaa")
      $(this).text(new Date)
    })
  });


  $('#selector').bind('DOMSubtreeModified', function(e){
     console.log(e)
  })
})
