function transpose(...matrix) {
  matrix

  let nRows = matrix[0].length;
  let nCols = matrix.length;
  let items = [];
  let result = [];

  nRows
  nCols

  matrix.forEach(row => {
    row.forEach( r => {
      items.push(r);
    })  
  })
  items

  items.forEach( (item, index) => {
    let row = [];
    index
    item
    // for (let i = index; i < nCols;) {
    //   // if (item[i] !== undefined) {
    //     row.push(item);
    //   // }
    //   i = i + nRows;
    // }
    row
    result.push(row);
  })

  result
  return result;

}

transpose( [1,2,3], [4,5,6] );

// [ [a,b,c],[d,e,f] ]  ==>  [ [a,d],[b,e],[c,f] ]
// [ [1,2,3],[4,5,6] ]  ==>  [ [1,4],[2,5],[3,6] ]