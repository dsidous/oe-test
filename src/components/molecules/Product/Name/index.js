import React from 'react';

import Section from '../../../atoms/Section';
import ProductTitle from '../../../atoms/ProductTitle';

const ProductName = ({ title, subtitle, light, first }) => {
  return (
    <Section light={light} first={first}>
      <ProductTitle title={title} subtitle={subtitle} />
    </Section>
  );
};

export default ProductName;
