import { Navbar } from 'react-bootstrap';

import { HeaderMenu } from './HeaderMenu';
import React, { useEffect } from 'react';
import { initializeHeadroom } from './utils/headroom';

export const Header: React.FC = () => {
  useEffect(() => {
    initializeHeadroom();
  }, []);

  return (
    <div id="site-header">
      <Navbar collapseOnSelect expand="lg">
        <HeaderMenu />
      </Navbar>
    </div>
  );
};
