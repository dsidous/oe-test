import React from 'react';

import useStyles from './styles';

const SpecTable = ({ data }) => {
  const classes = useStyles();

  return (
    <ul className={classes.table}>
      {data.map(({ key, value }) => (
        <li className={classes.row} key={key}>
          <span className={classes.cat}>{key}</span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default SpecTable;
