import React from 'react';
import styles from './OrderOption.module.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, limits, setOptionValue, price }) =>(
  <div className={styles.number}>
    <input 
      className={styles.imputSmall}
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    Price: {formatPrice(price)}
  </div>
);


export default OrderOptionNumber;