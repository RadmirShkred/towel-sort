
module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.reduce((acc, curr, index) => {
    return acc.concat((index % 2) ? curr.reverse() : curr);
  }, []);
}
