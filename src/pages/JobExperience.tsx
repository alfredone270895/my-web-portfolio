import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';

/**
 * Job experience
  translations
 * @constructor
 */
export const JobExperience: React.FC = () => {
  return (
    <Fragment>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={`${new Intl.DateTimeFormat('it-IT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date('2015-10-01'))} - ${new Intl.DateTimeFormat(
            'it-IT',
            {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            },
          ).format(new Date('2021-09-01'))}`}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="bytesize:work" />}
        >
          <Row>
            <Col>
              <h3 className="vertical-timeline-element-title">
                Parsimpex s.r.l
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Head of development - Software engineer
              </h4>
              <a target="_blank" href="https://parsimpex.com/" rel="noreferrer">
                https://parsimpex.com/
              </a>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              I started as an intern in 2015 supported by an external company
              from lecco in the development of management software.
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              My initial figure was fixing bugs and implementing new features.
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              I was also in charge of fixing the emails of PCs with mail
              servers. After two years of work on the old management software we
              decided to rewrite it because of deprecated and malformated code
              structure. <br />
              The new system now contains many more features and has a better
              structure than the previous one.
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              I took care of studying, rewriting and redesigning the management
              system.
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              Designed several REST and SOAP api. <br />
              The database has more than 200 entities I have been in charge of
              managing the server install versions of apache.
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <p>
                Working on <Icon icon="logos:centos" width={50} /> WHM /{' '}
                <Icon icon="logos:cpanel" width={50} />, I know well{' '}
                <Icon icon="logos:linux-tux" width={50} />, environment and
                shell commands.
              </p>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Icon icon="bi:wordpress" width={50} /> sites maintenance.
              <br />
              (parsimpex.com, parsimpex.it, psxgroup.org, arianpeyk.com,
              psxintermodal.com)
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              Server management and system designer. <br />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              The programming languages used were:
              <br />
              <br />
              <strong>Backend</strong>:
              <Icon width={50} icon="akar-icons:php-fill" /> 7+
              <Icon icon="logos:mariadb" width={50} />{' '}
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
              Api done:
              <br />
              <a href="https://ipinfo.io">Ip info</a> (REST)
              <br />
              <a href="https://www.sp1.it">Sp1</a> (REST)
              <br />
              <a href="https://cloud.google.com/translate/?hl=it&utm_source=google&utm_medium=cpc&utm_campaign=emea-it-all-it-dr-bkws-all-all-trial-e-gcp-1010042&utm_content=text-ad-none-any-DEV_c-CRE_170511603325-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20AI%20%26%20ML%20~%20Cloud%20Translation%23v2-KWID_43700053287028084-aud-606988878214%3Akwd-14329410560-userloc_1008436&utm_term=KW_google%20translate%20api-NET_g-PLAC_&gclid=Cj0KCQiA2NaNBhDvARIsAEw55hjFEEKj85vgdQ00yyXhmrcx_hbCoW8r9-tWIuRD34F_L2-1xN45-CYaApU9EALw_wcB&gclsrc=aw.ds">
                Google translate
              </a>{' '}
              (REST)
              <br />
              <a href="https://developers.google.com/maps">
                Google maps api
              </a>{' '}
              Place
              (geocoder,marker,directions),DrawingManager(Circle,Polygon,Polyline)
              <br />
              <a href="https://developers.google.com/maps">Arvento </a> REST
              light sensors, SOAP gps sensors <br />
              <a href="https://wenda-it.com">Wenda </a> SOAP / REST <br />
              <a href="https://cloud.tzonedigital.cn">Tzone digital</a> REST /
              UDP
              <br />
              <a href="https://www.project44.com">Project 44</a> REST
              <br />
              <a href="https://chat-api.com/">Whatsapp API</a> REST
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              Moved on to developing another Ecommerce <br />
              The programming languages used were:
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <strong>Backend:</strong>
              <Icon width={50} icon="akar-icons:php-fill" /> 7+
              <br /> <strong>Frontend:</strong>
              <Icon width={50} icon="vscode-icons:file-type-reactjs" />
              <Icon icon="akar-icons:redux-fill" />
              <Icon icon="logos:webhooks" />
              <br />
              <br />
              API DONE:
              <br />
              <a href="https://github.com/amzn/selling-partner-api-docs">
                Amazon
              </a>{' '}
              REST/SOAP
              <br />
              <a href="https://www.ups.com/it/it/services/technology-integration/online-tools-shipping.page">
                Ups
              </a>{' '}
              REST
              <br />
              Started ebay.com
            </Col>
          </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={`${new Intl.DateTimeFormat('it-IT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date('2021-01-01'))} - Actual`}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="bytesize:work" />}
        >
          <Row>
            <Col>
              <img
                src="/assets/logos/vav.png"
                width={250}
                height={80}
                alt={'ValoreAiVeterani'}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="vertical-timeline-element-title">
                Non dolet APS - Valore ai veterani
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Head of development - Full stack developer (freelance no-profit)
              </h4>
              <a
                target="_blank"
                href="https://valoreaiveterani.it/"
                rel="noreferrer"
              >
                https://valoreaiveterani.it/
              </a>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              Worked for a non profit system as head of development of platform,
              for integration of veterans from the world of world.
              <br />
              <strong>Frontend:</strong>
              <Icon width={50} icon="vscode-icons:file-type-reactjs" />
              <Icon icon="akar-icons:redux-fill" />
              <Icon icon="logos:webhooks" />
              <br />
              <br />
              <strong>Backend:</strong>
              <Icon width={50} icon="akar-icons:php-fill" /> 7+
            </Col>
          </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{
            borderRight: '7px solid  #0f3d64',
            color: '#0f3d64',
          }}
          date={`${new Intl.DateTimeFormat('it-IT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(new Date('2021-09-01'))} - Actual`}
          iconStyle={{ background: '#ffffff', color: '#000000' }}
          icon={<Icon icon="bytesize:work" />}
        >
          <Row>
            <Col>
              <h3 className="vertical-timeline-element-title">Dils S.P.A</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Full stack developer
              </h4>
              <a target="_blank" href="https://dils.com/" rel="noreferrer">
                https://dils.com
              </a>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              Implementing and creating application written in
              <br />
              <br />
              <strong>Frontend:</strong>
              <Icon width={50} icon="vscode-icons:file-type-reactjs" />
              <Icon icon="logos:webhooks" />
              <Icon width={50} icon="cib:typescript" />
              <br />
              <br />
              <strong>Backend:</strong>
              <Icon width={50} icon="vscode-icons:file-type-node2" />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              CRM for internal usage, Continuous integration with{' '}
              <Icon icon="akar-icons:github-fill" /> and{' '}
              <Icon icon="logos:aws-ec2" /> using conventional commits and
              branches, <br />
              <Icon icon="bi:wordpress" width={50} /> site bug fixing using
              <Icon icon="logos:laravel" /> with sage and{' '}
              <Icon icon="logos:vue" />
            </Col>
          </Row>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  );
};
