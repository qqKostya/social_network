import React from 'react'
import { Formik, Form, Field } from 'formik';
import { FilterType } from '../../redux/users-reducer';

const usersSerchFormValidate = (values: any) => {
  const errors = {};
  return errors;
}

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

const UsersSerchForm: React.FC<PropsType> = (props) => {
  const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (setSabmitting: boolean) => void }) => {
    props.onFilterChanged(values)
  }

  return (
    <div><Formik
      initialValues={{ term: '' }}
      validate={usersSerchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik></div>
  )
}

export default UsersSerchForm