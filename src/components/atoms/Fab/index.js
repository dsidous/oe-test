import React from 'react';

import useStyles from './styles';

const Fab = (props) => {
  const classes = useStyles(props);
  const { value, color } = props;

  return (
    <button
      {...props}
      type="button"
      className={classes[`fab${color}`]}
    >
      {value}
    </button>
  );
};

export default Fab;
