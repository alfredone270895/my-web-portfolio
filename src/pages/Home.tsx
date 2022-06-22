import { Col, Container, Row } from 'react-bootstrap';
import { typeEffect } from '../hooks/type-effect';
import React, { useContext, useEffect } from 'react';
import { IntlContext } from '../i18n/context';
import { useTranslation } from 'react-i18next';

const typeWriterStrings = [
  "Hey there, I'm Alfredo",
  'Full stack software engineer',
  'Based in Milan',
  'Passionate by tech',
  'Passionate by sport',
  'Passionate by nature and life',
];

const Home: React.FC = () => {
  const { t } = useContext(IntlContext);
  const { i18n } = useTranslation();

  useEffect(() => {
    typeEffect(typeWriterStrings, 'type-text', t, i18n);
  }, [t]);

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
