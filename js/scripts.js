function titleCase(input) {
  var articles = ["a", "an", "the", "but", "with", "of", "and", "or"];
  input = input.toLowerCase().split(" ");
  var first_splice = input.splice(0, 1);
  var first_word = first_splice[0];
  var final_string = wordTitleCase(first_word);
  for (var i = 0; i < input.length; i++) {
    var word = input[i];
    if($.inArray(word, articles) < 0) {
      final_string += " " + wordTitleCase(word);
    } else {
      final_string += " " + word;
    }
  }
  return final_string;
};

function wordTitleCase(word) {
  word = word.split("");
  word[0] = word[0].toUpperCase();
  var result = word.join("");
  return result;
};

$(document).ready(function() {
  $("#title-case").submit(function(event) {
    var input = $("#input").val();

    var title = titleCase(input);

    $("#title").text(title);
    $("#results").show();

    event.preventDefault();
  });
});
