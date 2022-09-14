import operate from '../operate';

const numberOne = 20;
const numberTwo = 10;
test('Test the operate functionality for plus', () => {
  const operation = '+';
  const result = operate(numberOne, numberTwo, operation);
  expect(result).toBe('30');
});
test('Test the operate functionality for minus', () => {
  const operation = '-';
  const result = operate(numberOne, numberTwo, operation);
  expect(result).toBe('10');
});
test('Test the operate functionality for times', () => {
  const operation = 'x';
  const result = operate(numberOne, numberTwo, operation);
  expect(result).toBe('200');
});
test('Test the operate functionality for div', () => {
  const operation = '÷';
  const result = operate(numberOne, numberTwo, operation);
  expect(result).toBe('2');
});
test('Test the operate functionality for mod', () => {
  const operation = '%';
  const result = operate(numberOne, numberTwo, operation);
  expect(result).toBe('0');
});
