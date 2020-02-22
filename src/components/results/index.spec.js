
import { shallow } from 'enzyme';
import React from 'react';
import Results from './';
import Card from '../card';

describe('Results', () => {
  let wrapper;
  let props;
  it('should render two cards for an array of two tours', () => {
    props = {
      tours: [{
        title: "German Tour: Parliament Quarter Reichstag glass dome",
        price: "14",
        currency: "$",
        rating: "4.8",
        isSpecialOffer: false,
        thumbnail: "https://cdn.getyourguide.com/img/tour_img-342032-148.jpg"
      }, {
        title: "German Tour: Parliament Quarter Reichstag glass dome",
        price: "14",
        currency: "$",
        rating: "4.8",
        isSpecialOffer: false,
        thumbnail: "https://cdn.getyourguide.com/img/tour_img-342032-148.jpg"
      }]
    };
    wrapper = shallow(<Results tours={props.tours} />);
    expect(wrapper.find(Card).length).toEqual(2);
  });

  it('should match snapshot', () => {
    wrapper = shallow(<Results tours={props.tours} />); 
    expect(wrapper).toMatchSnapshot();
  });
});
