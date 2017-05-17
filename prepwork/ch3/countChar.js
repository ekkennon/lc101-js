var countBs = function(word) {
  return countChar(word, "B");
};

var countChar = function(word, letter) {
  var count = 0;
  for (var i=0;i<word.length;i++) {
    if (word.charAt(i) === letter) {
      count++;
    }
  }
  return count;
};