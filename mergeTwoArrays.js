//Write a function that combines two arrays by alternatingly taking elements from each array in turn.
//[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
//[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

function mergeArrays(a, b) {
    let mergedArrays = [],
        longest = a.length > b.length ? a:b;
    for (let i=0; i<longest.length; i++){
      if (a[i]) j.push(a[i])
      if (b[i]) j.push(b[i])
    }
    return mergedArrays
  }