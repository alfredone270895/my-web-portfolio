import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormikHelpers } from 'formik/dist/types';
import { Input } from '../../components/Form/Input';

import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import {
  AuthenticationContext,
  AuthenticationContextType,
} from '../../api/auth/context';
import { InteractionContext } from '../../context/interaction';
import { setStorage } from '../../utils/local-storage';

const initialValues = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const { setInteractionMessage } = useContext(InteractionContext);

  const { setIsAuthenticated } = useContext<AuthenticationContextType>(
    AuthenticationContext,
  );

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Campo obbligatorio'),
    password: Yup.string().required('Campo obbligatorio'),
  });

  const onSubmit: (
    values: typeof initialValues,
    formikHelpers: FormikHelpers<typeof initialValues>,
  ) => void | Promise<any> = async (values) => {
    const result = await login(values.email, values.password);
    if (result) {
      setIsAuthenticated(true);
      setInteractionMessage({
        message: 'Welcome back',
        type: 'success',
      });
      setStorage('token', result.token);
      setStorage('jwt', result.jwt, result.expires_at);
      setStorage('refresh', result.refresh, Date.now() + 12 * 60 * 60 * 1000);
      navigate('/dashboard');
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
                validationSchema={LoginSchema}
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
                    <Input
                      value={values.email}
                      label="Email"
                      type="email"
                      name="email"
                      isValid={touched.email && !errors.email}
                      message={
                        touched.email && errors.email ? errors.email : undefined
                      }
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />

                    <Input
                      value={values.password}
                      label="Password"
                      type="password"
                      name="password"
                      isValid={touched.password && !errors.password}
                      message={
                        touched.password && errors.password
                          ? errors.password
                          : undefined
                      }
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />

                    <Button className="float-end" color="primary" type="submit">
                      Login
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

export default Login;
