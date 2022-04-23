import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';

import { Parsimpex } from './history/Parsimpex';
import { ValoreAiVeterani } from './history/ValoreAiVeterani';
import { Dils } from './history/Dils';
import { createDateRangeFormat } from '../../utils/date';

const JobExperience: React.FC = () => {
  return (
    <Fragment>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={createDateRangeFormat('2015-10-01', '2021-09-01')}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="bytesize:work" />}
        >
          <Parsimpex />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={createDateRangeFormat('2021-01-01')}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="bytesize:work" />}
        >
          <ValoreAiVeterani />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={createDateRangeFormat('2021-09-01')}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="bytesize:work" />}
        >
          <Dils />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  );
};

export default JobExperience;
