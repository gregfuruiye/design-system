import React from 'react';

import { ContentSection, PageLayout, Subsection } from '../../layouts';

const topic = 'Develop';
const title = 'Start';

const Start = () => (
  <PageLayout title={title}>
    <ContentSection>
      <Subsection name={title} level={1} topic={topic} />
    </ContentSection>
  </PageLayout>
);

export default Start;
