import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ( {setOptionValue, values, required, currentValue} ) =>(
  <div className={styles.icon}>
    {required ? '' : (
      <div onClick={() => setOptionValue('')}>
        <Icon name={'times-circle'} />
        none
      </div>
    )}
    {values.map(value => (
      <div 
        className={currentValue===value.id ? styles.iconActive : styles.icon} 
        key={value.id} 
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name}
        {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

export default OrderOptionIcons;