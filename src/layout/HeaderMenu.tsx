import { Container, Nav, Navbar } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher';
import { useContext } from 'react';
import { IntlContext } from '../i18n/context';

export const HeaderMenu: React.FC = () => {
  const { t } = useContext(IntlContext);

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
          <LanguageSwitcher />
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
};
