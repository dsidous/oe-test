import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  image: {
    padding: {
      left: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
    '& img': {
      width: '100%',
    },
  },
}));

const ProductImage = ({ src }) => {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <img src={src} alt="" />
    </div>
  );
};

export default ProductImage;
