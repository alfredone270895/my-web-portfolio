import { Col, Row } from 'react-bootstrap';
import React from 'react';

type TimelineImageProps = {
  image: string;
  alt: string;
  width: number;
  height: number;
};
/**
 * Timeline image
 * @param image
 * @param alt
 * @param width
 * @param height
 * @constructor
 */
export const TimelineImage: React.FC<TimelineImageProps> = ({
  image,
  alt,
  width,
  height,
}) => {
  return (
    <Row>
      <Col>
        <img src={image} width={width} height={height} alt={alt} />
      </Col>
    </Row>
  );
};
