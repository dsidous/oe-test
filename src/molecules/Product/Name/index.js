import React from 'react';

import Section from '../../../atoms/Section';
import ProductTitle from '../../../atoms/ProductTitle';

const ProductName = ({ title, light, first }) => {
  return (
    <Section light={light} first={first}>
      <ProductTitle title={title} />
    </Section>
  );
};

export default ProductName;
