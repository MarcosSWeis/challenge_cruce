import React from "react";
import { Product } from "../../models/Product";
import { User } from "../../models/User";
import Alert from "../../services/alert-service";
import { DataEditProduct } from "./Product-list";

interface UserRowProps {
  product: Product;
  handleEditProduct: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: Product) => void;
  handleDelete: (id: number) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setEditFormData: React.Dispatch<React.SetStateAction<DataEditProduct>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductRow: React.FunctionComponent<UserRowProps> = ({ product, handleEditProduct, setShow, handleDelete, setEditFormData, setLoading }) => {
  return (
    <tr key={product.id}>
      <td className="text-center">{product.id}</td>
      <td className="text-center">{product.title}</td>
      <td className="text-center">{product.price.price}</td>
      <td className="text-center">{product.category.id}</td>
      <td className="text-center">{product.category.category}</td>
      <td className="text-center">{product.subCategory.id}</td>
      <td className="text-center">{product.subCategory.subCategory}</td>
      <td className="text-center">{product.quotas}</td>
      {/*     <td className="text-center">{product.}</td> */}
      <td className="text-center">
        <div className="d-flex d-flex justify-content-center ">
          <button
            onClick={(event) => {
              handleEditProduct(event, product);
              setShow(true);
              // setEditFormData(product);
            }}
            className="btn btn-light text-white mx-1 display-1 btn-edit-product "
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
                  message: `Seguro deseas eliminar al usuario ${product.title}?`,
                },
                () => {
                  //simulo la asincronia
                  setLoading(true);
                  setTimeout(() => {
                    handleDelete(product.id);
                    Alert.success({ title: "El usuario ha sido eliminada", message: "" });
                  }, 1000 * 3);
                }
              );
            }}
            className="btn btn-primary text-white mx-1 display-1 btn-delete-product"
          >
            <i className="bi bi-trash3 h3"></i>
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
