import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues {
    email: string;
    password: string;
}
interface OtherProps {
    message: string;
}
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
        <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <Form>

                    {/*  <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <Field type="email" name="email" className="form-control" placeholder='Email' />
                        {touched.email && errors.email &&
                            <div className='text-danger'>{errors.email}</div>
                        }
                    </div>
                    <div className="form-outline mb-4">
                        <Field type="password" name="password" className="form-control" placeholder='Contraseña' />
                        {touched.password && errors.password &&
                            <div className='text-danger'>{errors.password}</div>
                        }
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked placeholder='' />
                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            </div>
                        </div>
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                </Form>

            </div>
        </div >

    );

};


interface MyFormProps {
    initialEmail?: string;
    message: string;
}
export const MyForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },
    validate: (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {};
        if (values.password.length == 0) {
            errors.password = 'Contraseña es requerida';
        } else if (values.password.length < 8) {
            errors.password = 'La contraseña debe poseer al menos 8 caracteres';
        }

        if (!values.email) {
            errors.email = 'Email es requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Email no valido';
        }
        return errors;
    },

    handleSubmit: (values: FormValues) => {
        alert(`registrado con email: ${values.email} , password ${values.password}`)
    },

})(InnerForm);



