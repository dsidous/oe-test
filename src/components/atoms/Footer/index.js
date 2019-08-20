import React from 'react';

import useStyle from './styles';

const Footer = () => {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      Octopus Energy Ltd is a company registered in England and Wales.
      <br />
      Registered number: 09263424. Registered office: 33 Holborn, London, EC1N
      2HT. Trading office: 20-24 Broadwick Street, London, W1F8HT
    </footer>
  );
};

export default Footer;
