import React from 'react';

import { propTypes } from './props';
import useStyles from './styles';

const ProductTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <h1 className={classes.title}>
      {title}
    </h1>
  );
};

export default ProductTitle;

ProductTitle.propTypes = propTypes;
