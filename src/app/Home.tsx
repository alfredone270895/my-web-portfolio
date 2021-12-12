import { Col, Container, Row } from 'react-bootstrap';
import TypeWriterEffect from 'typewriter-effect';

/**
 * Application home
 * @constructor
 */
export const Home: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        height: '100vh',
      }}
    >
      <Row
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          opacity: 1,
        }}
      >
        <Col lg={12}>
          <h2>
            <TypeWriterEffect
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hey there, I'm Alfredo 👽")
                  .pauseFor(100)
                  .deleteAll()
                  .typeString('Full stack software engineer 👨‍💻')
                  .pauseFor(100)
                  .deleteAll()
                  .typeString('Based in Milan 🌃')
                  .pauseFor(100)
                  .deleteAll()
                  .typeString('Appasionate by tech 🚀')
                  .pauseFor(100)
                  .deleteAll()
                  .typeString('Appasionate by sport 🏋')
                  .pauseFor(100)
                  .deleteAll()
                  .typeString('Appasionate by Nature and Life 🦁')
                  .deleteAll()
                  .typeString('<a href="/skills">Look at my skills</a>')
                  .pauseFor(6000)
                  .start();
              }}
            />
          </h2>
        </Col>
      </Row>
    </Container>
  );
};
