import { Col, Container, Row } from 'react-bootstrap';
import TypeWriterEffect, { TypewriterClass } from 'typewriter-effect';
import { typeWriterEffectReload } from '../utils/typewriter';
import React, { useContext, useMemo } from 'react';
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

  return (
    <Container fluid className="vh-100">
      <Row className="position-absolute top-50 start-50 translate-middle text-opacity-25">
        <Col lg={12}>
          <h2>
            <TypeWriterEffect
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter: TypewriterClass): void =>
                typeWriterEffectReload(typewriter, TYPE_WRITER_STRINGS)
              }
            />
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
