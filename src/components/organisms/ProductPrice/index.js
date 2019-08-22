import React from 'react';

import { useCounter } from '../../../hooks';

import Section from '../../atoms/Section';
import Button from '../../atoms/Button';
import Counter from '../../molecules/Counter';

const ProductPrice = () => {
  const quantity = useCounter();

  return (
    <Section>
      <Counter count={quantity} />
      <Button
        color="Primary"
        value="Add to cart"
      />
    </Section>
  );
};

export default ProductPrice;
