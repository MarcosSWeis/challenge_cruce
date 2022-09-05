import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuotaProduct } from "../../interfaces/products";
import { Category } from "../../models/Category";
import { PaginateProduct } from "../../models/Paginate-product";
import { Product } from "../../models/Product";
import { SubCategory } from "../../models/Sub-category";
import { getCategoryById, getSubCategoryByText, getSubCategotyByIds } from "../../services/category-service";
import { saveDB } from "../../services/created-db";
import { getAllProductsPaginates, getProductById } from "../../services/db-service";
import { deleteProduct, getTableFilterProducts } from "../../services/product-service";
import Loader from "../loader/Loader";
import Paginator from "../Paginator";
import EditModalProduct from "./Edit-modal-product";
import ProductRow from "./Product-row";

interface ProductListProps {}
export interface DataEditProduct {
  id: number;
  title: string;
  price: number;
  discount: number;
  categoryId: number;
  subCategoryId: number;
  description: string;
  images: Array<string>;
  quotas: QuotaProduct;
}
const ProductList: React.FunctionComponent<ProductListProps> = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = Number(page);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<PaginateProduct>();
  const [sortByColumn, setSortByColumn] = useState<string>("id");
  const [sortDirection, setSortDirection] = useState("ASC");
  const [deletedProduct, setDeletedProduct] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<DataEditProduct>({
    id: 0,
    title: "",
    price: 0,
    discount: 0,
    categoryId: 0,
    subCategoryId: 0,
    description: "",
    images: [],
    quotas: 1,
  });
  const limit = 10;
  useEffect(() => {
    getData();
  }, [page, searchTerm, sortDirection, sortByColumn, deletedProduct, loading]);

  function getData() {
    setData(getAllProductsPaginates(limit, currentPage, getTableFilterProducts(sortByColumn, sortDirection)));
  }

  const handleEditProduct = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, product: Product) => {
    event.preventDefault();
    const formValues: DataEditProduct = {
      id: product.id,
      title: product.title,
      price: product.price.price,
      discount: product.price.discount,
      categoryId: product.category.id,
      subCategoryId: product.subCategory.id,
      description: product.description,
      images: product.images,
      quotas: product.quotas,
    };
    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (values: DataEditProduct) => {
    //values edited
    //envio la data a mi funcion para editar

    const editedProduct: DataEditProduct = {
      id: values.id,
      title: values.title,
      price: values.price,
      discount: values.discount,
      categoryId: values.categoryId,
      subCategoryId: values.subCategoryId,
      description: values.description,
      images: values.images,
      quotas: values.quotas,
    };
    let category: Category | undefined = getCategoryById(Number(values.categoryId));
    let subcategory: SubCategory | undefined = getSubCategotyByIds(Number(values.categoryId), Number(values.subCategoryId));

    const product = getProductById(values.id);
    if (product && category && subcategory) {
      product.setTitle(values.title);
      product.setPrice({ price: Number(values.price), discount: Number(values.discount) });
      product.setCategory(category);
      product.setSubCategory(subcategory);
      product.setImages(values.images);
      product.setDescription(values.description);
      product.quotas = values.quotas;
      saveDB();
    }
  };

  const handleDelete = (productId: number) => {
    setDeletedProduct(true);
    deleteProduct(productId);
    saveDB();
    setLoading(false);
  };

  const searchProductByEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="mx-5">
      {show && <EditModalProduct editFormData={editFormData} setShow={setShow} handleEditFormSubmit={handleEditFormSubmit} />}
      <div className="p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-sm mt-5 mb-4 text-gred"></div>
          <div className="col-sm-6  mt-5 mb-4" style={{ color: "black" }}>
            <h2 className="text-center">
              <b>Detalle de productos</b>
            </h2>
          </div>
          <div className="col-sm d-flex justify-content-center align-items-center ">
            <i className="bi bi-box-fill display-3 mx-2"></i>
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
                      setSortByColumn("title");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Titulo
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("price");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Precio
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("categoryId");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      ID categoria
                      {sortDirection === "ASC" ? <i className="bi bi-sort-numeric-down mx-2"></i> : <i className="bi bi-sort-numeric-up mx-2"></i>}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("category");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Categoría
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>

                  <th
                    onClick={() => {
                      setSortByColumn("subCategoryId");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      ID subcategoria
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("subCategory");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Subcategoria
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>
                  <th
                    onClick={() => {
                      setSortByColumn("quotas");
                      sortDirection == "DESC" ? setSortDirection("ASC") : setSortDirection("DESC");
                    }}
                  >
                    <div className="d-flex justify-content-center h2 my-auto" role="button">
                      Cuotas
                      {sortDirection === "ASC" ? <i className="bi bi-sort-alpha-down mx-2"></i> : <i className="bi bi-sort-alpha-up-alt mx-2"></i>}
                    </div>
                  </th>

                  <th className="text-center h2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.products.length > 0 &&
                  data.products.map((product) => (
                    <ProductRow
                      key={product.id}
                      product={product}
                      handleEditProduct={handleEditProduct}
                      handleDelete={handleDelete}
                      setShow={setShow}
                      setEditFormData={setEditFormData}
                      setLoading={setLoading}
                    />
                  ))}
              </tbody>
            </table>
            {data && data.products.length === 0 && <h1 className="text-center m-4">No hay usuarios existentes</h1>}
          </div>
        </div>
        <Paginator pageCount={data ? data.total_pages : 0} currentPage={currentPage} justify={"center"} />
      </div>
    </div>
  );
};
export default ProductList;
