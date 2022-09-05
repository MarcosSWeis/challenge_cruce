import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { Role } from "../../interfaces/user";
import { User } from "../../models/User";
import Alert from "../../services/alert-service";
import { saveDB } from "../../services/created-db";
import { addUserInDb, getLastIdUsers, getUserByEmail } from "../../services/user-service";
interface FormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <div className="container-register-form">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <Form>
            <div className="form-outline mb-4">
              <Field type="text" name="name" id="name" className="form-control" placeholder="Nombre" />
              {touched.name && errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="form-outline mb-4">
              <Field type="text" name="lastName" id="lastName" className="form-control" placeholder="Apellido" />
              {touched.lastName && errors.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>
            <div className="form-outline mb-4">
              <Field type="email" name="email" id="email" className="form-control" placeholder="Email" />
              {touched.email && errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-outline mb-4">
              <Field type="password" name="password" id="password" className="form-control" placeholder="Contraseña" />
              {touched.password && errors.password && <div className="text-danger">{errors.password}</div>}
            </div>

            <div className="form-outline mb-4">
              <Field type="password" name="confirmPassword" id="confirmPassword" className="form-control" placeholder="Confirmar contraseña" />
              {touched.confirmPassword && errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Registrarme
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

interface RegisterFormProps {
  initialEmail?: string;
}
export const RegisterForm = withFormik<RegisterFormProps, FormValues>({
  validate: (values: FormValues, props: RegisterFormProps) => {
    let errors: FormikErrors<FormValues> = {};

    if (values.name.length === 0) {
      errors.name = "Email es requerido";
    } else if (values.name.length < 2) {
      errors.name = "El campo nombre debe tener al menos 2 caracteres";
    }

    if (!values.lastName) {
      errors.lastName = "Email es requerido";
    } else if (values.lastName.length < 2) {
      errors.lastName = "El campo nombre debe tener al menos 2 caracteres";
    }

    if (values.password.length === 0) {
      errors.password = "Contraseña es requerida";
    } else if (values.password.length < 8) {
      errors.password = "La contraseña debe poseer al menos 8 caracteres";
    }

    if (values.confirmPassword.length === 0) {
      errors.confirmPassword = "Contraseña es requerida";
    } else if (values.confirmPassword.length < 8) {
      errors.confirmPassword = "La contraseña debe poseer al menos 8 caracteres";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "La contraseña deben coincidir";
    }

    if (!values.email) {
      errors.email = "Email es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email no valido";
    }
    return errors;
  },

  handleSubmit: (values: FormValues, { props }) => {
    let verifyEmail = getUserByEmail(values.email);

    if (!verifyEmail) {
      const id = getLastIdUsers();
      let user = new User(id, values.name, values.lastName, values.email, values.password, [], Role.standard);
      user.setEncryptPassword(user.password);
      addUserInDb(user);
      saveDB();
      Alert.success({ title: "Registro", message: "El registro fue realizado exitosamente" });
    } else {
      Alert.error({ title: "Registro", message: "Error verifique los datos ingresados" }); //no se es explicito sobre que el email ya esta en la "base de datos"
    }
  },
})(InnerForm);
