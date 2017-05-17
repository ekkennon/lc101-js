var white = " ";
var black = "#";
var isBlack = false;
var size = 8;
var grid = new Array(size);
     
for (var i=0;i<size;i++) {
  grid[i] = new Array(size);
  var row = "";
  for (var j=0;j<size;j++) {
    if (isBlack) {
      grid[i][j] = black;
    } else {
      grid[i][j] = white;
    }
    row += grid[i][j];
    isBlack = !isBlack;
  }
  console.log(row)
  isBlack = !isBlack;
}