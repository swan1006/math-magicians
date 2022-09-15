import TestRenderer from 'react-test-renderer';
import Home from '../components/pages/Home';

describe('Unit Test For  Home component', () => {
  it('Home Component renders correctly', () => {
    const tree = TestRenderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});