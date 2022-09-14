import calculate from '../calculate';

test('Test the functionality for AC button', () => {
  const obj = {
    total: 10,
    next: 20,
    operation: '+',
  };
  const result = calculate(obj, 'AC');
  expect(result.total).toBe(null);
  expect(result.next).toBe(null);
  expect(result.operation).toBe(null);
});

test('Test the functionality for pressing 0 button', () => {
  const obj = {
    total: null,
    next: 0,
    operation: '+',
  };
  const result = calculate(obj, '0');
  expect(result.total).toBe(null);
});

test('Test the functionality for pressing the buttons whithout operation', () => {
  const obj = {
    total: 10,
    next: 20,
    operation: null,
  };
  const result = calculate(obj, '1');
  expect(result.next).toBe('201');
  expect(result.total).toBe(null);
});