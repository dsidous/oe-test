import React from 'react';

import { propTypes } from './props';
import useStyles from './styles';

const ProductTitle = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>
        {title}
      </h1>
      <h3 className={classes.subtitle}>
        {subtitle}
      </h3>
    </>
  );
};

export default ProductTitle;

ProductTitle.propTypes = propTypes;
