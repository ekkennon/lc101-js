var range = function(start, end, step=1) {
  if (step == 0) {
    lst = [start,end];
  } else if (step < 0) {
    var lst = [start];
    for (var i=start;i>end;i+=step) {
      lst.push(i+step);
    }
  } else {
    var lst = [start];
    for (var i=start;i<end;i+=step) {
      lst.push(i+step);
    }
  }
  return lst;
};

var sum = function(lst) {
  var ans = 0;
  for (var i=0;i<lst.length;i++) {
    ans += parseInt(lst[i]);
  }
  return ans;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55