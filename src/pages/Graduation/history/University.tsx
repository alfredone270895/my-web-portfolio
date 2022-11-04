import { Col, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { IntlContext } from '../../../i18n/context';
import { TimelineImage } from '../../../components/Timeline/TimelineImage';
import { TimelineTitle } from '../../../components/Timeline/TimelineTitle';
import { LineBreak } from '../../../components/LineBreak';

export const University: React.FC = () => {
  const { t } = useContext(IntlContext);
  return (
    <>
      <TimelineImage
        image="/assets/logos/uni.png"
        alt="Università degli studi di Milano"
        height={100}
        width={120}
      />
      <TimelineTitle
        title="Università degli studi di milano"
        subtitle={t('Bachelor degree')}
        link="https://www.unimi.it/it"
      />
      <Row className="mt-5">
        <Col>
          {t(
            'I have 2 exams missing and I have done my best, with working full time was not possible for me to stay in progress, I will in the next months',
          )}
          .
          <LineBreak />
          <LineBreak />
          <strong>{t('Done exams')}</strong>
          <LineBreak />
          {t('Programming')}
          <LineBreak />
          {t('Software engineering')}
          <LineBreak />
          {t('Continuous mathematics')}
          <LineBreak />
          {t('Mathematics of the discrete')}
          <LineBreak />
          {t('Computers architectures |')}
          <LineBreak />
          {t('Computers architectures ||')}
          <LineBreak />
          {t('Informative system')}
          <LineBreak />
          {t('Physics')}
          <LineBreak />
          {t('Logic')}
          <LineBreak />
          {t('Security in web and mobile system')}
          <LineBreak />
          {t('Web and cloud applications')}
          <LineBreak />
          {t('Algorithms and data structures')}
          <LineBreak />
          {t('Databases')}
          <LineBreak />
          {t('Operating system')}
          <LineBreak />
          {t('Lingua inglese B1')}
          <LineBreak />
          {t('Operative research')}
          <LineBreak />
          {t('Formal languages and automata')}
          <LineBreak />
          {t('Network and computers')}
          <LineBreak />
          <strong>{t('Missing exams')}:</strong>
          <LineBreak />
          <LineBreak />
          {t('Statistics')}
          <LineBreak />
          {t('Cryptography')}
        </Col>
      </Row>
    </>
  );
};
