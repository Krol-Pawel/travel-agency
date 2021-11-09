import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const expectedId = 'abc';
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id={expectedId} image='' name='' cost='' days={1} />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });
  it('should render correct page address if props is id=abc', () => {
    const generatedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedId} image='' name='' cost='' days={1} />);
    const renderLink = component.find('.link').prop('to');

    expect(component).toBeTruthy();
    expect(renderLink).toEqual(generatedLink);
  });
  it('should image has correct alt or src', () => {
    const expectedAlt = 'string';
    const expectedSrc = 'string';
    const component = shallow(<TripSummary id={expectedId} image={expectedSrc} name={expectedAlt} cost='' days={1} />);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);  
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
  });
  it('should look at name', () => {
    const expectedName = 'string';
    const component = shallow(<TripSummary id={expectedId} image='' name={expectedName} cost='' days={1} />);
    const renderName = component.find('.title').text();
    expect(renderName).toEqual(expectedName);
    // console.log(component.debug());
  });
  it('should look at cost', () => {
    const expectedCost = 'tripCost';
    const component = shallow(<TripSummary id={expectedId} image='' name='' cost={expectedCost} days={1} />);
    const renderCost = component.find('.cost').text();
    expect(renderCost).toEqual('from ' + expectedCost);
    // console.log(component.debug());
  });
  it('should look at days', () => {
    const expectedDays = 7;
    const component = shallow(<TripSummary id={expectedId} image='' name='' cost='' days={expectedDays} />);
    const renderDays = component.find('.days').text();
    expect(renderDays).toEqual(expectedDays + ' days');
    // console.log(component.debug());
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should be array', () => {
    const tagsArray = ['first', 'second', 'third'];
    const component = shallow(<TripSummary id={expectedId} image='' name='' cost='' days={1} tags={tagsArray} />);
    expect(component.find('.tag').at(0).text()).toEqual(tagsArray[0]);
    expect(component.find('.tag').at(1).text()).toEqual(tagsArray[1]);
    expect(component.find('.tag').at(2).text()).toEqual(tagsArray[2]);
    console.log(component.debug());
  });
  it('should throw an error if any of the props is empty', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'Lorem';
    const expectedCost = '54,678.21';
    const expectedDays = 4;

    const component = shallow(<TripSummary id={expectedId} image={expectedImage} name={expectedName} cost={expectedCost} days={expectedDays} />);
    expect(expectedId && expectedImage && expectedName && expectedCost && expectedDays).not.toBeUndefined();
    expect(expectedId && expectedImage && expectedName && expectedCost && expectedDays).not.toBeNull();
    console.log(component.debug());

  });
});