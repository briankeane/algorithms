const { expect } = require('chai');
const {
  oneChangeAway,
  rotateMatrix,
  setRowColumnToZero
} = require('./');

describe('Cracking the Coding Interview', function () {
  it ('1.5 -- One Away', function () {
    expect(oneChangeAway('pale', 'ple')).to.equal(true);
    expect(oneChangeAway('pales', 'pale')).to.equal(true);
    expect(oneChangeAway('pale', 'bale')).to.equal(true);
    expect(oneChangeAway('pale', 'bake')).to.equal(false);
  });

  it ('1.7 -- rotates a Matrix', function () {
    var matrix = [
                  [0 ,  1,  2,  3, 4],
                  [5 ,  6,  7,  8, 9],
                  [10, 11, 12, 13, 14],
                  [15, 16, 17, 18, 19],
                  [20, 21, 22, 23, 24]
                ];
    var rotatedMatrix = [
                  [20, 15, 10,  5, 0],
                  [21 ,16, 11,  6, 1],
                  [22, 17, 12,  7, 2],
                  [23, 18, 13,  8, 3],
                  [24, 19, 14,  9, 4]
                ];

    expect(rotateMatrix(matrix)).to.deep.equal(rotatedMatrix);
  });

  it ('1.8 -- set entire row and column of 0 to 0', function () {
    var matrix = [
      [1,1,1,1,1,0],
      [1,1,1,0,1,1],
      [1,1,1,1,1,1],
      [1,1,1,1,1,1],
      [1,0,1,1,1,1],
      [1,1,1,1,1,1]
    ];
    var newMatrix = [
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [1,0,1,0,1,0],
      [1,0,1,0,1,0],
      [0,0,0,0,0,0],
      [1,0,1,0,1,0]
    ];
    expect(setRowColumnToZero(matrix)).to.deep.equal(newMatrix);
  });
});