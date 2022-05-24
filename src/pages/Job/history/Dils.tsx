import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useContext } from 'react';

import { TimelineTitle } from '../../../components/Timeline/TimelineTitle';
import { LineBreak } from '../../../components/LineBreak';
import { IntlContext } from '../../../i18n/context';

export const Dils: React.FC = () => {
  const { t } = useContext(IntlContext);
  return (
    <Container fluid>
      <TimelineTitle
        title="Dils S.P.A"
        subtitle=" Full stack developer"
        link="https://gvaredilco-sigest.com/"
      />
      <Row className="mt-5">
        <Col>
          {t('Implementing and coding CRM application written in')}
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
          <LineBreak />
          <Icon icon="bi:wordpress" width={50} />{' '}
          {t('Site features and bug fixing using')}
          <Icon icon="logos:laravel" />
          <Icon icon="logos:vue" />
        </Col>
      </Row>
    </Container>
  );
};
