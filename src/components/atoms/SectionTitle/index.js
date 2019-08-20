import React from 'react';

import useStyles from './styles';

const SectionTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <h3 className={classes.title}>
      {title}
    </h3>
  );
};

export default SectionTitle;
