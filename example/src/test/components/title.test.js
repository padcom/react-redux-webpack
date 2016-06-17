import Title from 'components/title';
import { createStore } from 'redux';

describe('Title', function() {
  it('will render', function() {
    const store = createStore((state, action) => state, { title: 'Hello, world!' });
    const component = mount(<Title store={store} />);
    expect(component.text()).to.equal('Hello, world!');
  });
});
