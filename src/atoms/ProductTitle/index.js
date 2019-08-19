import React from 'react';
import { createUseStyles } from 'react-jss';

import { propTypes } from './props';

const useStyles = createUseStyles(theme => ({
  title: {
    color: '#fff',
    fontSize: '2rem',
    margin: 0,
    padding: 0,
  },
}));

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
