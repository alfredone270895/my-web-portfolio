import { Card, Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import ParticlesBg from 'particles-bg';
import React, { useContext } from 'react';
import { IntlContext } from '../i18n/context';

const Technology: React.FC = () => {
  const { t } = useContext(IntlContext);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <Icon icon="vscode-icons:file-type-php2" width={100} />{' '}
                {t('more than year work experience', {
                  year: '5',
                })}
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
                <Icon icon="logos:javascript" width={100} />{' '}
                {t('more than year work experience', {
                  year: '5',
                })}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:react" width={50} />{' '}
                {t('more than year work experience', {
                  year: '2',
                })}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:jquery" width={50} />{' '}
                {t('more than year work experience', {
                  year: '5',
                })}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:nodejs" width={50} />{' '}
                {t('more than year work experience', {
                  year: '2',
                })}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:typescript-icon" width={50} />{' '}
                {t('more than year work experience', {
                  year: '1',
                })}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:graphql" width={50} /> {t('Online courses')}
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
                <Icon icon="logos:docker-icon" width={100} />{' '}
                {t('more than year work experience', {
                  year: '2',
                })}
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
                <Icon icon="vscode-icons:file-type-mysql" width={100} />{' '}
                {t('more than year work experience', {
                  year: '5',
                })}
              </Card.Title>
              <Card.Title>
                <Icon icon="logos:mariadb" width={100} />{' '}
                {t('more than year work experience', {
                  year: '5',
                })}
              </Card.Title>
              <Card.Title>
                <Icon icon="logos:mongodb" width={100} /> {t('Online courses')}
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
                <Icon icon="line-md:github-twotone" width={100} />{' '}
                {t('more than year work experience', {
                  year: '4',
                })}
              </Card.Title>
              <Card.Title>
                <Icon icon="logos:bitbucket" /> {t('Bachelor experience')}
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
                react {t('Online courses')}
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
                <Icon icon="logos:aws-s3" width={50} />{' '}
                {t('more than year work experience', {
                  year: '1',
                })}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:aws-ec2" width={50} /> {t('Online courses')}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <Icon icon="logos:aws-lambda" width={50} />{' '}
                {t('Online courses')}
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
                <Icon icon="logos:java" width={100} />{' '}
                {t('Bachelor experience')}
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
                <Icon icon="logos:c" width={100} /> {t('Bachelor experience')}
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
                <Icon icon="logos:c-plusplus" width={100} />
                {t('High school diploma experience')}
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
                <Icon icon="logos:html-5" width={100} />
                {t('more than year work experience', {
                  year: '5',
                })}
              </Card.Title>
              <Card.Title>
                <Icon icon="logos:bootstrap" width={100} />{' '}
                {t('more than year work experience', {
                  year: '5',
                })}
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
                <Icon icon="logos:css-3" width={100} />{' '}
                {t('more than year work experience', {
                  year: '5',
                })}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ParticlesBg type="cobweb" bg={true} />
    </Container>
  );
};

export default Technology;
