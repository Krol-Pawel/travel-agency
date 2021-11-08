import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const expectedId = 'abc'
    const component = shallow(<TripSummary tags={[]} id={expectedId} />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should render correct page address if props is id=abc', () => {
    const expectedId = 'abc'
    const generatedLink = `/trip/${expectedId}`;
    const component = shallow(<TripSummary tags={[]} id='abc' />);
  
    expect(component.find('.link').prop('to')).toEqual(generatedLink);
  });
});