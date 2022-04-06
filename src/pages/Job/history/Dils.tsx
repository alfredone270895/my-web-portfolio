import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';

import { TimelineTitle } from '../../../components/Timeline/TimelineTitle';
import { LineBreak } from '../../../components/LineBreak';

export const Dils: React.FC = () => {
  return (
    <Container fluid>
      <TimelineTitle
        title="Dils S.P.A"
        subtitle=" Full stack developer"
        link="https://gvaredilco-sigest.com/"
      />
      <Row className="mt-5">
        <Col>
          Implementing and creating application written in
          <LineBreak />
          <LineBreak />
          <strong>Frontend:</strong>
          <Icon width={50} icon="vscode-icons:file-type-reactjs" />
          <Icon icon="logos:webhooks" />
          <Icon width={50} icon="cib:typescript" />
          <LineBreak />
          <LineBreak />
          <strong>Backend:</strong>
          <Icon width={50} icon="vscode-icons:file-type-node2" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          CRM for internal usage, Continuous integration with
          <Icon icon="akar-icons:github-fill" /> and
          <Icon icon="logos:aws-ec2" /> using conventional commits and branches,{' '}
          <LineBreak />
          <Icon icon="bi:wordpress" width={50} /> site bug fixing using
          <Icon icon="logos:laravel" /> with sage and
          <Icon icon="logos:vue" />
        </Col>
      </Row>
    </Container>
  );
};
