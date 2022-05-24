import axios from 'axios';
import { Table } from '../../components/ClassDiagramTable/ClassDiagramTable';
import { DIAGRAM_ROUTE } from './routes';

export async function getDiagrams(): Promise<Table[]> {
  const result = await axios.get<any, any>(DIAGRAM_ROUTE);
  return result.data.success;
}
