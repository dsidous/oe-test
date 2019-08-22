import React from 'react';

import useStyles from './styles';

const Button = (props) => {
  const classes = useStyles(props);
  const { value, color } = props;

  return (
    <button
      {...props}
      type="button"
      className={classes[`button${color}`]}
    >
      {value}
    </button>
  );
};

export default Button;
