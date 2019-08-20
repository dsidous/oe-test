import React from 'react';
import { createUseStyles } from 'react-jss';

import { getImageUrl } from '../../../utils';

import ProductImage from '../../atoms/ProductImage';
import ProductName from '../../molecules/Product/Name';
import ProductPrice from '../../molecules/Product/Price';
import ProductDesc from '../../molecules/Product/Description';
import ProductSpecs from '../../molecules/Product/Specs';
import ProductPerf from '../../molecules/Product/Perf';

const useStyles = createUseStyles(theme => ({
  '@global body': {
    backgroundColor: theme.backgroundPrimary,
    fontFamily: theme.mainFont,
  },
}));

const ProductPage = ({
  id,
  image,
  title,
  subtitle,
  price,
  description,
  specs,
  performance,
  loading,
}) => {
  const classes = useStyles();
  const imgUrl = getImageUrl(image);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <ProductImage src={imgUrl} />
      <ProductName title={title} light first />
      <ProductPrice />
      <ProductDesc title="Description" copy={description} light />
      <ProductSpecs title="Specification" />
      <ProductPerf title="Performance" graph={performance} />
    </>
  );
};

export default ProductPage;
