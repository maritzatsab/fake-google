
$(document).ready(function() {
    var gsearch = function() {
      var url = 'https://www.google.com/search?q=' + document.getElementById('search').value;
      window.open(url, 'google');
    };
    var glucky = function() {
      var url = 'https://www.google.com/search?q=' + document.getElementById('search').value + '&btnI';
      window.open(url, 'google');
    };
  
    $(".left").click(gsearch);
    $(".right").click(glucky);
  
    $("#search").keypress(function(e) {
      if (e.which == 13) {
        gsearch();
      }
    });
  });