import React from 'react';

import Section from '../../../atoms/Section';
import SectionTitle from '../../../atoms/SectionTitle';
import SpecTable from '../../../atoms/SpecTable';

const Specs = ({ title, data }) => {
  return (
    <Section>
      <SectionTitle title={title} />
      <SpecTable data={data} />
    </Section>
  );
};

export default Specs;
