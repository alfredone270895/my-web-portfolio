import { Container, Nav, Navbar } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher';
import React, { useContext, useState } from 'react';
import { IntlContext } from '../i18n/context';
import { Icon } from '@iconify/react';

export const HeaderMenu: React.FC = () => {
  const { t } = useContext(IntlContext);

  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <Container fluid>
      <Navbar.Brand href="/">4lFr3do D4ll4ri</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        {navIsOpen && <Icon icon="el:eye-close" />}
        {!navIsOpen && <Icon icon="el:eye-open" />}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/technology">{t('Technologies')}</Nav.Link>
          <Nav.Link href="/graduation">{t('Graduation')}</Nav.Link>
          <Nav.Link href="/job-experience">{t('Job experience')}</Nav.Link>
          <Nav.Link href="/contact">{t('Contact')}</Nav.Link>
        </Nav>
        <Nav>
          <LanguageSwitcher />
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
};
