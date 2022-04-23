import { Navbar } from 'react-bootstrap';
import Headroom from 'react-headroom';

import { HeaderMenu } from './HeaderMenu';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <>
      <Headroom
        onPin={() => console.log('pinned')}
        onUnpin={() => console.log('unpinned')}
        style={{
          boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
        }}
      >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <HeaderMenu />
        </Navbar>
      </Headroom>
    </>
  );
};
