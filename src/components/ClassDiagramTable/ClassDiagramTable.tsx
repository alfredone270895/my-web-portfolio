import React, { Dispatch, SetStateAction, useContext, useMemo } from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';
import { IntlContext } from '../../i18n/context';
import { Checkbox } from '../Form/Checkbox';

export type Table = {
  primaryKey: string;
  name: string;
  attributes: TableAttribute[];
  foreignRelations?: ForeignRelations[];
};

export type TableAttribute = {
  name: string;
  type: string;
  isForeign?: boolean;
  foreignTable?: string;
  foreignColumn?: string;
  defaultValue?: string | boolean | null;
  isNullable?: boolean;
  comment?: string;
  isComputed?: boolean;
  maxLength?: number;
};

export type ForeignRelations = {
  table: string;
  column: string;
};

type ClassDiagramTableProps = {
  table: Table;
  selectedTable: Table | null;
  onClickTable: () => void;
  setSelectedColumns: Dispatch<SetStateAction<TableAttribute[] | undefined>>;
  selectedColumns: TableAttribute[] | undefined;
};

export const ClassDiagramTable: React.FC<ClassDiagramTableProps> = ({
  table,
  selectedTable,
  onClickTable,
  setSelectedColumns,
  selectedColumns,
}) => {
  const { t } = useContext(IntlContext);
  const isSelected = useMemo<boolean>(
    () => selectedTable?.name === table.name,
    [selectedTable],
  );
  return (
    <BootstrapTable
      variant={isSelected ? 'primary' : 'default'}
      striped
      bordered
      hover
      onClick={onClickTable}
    >
      <thead>
        <tr>
          <th colSpan={3}>{table.name}</th>
        </tr>
        <tr>
          <th>{t('Column name')}</th>
          <th>{t('Type')}</th>
          <th>{t('Is nullable')}</th>
          <th>{t('Default')}</th>
        </tr>
      </thead>
      <tbody>
        {table.attributes.map((attribute) => (
          <tr>
            <td>
              <Checkbox
                onClick={(e) => {
                  // @ts-ignore
                  if (e.target.checked) {
                    setSelectedColumns([...(selectedColumns ?? []), attribute]);
                  } else {
                    setSelectedColumns(
                      selectedColumns?.filter(
                        (column) => column.name !== attribute.name,
                      ),
                    );
                  }
                }}
                checked={
                  (!selectedColumns && table.name === selectedTable?.name) ||
                  selectedColumns?.find(
                    (column) =>
                      column.name === attribute.name &&
                      table.name === selectedTable?.name,
                  ) !== undefined
                }
                name={attribute.name}
              />
              {attribute.name}
            </td>
            <td>{attribute.type}</td>
            <td>{attribute.isNullable ? 'Yes' : 'No'}</td>
            <td>{attribute.defaultValue}</td>
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};
