import { Card, Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import ParticlesBg from 'particles-bg';

export const Technology: React.FC = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="vscode-icons:file-type-php2" width={100} /> more
                than 5 year of experience
              </Card.Title>
              <ParticlesBg type="cobweb" bg={true} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 ">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="logos:javascript" width={100} /> more than 5 year of
                work experience
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:react" width={50} /> more than 2 year of work
                experience
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:jquery" width={50} /> more than 5 year of work
                experience
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:nodejs" width={50} /> more than 2 year of work
                experience
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:typescript-icon" width={50} /> more than 1
                work year of experience
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:graphql" width={50} /> Online courses
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="logos:docker-icon" width={100} /> 2 years experience
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="vscode-icons:file-type-mysql" width={100} /> more
                than 5 years of experience
              </Card.Title>
              <Card.Title>
                <Icon icon="logos:mariadb" width={100} /> more than 5 years of
                experience
              </Card.Title>
              <Card.Title>
                <Icon icon="logos:mongodb" width={100} /> Online courses
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="line-md:github-twotone" width={100} /> 4 years
                experience (bachelor and work)
              </Card.Title>
              <Card.Title>
                <Icon icon="logos:bitbucket" /> Bachelor experience
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="tabler:brand-react-native" width={50} /> Native
                react online courses
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="logos:aws" width={100} />
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:aws-s3" width={50} /> 1 year experience
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:aws-ec2" width={50} /> Online courses
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:aws-lambda" width={50} /> Online courses
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="logos:java" width={100} /> Bachelor experience
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="logos:c" width={100} /> Bachelor experience
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="logos:c-plusplus" width={100} /> High school diploma
                experience
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="logos:html-5" width={100} /> more than 5 year of
                work experience
              </Card.Title>
              <Card.Title>
                <Icon icon="logos:bootstrap" width={100} /> more than 5 year of
                work experience
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="logos:css-3" width={100} /> more than 5 year of work
                experience
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ParticlesBg type="cobweb" bg={true} />
    </Container>
  );
};
