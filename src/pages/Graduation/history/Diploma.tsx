import { Col, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { IntlContext } from '../../../i18n/context';
import { TimelineImage } from '../../../components/Timeline/TimelineImage';
import { TimelineTitle } from '../../../components/Timeline/TimelineTitle';

export const Diploma: React.FC = () => {
  const { t } = useContext(IntlContext);

  return (
    <>
      <TimelineImage
        image="/assets/logos/spinelli.jpeg"
        alt="ITIS Altiero spinelli"
        height={100}
        width={100}
      />
      <TimelineTitle
        title="ITIS Altiero spinelli Sesto san giovanni"
        subtitle="Perito informatico"
        link="https://www.iisaltierospinelli.it/"
      />
      <Row className="mt-5">
        <Col>{t('High school diploma')}</Col>
      </Row>
    </>
  );
};
