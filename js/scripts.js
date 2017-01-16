$(function() {
  $('#blanks form').submit(function(e) {
    var blanks = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun'];

    blanks.forEach(function(blank) {
      var userInput = $('input#' + blank).val();
      $('.' + blank).text(userInput);
    });

    $('#story').show();

    e.preventDefault();
  });
});
