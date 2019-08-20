import React from 'react';

import useStyles from './styles';

const SectionCopy = ({ copy }) => {
  const classes = useStyles();

  return (
    <p className={classes.title}>
      {copy}
    </p>
  );
};

export default SectionCopy;
