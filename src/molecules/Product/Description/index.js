import React from 'react';

import Section from '../../../atoms/Section';
import SectionTitle from '../../../atoms/SectionTitle';
import SectionCopy from '../../../atoms/SectionCopy';

const Description = ({ title, copy, light }) => {
  return (
    <Section light={light}>
      <SectionTitle title={title} />
      <SectionCopy copy={copy} />
    </Section>
  );
};

export default Description;
