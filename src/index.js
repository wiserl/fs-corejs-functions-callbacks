import Ava from 'ava';

export default {
  add(a = 0, b = 0, callback) {
    return callback(null, a + b);
  },

  multiply(a = 0, b = 0, callback) {

    const result = Array(a).fill(b).reduce((last, now) => {
      return this.add(last, now, (err, result) => {
        return result;
      });
    }, 0);

    return callback(null, result);
  }
}