import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from 'react-bootstrap';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IntlContext } from '../../i18n/context';
import { Icon } from '@iconify/react';
import {
  ClassDiagramTable,
  Table,
  TableAttribute,
} from '../../components/ClassDiagramTable/ClassDiagramTable';
import { getDiagrams } from '../../api/diagram';
import { REACT_BODY, REACT_IMPORTS } from '../../utils/generate-code';
import Editor from '@monaco-editor/react';

const ClassDiagram: React.FC = () => {
  const { t } = useContext(IntlContext);

  const [tables, setTables] = useState<Table[] | null>(null);

  const [selectedTable, setSelectedTable] = useState<Table | null>(null);

  const [selectedColumns, setSelectedColumns] = useState<
    TableAttribute[] | undefined
  >(undefined);

  const [showCode, setShowCode] = useState<false | string>(false);

  const createModelCode = useCallback(
    (func: 'create' | 'update') => {
      let reactCode = REACT_IMPORTS(selectedTable!.name, func);
      reactCode += REACT_BODY(
        selectedTable!.name,
        func,
        selectedTable!,
        selectedColumns,
      );
      setShowCode(reactCode);
    },
    [selectedTable],
  );

  useEffect(() => {
    const getTablesAsync = async () => {
      const diagramResult = await getDiagrams();
      setTables(diagramResult);
    };
    getTablesAsync();
  }, []);

  const editorRef = useRef<any>(null);
  const [file, setFile] = useState<'form' | 'api'>('form');

  useEffect(() => {
    editorRef.current?.focus();
  }, [showCode]);

  if (!tables) {
    return null;
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <h1>{t('Models diagram')}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item onClick={() => createModelCode('create')}>
              <Icon icon="ant-design:plus-circle-outlined" />
              {t('Create model code')}
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() => createModelCode('update')}
            >
              <Icon icon="ant-design:edit-outlined" />
              {t('Update model code')}
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      {!showCode && (
        <Row>
          {tables.map((table) => (
            <Col lg={6} className="mt-3" key={table.name}>
              <ClassDiagramTable
                table={table}
                selectedTable={selectedTable}
                onClickTable={() => {
                  setSelectedTable(table);
                }}
                setSelectedColumns={setSelectedColumns}
                selectedColumns={selectedColumns}
              />
            </Col>
          ))}
        </Row>
      )}
      {showCode && (
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Button
                  disabled={file === 'api'}
                  onClick={() => setFile('api')}
                >
                  FORM
                </Button>
                <Button
                  disabled={file === 'form'}
                  onClick={() => setFile('form')}
                >
                  API
                </Button>
              </Card.Header>
              <Card.Body>
                <Editor
                  height="80vh"
                  theme="vs-dark"
                  defaultLanguage={'javascript'}
                  defaultValue={showCode}
                  onMount={(editor) => (editorRef.current = editor)}
                />
              </Card.Body>
              <Card.Footer>
                <Button
                  className="float-end"
                  onClick={() => {
                    setSelectedTable(null);
                    setShowCode(false);
                  }}
                >
                  {' '}
                  <Icon icon="el:cancel" />
                  Cancel
                </Button>
                <Button className="float-end mr-2">
                  <Icon icon="el:save" /> Save form
                </Button>
                <Button className="float-end mr-2">
                  <Icon icon="el:save" /> Save api
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ClassDiagram;
