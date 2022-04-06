import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useContext } from 'react';

import { IntlContext } from '../../../i18n/context';
import { TimelineImage } from '../../../components/Timeline/TimelineImage';
import { TimelineTitle } from '../../../components/Timeline/TimelineTitle';
import { LineBreak } from '../../../components/LineBreak';

export const ValoreAiVeterani: React.FC = () => {
  const { t } = useContext(IntlContext);

  return (
    <Container fluid>
      <TimelineImage
        alt="ValoreAiVeterani"
        image="/assets/logos/vav.png"
        height={100}
        width={250}
      />
      <TimelineTitle
        title="Non dolet APS - Valore ai veterani"
        subtitle="Head of development - Full stack developer (freelance no-profit)"
        link="https://valoreaiveterani.it/"
      />
      <Row className="mt-5">
        <Col>
          {t(
            'Worked for a non profit system as head of development of platform, for integration of veterans from the world of world',
          )}
          <LineBreak />
          <strong>Frontend:</strong>
          <Icon width={50} icon="vscode-icons:file-type-reactjs" />
          <Icon icon="akar-icons:redux-fill" />
          <Icon icon="logos:webhooks" />
          <LineBreak />
          <LineBreak />
          <strong>Backend:</strong>
          <Icon width={50} icon="akar-icons:php-fill" /> 7+
        </Col>
      </Row>
    </Container>
  );
};
