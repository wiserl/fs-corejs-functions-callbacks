import Test from 'ava';
import Calculator from '../src';

Test('#add is exported correctly', t => t.truthy(Calculator.add));

Test('#multiply is exported correctly', t => t.truthy(Calculator.multiply));

Test.cb(`#add function works`, t => {
  Calculator.add(1, 2, (err, result) => {
    t.is(result, 3);
    t.end();
  });
});

Test.cb(`#multiply function works`, t => {
  Calculator.multiply(1, 2, (err, result) => {
    t.is(result, 2);
    t.end();
  });
});

Test.cb(`#multiply function works with 0`, t => {
  Calculator.multiply(0, 1, (err, result) => {
    t.is(result, 0);
    t.end();
  });
});
