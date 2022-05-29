import { Col, Container, Row } from 'react-bootstrap';
import { useTypeWriterEffectReload } from '../utils/useTypewriter';
import React from 'react';

const typeWriterStrings = [
  "Hey there, I'm Alfredo",
  'Full stack software engineer',
  'Based in Milan',
  'Passionate by tech',
  'Passionate by sport',
  'Passionate by nature and life',
];

const Home: React.FC = () => {
  useTypeWriterEffectReload(typeWriterStrings, 'type-text');

  return (
    <Container fluid className="vh-100">
      <Row className="position-absolute top-50 start-50 translate-middle text-opacity-25">
        <Col lg={12}>
          <h2 className="type-text" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
