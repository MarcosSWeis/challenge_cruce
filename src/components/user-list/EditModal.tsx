import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Alert from "../../services/alert-service";
import { DataEditUser } from "./User-list";

interface EditModalProps {
  editFormData: DataEditUser;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditFormSubmit: (values: DataEditUser) => void;
}
const EditFormModal: React.FunctionComponent<EditModalProps> = ({ editFormData, setShow, handleEditFormSubmit }) => {
  const modelStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
    fontSize: "100%",
  };

  const validate = Yup.object({
    name: Yup.string().min(2, "Debe tener al menos 2 caracteres").required("Campo requerido"),
    lastName: Yup.string().min(2, "Debe tener al menos 2 caracteres").required("Campo requerido"),
    email: Yup.string().email("Direccion de email invalida").required("Campo requerido"),
  });

  return (
    <>
      <div className="modal show fade d-block" style={modelStyle}>
        <div className="modal-dialog modal-dialog-centered" role="document" style={{ width: "350px" }}>
          <div className="modal-content" id="modal-content-edit-users">
            <div className="modal-header">
              <h3 className="modal-title">Modificar datos de usuario</h3>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setShow(false);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  id: editFormData.id,
                  name: editFormData.name,
                  lastName: editFormData.lastName,
                  email: editFormData.email,
                  role: editFormData.role,
                }}
                validationSchema={validate}
                onSubmit={(user) => {
                  Alert.confirm(
                    {
                      title: `Seguro deseas modificar la informacion del usuario ${user.name} ${user.lastName}?`,
                      message: "",
                    },
                    () => {
                      handleEditFormSubmit(user);
                      Alert.success({ title: "Edicion", message: "El usuario ha sido modificado" });
                    }
                  );
                }}
              >
                {(formik) => (
                  <Form>
                    <Field className="form-control form-control-lg text-center" placeholder="Nuevo Nombre..." name="name" />
                    <Field className=" form-control form-control-lg text-center" placeholder="Nuevo Apellido..." name="lastName" />
                    <Field name="role" component="select" className=" form-control form-control-lg text-center mb-4">
                      <option value={1}>Privilegios de adminitrador</option>
                      <option value={2}>Usuario normal</option>
                    </Field>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">
                        Guardar
                      </button>
                      <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                        Cancelar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditFormModal;
