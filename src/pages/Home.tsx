import { Col, Container, Row } from 'react-bootstrap';
import TypeWriterEffect from 'typewriter-effect';
import { typeWriterEffectReload } from '../utils/typewriter';

const TYPE_WRITER_STRINGS = [
  "Hey there, I'm Alfredo 👽",
  'Full stack software engineer 👨‍💻',
  'Based in Milan 🌃',
  'Appasionate by tech 🚀',
  'Appasionate by sport 🏋',
  'Appasionate by Nature and Life 🦁',
];

/**
 * Application home
 * @constructor
 */
export const Home: React.FC = () => {
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
              onInit={(typewriter) =>
                typeWriterEffectReload(typewriter, TYPE_WRITER_STRINGS)
              }
            />
          </h2>
        </Col>
      </Row>
    </Container>
  );
};