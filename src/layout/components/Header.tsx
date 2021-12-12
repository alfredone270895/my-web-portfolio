import { i18n, TFunction } from 'i18next';
import { Navbar } from 'react-bootstrap';
import Headroom from 'react-headroom';

import { HeaderMenu } from './HeaderMenu';

type HeaderProps = {
  t: TFunction;
  i18n: i18n;
};

/**
 * Header of application
 * @param t Translation function
 * @param i18n
 * @constructor
 */
// eslint-disable-next-line @typescript-eslint/no-shadow
export const Header: React.FC<HeaderProps> = ({ t, i18n }) => {
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
          <HeaderMenu t={t} i18n={i18n} />
        </Navbar>
      </Headroom>
    </>
  );
};
