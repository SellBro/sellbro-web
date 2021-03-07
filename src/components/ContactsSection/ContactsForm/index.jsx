import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import { strings } from 'data';

import Input from './Input';
import Button from './Button';

import * as S from './styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  message: Yup.string().required('Required'),
});

const ContactsForm = () => {
  return (
    <S.ContactsFormRoot>
      <Formik
        initialValues={strings.contacts.form.initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          alert(JSON.stringify(values));
        }}>
        {({ ...props }) => (
          <Form>
            {strings.contacts.form.inputs.map((item, i) => (
              <Input key={i} {...item} />
            ))}
            <Button onSubmit={props.handleSubmit} />
          </Form>
        )}
      </Formik>
    </S.ContactsFormRoot>
  );
};

export default ContactsForm;
