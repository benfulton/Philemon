$(document).ready(function(){
  $('.entry p').each(function(index) {
     var text = $(this).text().split(' ');
     for( var i = 0, len = text.length; i < len; i++) {
         text[i] = '<span id="' + i + '">' + text[i] + '</span>';
     }
     $(this).html(text.join(' '));
    });

    $('span').hover(function()
    {
       $('#hoverWord').text($(this).text());
	var ant = $(".annotation > h1:contains('" + $(this).text() + "')").parent();
       $('#annotation').html(ant.html());
    });
});
