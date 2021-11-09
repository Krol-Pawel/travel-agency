import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption name={'isname'} type={'istype'} />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption name='' type=''/>);
    expect(component).toEqual({});
  });
  it('should be nameprops in title', () => {
    const component = shallow(<OrderOption name={'nameprops'} type={'text'} />);
    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual('nameprops');
    console.log(component.debug());
  });
  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };
  
  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;

      beforeEach(() => {
        component = shallow(
          <OrderOption
            type={type}
          />
        );
      });
      /* common tests */
      it('passes dummy test', () => {
        expect(1).toBe(1);
        console.log(component.debug());
      });
      
  
      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          /* tests for dropdown */
          break;
        }
      }
    });
  }
})