var reverseArray = function(lst) {
  var ans = new Array();
  for (var i=0;i<lst.length;i++) {
    ans.unshift(lst[i]);
  }
  return ans;
};

var reverseArrayInPlace = function(lst) {
  for (var i=0;i<lst.length/2;i++) {
    var temp = swap(lst[i],lst[lst.length-i-1]);
    lst[i] = temp[0];
    lst[lst.length-i-1] = temp[1];
  }
  return lst;
};

var swap = function(i1,i2) {
  var tmp = i1;
  i1 = i2;
  i2 = tmp;
  return [i1,i2];
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
var arr2 = ['q','w','e','r','t','y'];
reverseArrayInPlace(arr2);
console.log(arr2);
// → ["y", "t", "r", "e", "w", "q"]