import { Col, Container, Row } from 'react-bootstrap';

import Mapbox from '../components/Mapbox/index';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Mapbox />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
