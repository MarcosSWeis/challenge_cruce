import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PaginatesUser } from "../../models/Paginate-user";
import { User } from "../../models/User";
import { saveDB } from "../../services/created-db";
import { deleteUser, getAllUserPaginates, getAllUsers, getTableFilterUser, getUserById, paginateUsers } from "../../services/user-service";
import Loader from "../loader/Loader";
import Paginator from "../Paginator";
import EditFormModal from "./EditModal";
import UserRow from "./User-row";

interface UserListProps {}
export interface DataEditUser {
  id: number;
  name: string;
  lastName: string;
  email: string;
  role: number;
}
const UserList: React.FunctionComponent<UserListProps> = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = Number(page);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<PaginatesUser>();
  const [sortByColumn, setSortByColumn] = useState<string>("id");
  const [sortDirection, setSortDirection] = useState("ASC");
  const [deletedUser, setDeletedUser] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<DataEditUser>({
    id: 0,
    name: "",
    lastName: "",
    email: "",
    role: 0,
  });
  const limit = 10;
  useEffect(() => {
    console.log("vuelvo a ejecutar");
    getData();
  }, [page, searchTerm, sortDirection, sortByColumn, deletedUser, loading]);

  function getData() {
    setData(paginateUsers(limit, currentPage, getTableFilterUser(sortByColumn, sortDirection)));
  }

  const handleEditUser = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, user: User) => {
    event.preventDefault();
    const formValues: DataEditUser = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (values: DataEditUser) => {
    //values edited
    /*     const editedUser: DataEditUser = {
      id: values.id,
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      role: values.role,
    }; */
    //envio la data a mi funcion para editar
    const user = getUserById(values.id);
    if (user) {
      user.setName(values.name);
      user.setLastName(values.lastName);
      user.setEmail(values.email);
      user.setRole(values.role);
      saveDB();
    }
  };

  const handleDelete = (userId: number) => {
    deleteUser(userId);
    saveDB();
    setDeletedUser(true);
    setLoading(false);
  };

  const searchUserByEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="mx-5">
      {show && <EditFormModal editFormData={editFormData} setShow={setShow} handleEditFormSubmit={handleEditFormSubmit} />}
      <div className="p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-sm mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar por email"
                  aria-label="Search"
                  onChange={(event) => {
                    navigate("/backoffice/userslist/1", { replace: true });
                    searchUserByEmail(event);
                  }}
                />
              </form>
            </div>
          </div>
          <div className="col-sm-6  mt-5 mb-4" style={{ color: "black" }}>
            <h2 className="text-center">
              <b>Detalle de Ususarios</b>
            </h2>
          </div>
          <div className="col-sm d-flex justify-content-center align-items-center ">
            <i className="bi bi-people-fill display-3 mx-2"></i>
            <i className="bi bi-gear-fill display-3 mx-2"></i>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table  table-hover ">
              <thead>
                <tr>
                  <th
                    onClick={() => {
                      setSortByColumn("id");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      ID
                      {sortDirection === "ASC" ? (
                        <i className="bi bi-sort-numeric-down mx-2 my-auto"></i>
                      ) : (
                        <i className="bi bi-sort-numeric-up mx-2 my-auto"></i>
                      )}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("name");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Nombre
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("lastName");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Apellido
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("role");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Rol
                      {sortDirection === "ASC" ? <i className="bi bi-sort-numeric-down mx-2"></i> : <i className="bi bi-sort-numeric-up mx-2"></i>}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("email");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Email
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>
                  <th className="text-center h2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.users.length > 0 &&
                  data.users.map((user) => (
                    <UserRow
                      key={user.id}
                      user={user}
                      handleEditUser={handleEditUser}
                      handleDelete={handleDelete}
                      setShow={setShow}
                      setEditFormData={setEditFormData}
                      setLoading={setLoading}
                    />
                  ))}
              </tbody>
            </table>
            {data && data.users.length === 0 && <h1 className="text-center m-4">No hay usuarios existentes</h1>}
          </div>
        </div>
        <Paginator pageCount={data ? data.total_pages : 0} currentPage={currentPage} justify={"center"} />
      </div>
    </div>
  );
};
export default UserList;
