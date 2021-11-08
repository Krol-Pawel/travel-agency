import React from 'react';
import styles from './OrderOption.module.scss';

const OrderOptionText = ({ setOptionValue }) =>(
  <div className={styles.number}>
    <input 
      type='text'
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);


export default OrderOptionText;