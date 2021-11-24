import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';


const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker
      selected={currentValue}
      onChange={date => setOptionValue(date)}
    />
  </div>
);


OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

OrderOptionDate.defaultProps = {
  currentValue: new Date(),
};


export default OrderOptionDate;