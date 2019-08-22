import React from 'react';

import Fab from '../../atoms/Fab';
import useStyles from './styles';

const Counter = ({ count }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.label}>
        QTY
      </div>
      <Fab
        color="Primary"
        value="-"
        onClick={count.decrease}
      />
      <div className={classes.value}>
        {count.value}
      </div>
      <Fab
        color="Primary"
        value="+"
        onClick={count.increase}
      />
    </div>
  );
};

export default Counter;
