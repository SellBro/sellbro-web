import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import { strings } from 'data';

import Input from './Input';
import Button from './Button';

import * as S from './styled';

const { validations } = strings;

const validationSchema = Yup.object().shape({
  name: Yup.string().required(validations.required),
  email: Yup.string().email(validations.invalidEmail).required(validations.required),
  message: Yup.string().required(validations.required),
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
