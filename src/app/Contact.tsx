import { Container } from 'react-bootstrap';
import Map from './map/index';
import { TFunction } from 'react-i18next';

type ContactProps = {
  t: TFunction;
};

/**
 * Contact map
 * @param t
 * @constructor
 */
export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <Container>
      <Map />
    </Container>
  );
};
