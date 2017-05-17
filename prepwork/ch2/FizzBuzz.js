for (var i=1;i<101;i++) {
  var s = "";
  if (i%3 === 0) {
    s = "Fizz";
  }
  if (i%5 === 0) {
    s += "Buzz";
  }
  if (s === "") {
    s = String(i);
  }
  console.log(s);
}