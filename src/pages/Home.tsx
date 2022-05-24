import { Col, Container, Row } from 'react-bootstrap';
import { typeWriterEffectReload } from '../utils/typewriter';
import React, { useContext, useEffect, useMemo } from 'react';
import { IntlContext } from '../i18n/context';

const Home: React.FC = () => {
  const { t } = useContext(IntlContext);

  const TYPE_WRITER_STRINGS = useMemo(
    () => [
      `${t("Hey there, I'm Alfredo")} 👽`,
      `${t('Full stack software engineer')} ‍💻`,
      `${t('Based in Milan')}  🌃💻`,
      `${t('Appassionate by tech')} 🚀`,
      `${t('Appassionate by sport')} 🏋`,
      `${t('Appassionate by Nature and Life')} 🦁`,
    ],
    [t],
  );

  useEffect(() => {
    typeWriterEffectReload(TYPE_WRITER_STRINGS);
  }, []);

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
