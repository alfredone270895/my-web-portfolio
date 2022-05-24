import {
  Table,
  TableAttribute,
} from '../components/ClassDiagramTable/ClassDiagramTable';
import { capitalizeFirstLetter } from './string';

export const REACT_IMPORTS = (apiDir: string, apiFunction: string) => {
  return `import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from 'app/components/Form/Input';
import { SelectInput } from 'app/components/Form/SelectInput';
import { Checkbox } from 'app/components/Form/Checkbox';
import { ${apiFunction} } from 'api/${apiDir}/${apiFunction}';
import { InteractionContext } from 'context/interaction';`;
};

const switchInitialValues = (type: string) => {
  switch (type) {
    case 'character varying':
      return '';
    case 'text':
      return '';
    case 'boolean':
      return false;
    default:
      return undefined;
  }
};

const switchYup = (type: string, isNullable: boolean | undefined) => {
  switch (type) {
    case 'character varying':
      return `Yup.string()${
        !isNullable ? `.required('Campo obbligatorio')` : ''
      }`;
    case 'text':
      return `Yup.string()${
        !isNullable ? `.required('Campo obbligatorio')` : ''
      }`;
    case 'boolean':
      return `Yup.boolean()${
        !isNullable ? `.required('Campo obbligatorio')` : ''
      }`;
    case 'timestamp without time zone':
      return `Yup.date()${
        !isNullable ? `.required('Campo obbligatorio')` : ''
      }`;
    case 'date':
      return `Yup.date()${
        !isNullable ? `.required('Campo obbligatorio')` : ''
      }`;
    case 'datetime':
      return `Yup.date()${
        !isNullable ? `.required('Campo obbligatorio')` : ''
      }`;
    default:
      return `Yup.string()${
        !isNullable ? `.required('Campo obbligatorio')` : ''
      }`;
  }
};

const hasDefault = (
  defaultValue: string | boolean | null | undefined,
): boolean => {
  return !!(
    defaultValue !== 'false' &&
    defaultValue !== 'NULL::character varying' &&
    defaultValue
  );
};

export const REACT_BODY = (
  apiDir: string,
  apiFunction: string,
  table: Table,
  attributes?: TableAttribute[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  relatedTables?: Table,
) => {
  if (!attributes) {
    attributes = table.attributes;
  }

  const initialValues = Object.assign(
    {},
    ...attributes!.map((attribute) => {
      if (hasDefault(attribute.defaultValue)) {
        return;
      }

      return {
        [attribute.name]: switchInitialValues(attribute.type),
      };
    }),
  );

  const schema = Object.assign(
    {},
    ...attributes!.map((attribute) => {
      if (hasDefault(attribute.defaultValue)) {
        return;
      }
      return {
        [attribute.name]: switchYup(attribute.type, attribute.isNullable),
      };
    }),
  );

  // Start the body of react application
  return `\nconst initialValues = \n${JSON.stringify(
    initialValues,
  )};\nconst ${capitalizeFirstLetter(table.name)}${capitalizeFirstLetter(
    apiFunction,
  )}: React.FC = () => {

  const { setInteractionMessage } = useContext(InteractionContext);

  const ${capitalizeFirstLetter(table.name)}${capitalizeFirstLetter(
    apiFunction,
  )}Schema = Yup.object().shape(${JSON.stringify(schema).replace(/\"/g, '')});

  const onSubmit: (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>
  ) => void | Promise<any> = async (values) => {
    const result = await ${apiFunction}(values);
    if(result){
      setInteractionMessage({
        message: 'Action done correctly',
        type: 'success',
      })
    }
  };

  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col>
          <Card className="position-absolute top-50 start-50 w-50 translate-middle">
            <Card.Body>
              <Formik
                initialValues={initialValues}
                validationSchema={${table?.name}Schema}
                onSubmit={onSubmit}
              >
                {({
                  setFieldValue,
                  setFieldTouched,
                  values,
                  errors,
                  touched,
                }) => (
                  <Form>
                   ${attributes
                     ?.map((attribute) => {
                       if (hasDefault(attribute.defaultValue)) {
                         return;
                       }
                       if (attribute.isForeign) {
                         return `<SelectInput
                        name={${attribute.name}}
                        label={${attribute.name}}
                        options={levels}
                        value={values.${attribute.name}}
                        isValid={touched.${attribute.name} && !errors.${attribute.name}}
                         message={
                            touched.${attribute.name} && errors.${attribute.name} ? errors.${attribute.name} : undefined
                          }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                      />`;
                       }

                       if (attribute.type === 'boolean') {
                         return `<Checkbox
                        checked={values.${attribute.name}}
                        label={${attribute.name}}
                        type={'switch'}
                        name={${attribute.name}}
                        isValid={touched.${attribute.name} && !errors.${attribute.name}}
                        message={
                          touched.${attribute.name} && errors.${attribute.name} ? errors.${attribute.name} : undefined
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched} />`;
                       }

                       if (
                         attribute.type === 'integer' ||
                         attribute.type === 'character varying' ||
                         attribute.type === 'text'
                       ) {
                         return `<Input
                        value={values.${attribute.name}}
                        label={${attribute.name}}
                        type={${
                          attribute.type === 'integer' ? 'number' : 'text'
                        }}
                        name={${attribute.name}}
                        isValid={touched.${attribute.name} && !errors.${
                           attribute.name
                         }}
                        message={
                          touched.${attribute.name} && errors.${
                           attribute.name
                         } ? errors.${attribute.name} : undefined
                        }
                        onChange={setFieldValue}
                        onBlur={setFieldTouched} />`;
                       }
                     })
                     .join('\n')}
                    <Button className="float-end" color="primary" type="submit">
                      Save
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ${capitalizeFirstLetter(table.name)}${capitalizeFirstLetter(
    apiFunction,
  )};`;
};

export const API_SNIPPET = () => {};
