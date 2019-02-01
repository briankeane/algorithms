function oneChangeAway(str1, str2) {
  //
  // check wasInserted, wasDeleted (wasInserted backwards), and oneDifferentLetter
  //
  return (wasInserted(str1, str2) || wasInserted(str2, str1) || oneDifferentLetter(str1, str2));
  

  function oneDifferentLetter(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }

    var differentLetterCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        differentLetterCount++;
      }
      if (differentLetterCount > 1) {
        return false;
      }
    }
    return true;
  }

  function wasInserted(str1, str2) {
    //
    // IF they're not one apart
    //
    if (Math.abs(str1.length - str2.length) !== 1) {
      return false;
    }

    var longerStr; 
    var shorterStr;

    if (str1.length > str2.length) {
      longerStr = str1;
      shorterStr = str2;
    } else {
      longerStr = str2;
      shorterStr = str1;
    }
    for (let i = 0; i < longerStr.length; i++) {
      //
      // IF the letters don't match, remove that one from the longer string
      //
      if (longerStr[i] !== shorterStr[i]) {
        return ((longerStr.slice(0,i) + longerStr.slice(i+1)) === shorterStr);
      }
    }
    return false;
  }
}

function rotateMatrix(matrix) {
  var newMatrix = [];
  //
  // initialize the new matrix with empty arrays
  //
  for (let i = 0; i < matrix.length; i++) {
    newMatrix.push([]);
  }

  //
  // The old last row should look like the new first column
  //
  for (let rowIndex = matrix.length - 1; rowIndex >= 0; rowIndex--) {
    for (let i = 0; i < matrix[rowIndex].length; i++) {
      newMatrix[i].push(matrix[rowIndex][i]);
    }
  }
  return newMatrix;
}

function printMatrix(matrix) {
  for (let row of matrix) {
    console.log(row);
  }
}

function setRowColumnToZero(matrix) {
  var columnsToZero = {};
  var rowsToZero = {};

  for (let columnIndex = 0; columnIndex < matrix.length; columnIndex++) {
    for (let rowIndex = 0; rowIndex < matrix[columnIndex].length; rowIndex++) {
      if (matrix[columnIndex][rowIndex] == 0) {
        columnsToZero[columnIndex] = true;
        rowsToZero[rowIndex] = true;
      }
    }
  }

  for (let columnIndex = 0; columnIndex < matrix.length; columnIndex++) {
    for (let rowIndex = 0; rowIndex < matrix[columnIndex].length; rowIndex++) {
      if (rowsToZero[rowIndex] || columnsToZero[columnIndex]) {
        matrix[columnIndex][rowIndex] = 0;
      }
    }
  }
  return matrix;
}

module.exports = {
  oneChangeAway,
  rotateMatrix,
  setRowColumnToZero
}