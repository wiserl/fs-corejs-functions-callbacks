export default {
  add(x = 0, y = 0, callback) {
    return callback(null, x + y);
  },

  multiply(x = 0, y = 0, callback) {

    const result = Array(x).fill(y).reduce((prev, current) => {
      return this.add(prev, current, (err, result) => {
        return result;
      });
    }, 0);

    return callback(null, result);
  }
}
