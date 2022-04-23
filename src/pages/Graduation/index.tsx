import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';

import { University } from './history/University';
import { Diploma } from './history/Diploma';
import { createDateRangeFormat } from '../../utils/date';

const Graduation: React.FC = () => {
  return (
    <Fragment>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={createDateRangeFormat('2010-09-10', '2015-06-01')}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="emojione:graduation-cap" />}
        >
          <Diploma />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={createDateRangeFormat('2016-09-10')}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="emojione:graduation-cap" />}
        >
          <University />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  );
};
export default Graduation;
