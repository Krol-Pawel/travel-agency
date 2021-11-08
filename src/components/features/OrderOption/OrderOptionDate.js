import React from 'react';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.module.scss';
import "react-datepicker/dist/react-datepicker.css";


const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div className={styles.component}>
    <DatePicker selected={currentValue} onChange={(date) => setOptionValue(date)}/>
  </div>
);


export default OrderOptionDate;