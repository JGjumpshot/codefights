function twoOldestAges(ages){
  ages.sort(function(a,b){
    return a - b;
  });
  return ages.splice(-2);
}

twoOldestAges([1, 2, 10, 8]);
