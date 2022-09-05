import React from "react";
import { User } from "../../models/User";
import Alert from "../../services/alert-service";
import { DataEditUser } from "./User-list";

interface UserRowProps {
  user: User;
  handleEditUser: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, user: User) => void;
  handleDelete: (id: number) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setEditFormData: React.Dispatch<React.SetStateAction<DataEditUser>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserRow: React.FunctionComponent<UserRowProps> = ({ user, handleEditUser, setShow, handleDelete, setEditFormData, setLoading }) => {
  return (
    <tr key={user.id}>
      <td className="text-center">{user.id}</td>
      <td className="text-center">{user.name}</td>
      <td className="text-center">{user.lastName}</td>
      <td className="text-center">{user.role}</td>
      <td className="text-center">{user.email}</td>
      <td className="text-center">
        <div className="d-flex d-flex justify-content-center ">
          <button
            onClick={(event) => {
              handleEditUser(event, user);
              setShow(true);
              setEditFormData(user);
            }}
            className="btn btn-light text-white mx-1 display-1 "
          >
            <i className="bi bi-pencil-fill h3"></i>
            Editar
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              Alert.confirm(
                {
                  title: "Alerta",
                  message: `Seguro deseas eliminar al usuario ${user.name} ${user.lastName}?`,
                },
                () => {
                  //simulo la asincronia
                  setLoading(true);
                  setTimeout(() => {
                    handleDelete(user.id);
                    Alert.success({ title: "El usuario ha sido eliminada", message: "" });
                  }, 1000 * 3);
                }
              );
            }}
            className="btn btn-primary text-white mx-1 display-1"
          >
            <i className="bi bi-trash3 h3"></i>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
