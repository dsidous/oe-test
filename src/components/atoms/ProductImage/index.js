import React from 'react';

import useStyles from './styles';

const ProductImage = ({ src }) => {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <img src={src} alt="" />
    </div>
  );
};

export default ProductImage;
