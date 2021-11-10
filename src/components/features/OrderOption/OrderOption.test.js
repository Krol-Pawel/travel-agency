import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
// import DatePicker from 'react-datepicker';

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
  
  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };
  
  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };
  
  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;

  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOption; /* 1 */
      
      beforeEach(() => {
        mockSetOrderOption = jest.fn(); /* 2 */
        component = shallow(
          <OrderOption
            type={type}
            setOrderOption={mockSetOrderOption} /* 3 */
            {...mockProps}
            {...mockPropsForType[type]}
          />
        );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });
      /* common tests */
      it(`renders ${optionTypes[type]}`, () => {
        expect(subcomponent).toBeTruthy();
        expect(subcomponent.length).toBe(1);
        console.log(component.debug());
        console.log(subcomponent.debug());
      });
      
  
      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);
          
            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);
          
            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          /* tests for dropdown */
          break;
        };
        case 'icons': {
          it('contains div with class icon', () => {
            const icon = renderedSubcomponent.find('.icon');
            expect(icon.length).toBe(1);
            const activeIcon = renderedSubcomponent.find('.iconActive');
            expect(activeIcon.length).toBe(1);
          });
          it('should run setOrderOption function on click', () => {
            renderedSubcomponent.find('.icon').simulate('click');
            expect(mockSetOrderOption).toBeCalledTimes(1);
          });
        //   /* tests for icon */
          break;
        };
        case 'checkboxes': {
          it('contains checkboxes', () => {
            const checkbox = renderedSubcomponent.find('input[type="checkbox"]');
            expect(checkbox.length).toBe(mockProps.values.length);
          });
          it('should run setOrderOption function on change checkboxes', () => {
            renderedSubcomponent.find(`input[value="${testValue}"]`).simulate('change', { currentTarget: { checked: true } });
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: [mockProps.currentValue, testValue]});
          });
          /* tests for checkboxes */
          break;
        };
        // case 'date': {
        //   // it('contains select and options', () => {
        //   //   const dateComponent = DatePicker.find('DatePicker')
        //   //   expect(dateComponent.length).toBe(1);
        //   // });
        //   // it('should run setOrderOption function on change', () => {
        //   //   renderedSubcomponent.find(DatePicker).simulate('change', {testValue});
        //   //   expect(mockSetOrderOption).toBeCalledTimes(1);
        //   //   expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
        //   // });
        // //   /* tests for date */
        //   break;
        // };
        case 'number': {
          it('contains input with type number', () => {
            const numberedImput = renderedSubcomponent.find('input[type="number"]');
            expect(numberedImput.length).toBe(1);
          });
          it('should run setOrderOption function on change for number', () => {
            renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValueNumber } });
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValueNumber});
          });
          
          /* tests for number */
          break;
        };
        case 'text': {
          it('contains input with type text', () => {
            const numberedImput = renderedSubcomponent.find('input[type="text"]');
            expect(numberedImput.length).toBe(1);
          });
          it('should run setOrderOption function on change for text', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
        //   /* tests for text */
          break;
        }
        // no default
      }
    });
  }
})
