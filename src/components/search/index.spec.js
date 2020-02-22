
import { shallow } from 'enzyme';
import React from 'react';
import Search from './';

describe('Search', () => {
  let wrapper;
  let props;
  it('should match snapshot', () => {
    props = {
        search: jest.fn(),
      };
    wrapper = shallow(<Search search={props.search} />); 
    expect(wrapper).toMatchSnapshot();
  });
});
