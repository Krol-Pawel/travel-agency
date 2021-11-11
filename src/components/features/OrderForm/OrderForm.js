import React from 'react';

import {Row, Col, Grid} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import PropTypes from 'prop-types';

const sendOrder = (options, tripCost, tripId, countryCode, tripName) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    countryCode,
    tripName,
  };

  if (options.name !== '' && options.contact !== '') {
    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('please fill name and contact');
  }
};

const OrderForm = ({ tripCost, options, setOrderOption, tripId, countryCode, tripName }) =>(
  <Grid>
    <Row>
      {pricing.map((price) =>
        <Col md={4} key={price.id}>
          <OrderOption {...price} currentValue={options[price.id]} setOrderOption={setOrderOption} />
        </Col>)}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} tripOptions={options} />
      </Col>
      <Button onClick={() => sendOrder(options, tripCost, tripId, countryCode, tripName)}>Order now!</Button>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string, 
};

export default OrderForm;
