import TestRenderer from 'react-test-renderer';
import Quote from '../components/pages/Quote';

describe('Unit Test For Quote component', () => {
  it('Quote Component renders correctly', () => {
    const tree = TestRenderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});