import { i18n, TFunction } from 'i18next';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher';

type HeaderMenuProps = {
  t: TFunction;
  i18n: i18n;
};

/**
 * Header menu of application
 * @param t translation function
 * @param i18n
 * @constructor
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
export const HeaderMenu: React.FC<HeaderMenuProps> = ({ t, i18n }) => {
  return (
    <Container fluid>
      <Navbar.Brand href="/">4lFr3do D4ll4ri</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/technology">{t('tecnologyUsed')}</Nav.Link>
          <Nav.Link href="/graduation">{t('graduation')}</Nav.Link>
          <Nav.Link href="/job-experience">{t('jobExperience')}</Nav.Link>
          <Nav.Link href="/contact">{t('contact')}</Nav.Link>
        </Nav>
        <Nav>
          <LanguageSwitcher t={t} i18n={i18n} />
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
};
