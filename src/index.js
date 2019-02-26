/**
* @param preferences - an array of integers. Indices of people, whom they love
* @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(preferences = []) {
  var trianglesValues = {};
  var trianglesCount = 0;

  preferences.forEach(function(value,key) {
    trianglesValues[key+1] = value;
  });

  var matches = [];

  for (var key in trianglesValues) {
    if (matches.includes(trianglesValues[key])) {
      continue;
    }

    var second = trianglesValues[key];
    var third = trianglesValues[second];
    var first = trianglesValues[third];

    if (first == key && second != first && third != first) {
      matches.push(first,second,third);
      trianglesCount++;
    }
  }

  return trianglesCount;
};
