import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';

/**
 * Graduation
  traslations
 * @constructor
 */
export const Graduation: React.FC = () => {
  return (
    <Fragment>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={`${new Intl.DateTimeFormat('it-IT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date('2021-01-01'))} - Actual`}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="emojione:graduation-cap" />}
        >
          <Row>
            <Col>
              <img
                src="/assets/logos/spinelli.jpeg"
                width={80}
                height={100}
                alt={'Università degli studi di milano'}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="vertical-timeline-element-title">
                ITIS Altiero spinelli
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Perito informatico
              </h4>
              <a href="https://www.iisaltierospinelli.it/">
                https://www.iisaltierospinelli.it/
              </a>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>High school diploma</Col>
          </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={`${new Intl.DateTimeFormat('it-IT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date('2021-01-01'))} - Actual`}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="emojione:graduation-cap" />}
        >
          <Row>
            <Col>
              <img
                src="/assets/logos/uni.png"
                width={100}
                height={100}
                alt={'Università degli studi di milano'}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="vertical-timeline-element-title">
                Università degli studi di milano
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor degree
              </h4>
              <a href="https://www.iisaltierospinelli.it/">
                https://www.unimi.it/it
              </a>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              I have 3 exams missing and I have done my best, working it was not
              possible for me to stay in progress, I think I will in the next
              months.
              <br />
              <br />
              <strong>Done exams:</strong>
              <br />
              Programming
              <br />
              Software engineering
              <br />
              Continuous mathematics
              <br />
              Mathematics of the discrete
              <br />
              Computers architectures |<br />
              Computers architectures ||
              <br />
              Informative system
              <br />
              Physics
              <br />
              Logic
              <br />
              Security in web and mobile system
              <br />
              Web and cloud applications
              <br />
              Algorithms and data structures
              <br />
              Databases
              <br />
              Operating system
              <br />
              Lingua inglese B1
              <br />
              Operative research
              <br />
              Formal languages and automata
              <br />
              <br />
              <strong>Missing exams:</strong>
              <br />
              Network and computers
              <br />
              Statistics
              <br />
              Cryptography
            </Col>
          </Row>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  );
};
