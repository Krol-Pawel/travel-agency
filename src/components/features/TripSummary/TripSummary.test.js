import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const expectedId = 'abc';
  it('should render without crashing', () => {
    const component = shallow(<TripSummary tags={[]} id={expectedId} />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should render correct page address', () => {
    const generatedLink = '/trip/abc';
    const component = shallow(<TripSummary tags={[]} id={expectedId} />);
    const renderLink = component.find('.link').prop('to');

    expect(component).toBeTruthy();
    expect(renderLink).toEqual(generatedLink);
  });
  it('should image has correct alt and src', () => {
    const expectedAlt = 'string';
    const expectedSrc = 'string';
    const component = shallow(<TripSummary tags={[]} id={expectedId} image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);  
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
  });
  it('should check data of name, cost, days', () => {
    const expectedName = 'string';
    const expectedCost = 'tripCost';
    const expectedDays = 7;

    const component = shallow(<TripSummary tags={[]} id={expectedId} image='' name={expectedName} cost={expectedCost} days={expectedDays} />);
    const renderName = component.find('.title').text();
    const renderCost = component.find('.cost').text();
    const renderDays = component.find('.days').text();
    expect(renderName).toEqual(expectedName);
    expect(renderCost).toEqual('from ' + expectedCost);
    expect(renderDays).toEqual(expectedDays + ' days');
    // console.log(component.debug());
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });
  it('should render proper tags', () => {
    const tagsArray = ['first', 'second', 'third'];
    const component = shallow(<TripSummary tags={tagsArray} id={expectedId} />);
    expect(component.find('.tag').at(0).text()).toEqual(tagsArray[0]);
    expect(component.find('.tag').at(1).text()).toEqual(tagsArray[1]);
    expect(component.find('.tag').at(2).text()).toEqual(tagsArray[2]);
    console.log(component.debug());
  });
  it('should not render div with class tags if tags is a empty array or is false', () => {
    const tagsProp = [];
    const component = shallow(<TripSummary tags={tagsProp} />);
    console.log(component.debug());
  });
});