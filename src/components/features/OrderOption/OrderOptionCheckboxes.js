import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value !== id);
  }
};

const OrderOptionCheckboxes = ({ values, setOptionValue, currentValue }) =>(
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
        <input 
          type='checkbox'
          value={value.id}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        >
        </input>
        {value.name}
        {(value.price)}
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  currentValue: PropTypes.array,
};

export default OrderOptionCheckboxes;
