import { AppRoutes } from '../../routes';
import { TFunction } from 'i18next';

type BodyProps = {
  t: TFunction;
};

/**
 * Application body
 * @param t
 * @constructor
 */
export const Body: React.FC<BodyProps> = ({ t }) => {
  return <AppRoutes t={t} />;
};
