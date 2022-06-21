import { Table } from '../../components/ClassDiagramTable/ClassDiagramTable';
import { DIAGRAM_ROUTE } from './routes';
import { getApi } from '../api';

/**
 * Return the result of table models in database written with running write models on node-stack backend
 */
export async function getDiagrams(): Promise<Table[]> {
  return getApi<Table>(DIAGRAM_ROUTE);
}
