import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { IntlContext } from '../../../i18n/context';
import { TimelineTitle } from '../../../components/Timeline/TimelineTitle';
import { LineBreak } from '../../../components/LineBreak';

export const Parsimpex: React.FC = () => {
  const { t } = useContext(IntlContext);

  return (
    <Container fluid>
      <TimelineTitle
        title="Parsimpex s.r.l"
        subtitle="Head of development - Software engineer"
        link="https://parsimpex.com/"
      />
      <Row className="mt-5">
        <Col>
          {t('I started as an intern in') +
            '<strong>2015</strong>' +
            t(
              'supported by an external company from lecco in the development of management software.',
            )}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          {t(
            'My initial figure was fixing bugs and implementing new features.' +
              'I was also in charge of fixing the emails of PCs with mail servers. ' +
              'After two years of work on the old management software we decided to ' +
              'rewrite it because of deprecated and malformated code structure.',
          )}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          {t(
            'I took care of studying, rewriting and redesigning the management system',
          )}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          {t('Designed several REST and SOAP api')} <LineBreak />
          {t('The database has more than 200 entities')}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          {t('Working on')} <Icon icon="logos:centos" width={50} /> WHM /
          <Icon icon="logos:cpanel" width={50} />, {t('I know well')}
          <Icon icon="logos:linux-tux" width={50} />,
          {t('environment and shell commands')}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Icon icon="bi:wordpress" width={50} /> {t('Sites maintenance')}
          <LineBreak />
          (parsimpex.com, parsimpex.it, psxgroup.org, arianpeyk.com,
          psxintermodal.com)
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          {t('Server management and system designer')}. <LineBreak />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          {t('The programming languages used were')}:
          <LineBreak numberOfLines={2} />
          <strong>Backend</strong>:
          <Icon width={50} icon="akar-icons:php-fill" /> 7+
          <Icon icon="logos:mariadb" width={50} />
          <Icon icon="cib:mysql" width={50} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <strong>Frontend</strong>:
          <Icon width={50} icon="akar-icons:html-fill" />
          <Icon width={50} icon="akar-icons:javascript-fill" />
          <Icon width={50} icon="akar-icons:jquery-fill" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          Api:
          <LineBreak />
          <a href="https://ipinfo.io">Ip info</a> (REST)
          <LineBreak />
          <a href="https://www.sp1.it">Sp1</a> (REST)
          <LineBreak />
          <a href="https://cloud.google.com/translate/?hl=it&utm_source=google&utm_medium=cpc&utm_campaign=emea-it-all-it-dr-bkws-all-all-trial-e-gcp-1010042&utm_content=text-ad-none-any-DEV_c-CRE_170511603325-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20AI%20%26%20ML%20~%20Cloud%20Translation%23v2-KWID_43700053287028084-aud-606988878214%3Akwd-14329410560-userloc_1008436&utm_term=KW_google%20translate%20api-NET_g-PLAC_&gclid=Cj0KCQiA2NaNBhDvARIsAEw55hjFEEKj85vgdQ00yyXhmrcx_hbCoW8r9-tWIuRD34F_L2-1xN45-CYaApU9EALw_wcB&gclsrc=aw.ds">
            Google translate
          </a>
          (REST)
          <LineBreak />
          <a href="https://developers.google.com/maps">Google maps api</a>
          Place
          (geocoder,marker,directions),DrawingManager(Circle,Polygon,Polyline)
          <LineBreak />
          <a href="https://developers.google.com/maps">Arvento </a> REST light
          sensors, SOAP gps sensors <LineBreak />
          <a href="https://wenda-it.com">Wenda </a> SOAP / REST <LineBreak />
          <a href="https://cloud.tzonedigital.cn">Tzone digital</a> REST / UDP
          <LineBreak />
          <a href="https://www.project44.com">Project 44</a> REST
          <LineBreak />
          <a href="https://chat-api.com/">Whatsapp API</a> REST
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          {t('Moved on to developing another Ecommerce')}
          {t('The programming languages used were')}:
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <strong>Backend:</strong>
          <Icon width={50} icon="akar-icons:php-fill" /> 7+
          <LineBreak />
          <strong>Frontend:</strong>
          <Icon width={50} icon="vscode-icons:file-type-reactjs" />
          <Icon icon="akar-icons:redux-fill" />
          <Icon icon="logos:webhooks" />
          <LineBreak />
          <LineBreak />
          API DONE:
          <LineBreak />
          <a href="https://github.com/amzn/selling-partner-api-docs">Amazon</a>
          REST/SOAP
          <LineBreak />
          <a href="https://www.ups.com/it/it/services/technology-integration/online-tools-shipping.page">
            Ups
          </a>
          REST
          <LineBreak />
          Started ebay.com
        </Col>
      </Row>
    </Container>
  );
};
