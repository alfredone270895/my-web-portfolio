import { Col, Row } from 'react-bootstrap';

type TimelineTitleProps = {
  title: string;
  subtitle: string;
  link: string;
};

/**
 * Timeline title for vertical timeline
 * @param title
 * @param subtitle
 * @param link
 * @constructor
 */
export const TimelineTitle: React.FC<TimelineTitleProps> = ({
  title,
  subtitle,
  link,
}) => {
  return (
    <Row>
      <Col>
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
        <a href={link}>{title}</a>
      </Col>
    </Row>
  );
};
