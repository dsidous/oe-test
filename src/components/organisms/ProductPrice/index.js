import React from 'react';

import { useCounter } from '../../../hooks';

import Section from '../../atoms/Section';
import Button from '../../atoms/Button';
import Counter from '../../molecules/Counter';

import useStyles from './styles';

const ProductPrice = ({ price }) => {
  const quantity = useCounter();
  const classes = useStyles();

  const fullPrice = (price * quantity.value).toFixed(2).split('.');
  const [pounds, pence] = fullPrice;

  return (
    <Section>
      <div className={classes.wrapper}>
        <div className={classes.price}>
          &pound;
          {pounds}
          <span>{`.${pence}`}</span>
        </div>
        <Counter count={quantity} />
      </div>
      <Button
        color="Primary"
        value="Add to cart"
      />
    </Section>
  );
};

export default ProductPrice;
