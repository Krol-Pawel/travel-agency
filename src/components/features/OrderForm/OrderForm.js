import React from 'react';

import {Row, Col, Grid} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = ({ tripCost, options, setOrderOption, currentValue }) =>(
  <Grid>
    <Row>
      {pricing.map((price) =>
      <Col md={4} key={price.id}>
        <OrderOption {...price} currentValue={options[price.id]} setOrderOption={setOrderOption}/>
      </Col>)}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} tripOptions={options}/>
      </Col>
    </Row>
  </Grid>
);

export default OrderForm;
