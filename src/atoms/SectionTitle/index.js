import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  title: {
    color: '#fff',
    fontSize: '1.4rem',
    marginTop: 0,
    marginBottom: theme.spacing.unit * 2,
    padding: 0,
  },
}));

const SectionTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <h3 className={classes.title}>
      {title}
    </h3>
  );
};

export default SectionTitle;
