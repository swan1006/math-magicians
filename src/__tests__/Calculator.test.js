import TestRenderer from 'react-test-renderer';
import Calculator from '../components/pages/Calculator';

describe('Unit Test For Calculator component', () => {
  it('Calculator Component renders correctly', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
