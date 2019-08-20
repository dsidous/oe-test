import React from 'react';

import useStyles from './styles';

const Section = (props) => {
  const classes = useStyles(props);

  return (
    <section className={classes.section}>
      {props.children}
    </section>
  );
};

export default Section;
