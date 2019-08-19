import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  title: {
    color: '#fff',
    fontSize: '1rem',
    lineHeight: 1.5,
    margin: 0,
    padding: 0,
  },
}));

const SectionCopy = ({ copy }) => {
  const classes = useStyles();

  return (
    <p className={classes.title}>
      {copy}
    </p>
  );
};

export default SectionCopy;
