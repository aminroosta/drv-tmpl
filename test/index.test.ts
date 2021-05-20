import { Adder } from '../src/index';

it('Bar.foo() works as expected', () => {
  const adder = new Adder({ value: 3 });
  adder.add(5);
  expect(adder.get()).toBe(8);
});
