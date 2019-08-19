import React from 'react';

import Section from '../../../atoms/Section';
import SectionTitle from '../../../atoms/SectionTitle';
import { getImageUrl } from '../../../utils';

const Perf = ({ title, graph }) => {
  const graphImg = getImageUrl(graph);
  return (
    <Section>
      <SectionTitle title={title} />
      <img src={graphImg} alt="perf" style={{ width: '100%' }} />
    </Section>
  );
};

export default Perf;
