import { Container, Nav, Navbar } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher';
import React, { useContext, useState } from 'react';
import { IntlContext } from '../i18n/context';
import { Icon } from '@iconify/react';
import { checkIsActive } from '../utils/router';

export const HeaderMenu: React.FC = () => {
  const { t } = useContext(IntlContext);

  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <Container fluid>
      <Navbar.Brand href="/">ADS</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        {navIsOpen && <Icon icon="el:eye-close" />}
        {!navIsOpen && <Icon icon="el:eye-open" />}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            href="/technology"
            active={checkIsActive(window.location, '/technology')}
          >
            {t('Technologies')}
          </Nav.Link>
          <Nav.Link
            href="/graduation"
            active={checkIsActive(window.location, '/graduation')}
          >
            {t('Graduation')}
          </Nav.Link>
          <Nav.Link
            href="/job-experience"
            active={checkIsActive(window.location, '/job-experience')}
          >
            {t('Job experience')}
          </Nav.Link>
          <Nav.Link
            href="/contact"
            active={checkIsActive(window.location, '/contact')}
          >
            {t('Contact')}
          </Nav.Link>
        </Nav>
        <Nav>
          <LanguageSwitcher />
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
};
