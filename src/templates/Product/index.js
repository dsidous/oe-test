import React from 'react';

const ProductPage = ({
  id,
  title,
  subtitle,
  price,
  description,
  specs,
}) => {
  return (
    <div>
      Product title: {title}
    </div>
  );
};

export default ProductPage;
