import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderOption.module.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';
import PropTypes from 'prop-types';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({name, type, id, setOrderOption, ...otherProps}) =>{
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
};



export default OrderOption;
