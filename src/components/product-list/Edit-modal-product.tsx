import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Alert from "../../services/alert-service";
import { DataEditProduct } from "./Product-list";
import { validateYup } from "../../helpers/helper";
import { Category } from "../../models/Category";
import { SubCategory } from "../../models/Sub-category";
import { CategorySelected, ErrrorImage, filesAcepted } from "../fom-create-product/From-create-product";
import { getAllCategories, getAllSubCategories } from "../../services/category-service";
import { QuotaProduct } from "../../interfaces/products";

interface EditModalProductProps {
  editFormData: DataEditProduct;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditFormSubmit: (values: DataEditProduct) => void;
}
const EditModalProduct: React.FunctionComponent<EditModalProductProps> = ({ editFormData, setShow, handleEditFormSubmit }) => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [subCategories, setSubCategories] = useState<Array<SubCategory>>([]);
  const [categorySelected, setCategorySelected] = useState<CategorySelected>({ value: "", status: false });
  const [validations, setValidations] = useState<ErrrorImage>({ error: false });
  const [loader, setLoader] = useState<boolean>(false);
  const [files, setFIles] = useState<FileList | null>(null);
  const inputFile = React.useRef<HTMLInputElement | null>(null);

  function handlerFiles(files: FileList | null): void {
    let errors: number = 0;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (!filesAcepted.includes(files[i].type)) {
          errors++;
        }
      }
    }
    if (errors !== 0) {
      setValidations({ error: true, errorText: `Formato no valido, los formatos validos son : ${filesAcepted.join(" ,")}` });
      errors = 0;
    } else {
      setValidations({ error: false });
      errors = 0;
    }
  }

  function getCategories(): void {
    setCategories(getAllCategories());
  }
  function getSubaterories(): void {
    setSubCategories(getAllSubCategories());
  }
  useEffect(() => {
    getCategories();
    getSubaterories();
  }, [files, loader]);

  const modelStyle = {
    backgroundColor: "rgba(0,0,0,0.3)",
    fontSize: "100%",
  };

  const validate = (values: DataEditProduct) => {
    let idsCategories: Array<number> = categories.map((cat) => cat.id);
    let errors: any = {};
    if (categorySelected.value === "") {
      errors.category = "Debe ingresar una categoria";
    } else if (!idsCategories.includes(Number(categorySelected.value))) {
      errors.category = "Debe ingresar una categoria valida";
    }

    if (validations.error) {
      //si es false queire decir que hay errores, lo niego y entra para setear el error
      errors.file = validations.errorText;
    }
    return errors;
  };

  return (
    <>
      <div className="modal show fade d-block" style={modelStyle}>
        <div className="modal-dialog modal-dialog-centered" role="document" style={{ width: "350px" }}>
          <div className="modal-content" id="modal-content-edit-users">
            <div className="modal-header">
              <h3 className="modal-title">Modificar datos de productos</h3>
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
                  title: editFormData.title,
                  price: editFormData.price,
                  discount: editFormData.discount,
                  description: editFormData.description,
                  categoryId: editFormData.categoryId,
                  subCategoryId: editFormData.subCategoryId,
                  images: editFormData.images,
                  quotas: editFormData.quotas,
                }}
                validationSchema={validateYup}
                validate={validate}
                onSubmit={(product) => {
                  Alert.confirm(
                    {
                      title: `Seguro deseas modificar la informacion del producto ${product.title}?`,
                      message: "",
                    },
                    () => {
                      handleEditFormSubmit(product);
                      Alert.success({ title: "Edicion", message: "El producto ha sido modificado" });
                    }
                  );
                }}
              >
                {(formik) => (
                  <Form className="">
                    <Field name="title" type="text" placeholder="titulo" id="title" className="form-control form-control-lg text-center" />
                    <ErrorMessage component="div" name="title" className="fs-5 pt-0 text-danger" />

                    <Field name="price" type="number" min={0} id="price" placeholder="precio" className="form-control form-control-lg text-center" />
                    <ErrorMessage component="div" name="price" className="fs-5 pt-0 text-danger" />

                    <div className="form-group mb-4">
                      <label htmlFor="discount">Descuento</label>
                      <Field
                        name="discount"
                        type="number"
                        id="discount"
                        min={0}
                        max={100}
                        placeholder="descuento"
                        defaultValue="0"
                        className="form-control form-control-lg text-center"
                      />
                      <ErrorMessage component="div" name="discount" className="fs-5 pt-0 text-danger" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="description">Descripción</label>
                      <Field as="textarea" placeholder="Descripción" id="description" name="description" className="form-control" />
                      <ErrorMessage component="div" name="description" className="fs-5 pt-0 text-danger" />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="category">Categorías</label>
                      <select
                        name="category"
                        id="category"
                        className="form-control"
                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                          setCategorySelected({ value: event.target.value, status: true });
                        }}
                      >
                        <option value="">Categorías</option>
                        {categories.map((category) => (
                          <option value={category.id}>{category.category}</option>
                        ))}
                      </select>
                      <ErrorMessage component="div" name="category" className="fs-5 pt-0 text-danger" />
                    </div>

                    {/* si el id de la categoria que selecciono pertenece a alguna de las sub categorias , devuelvos eseas subcategorias*/}
                    {subCategories
                      .filter((subCategory) => Number(categorySelected.value) === subCategory.categoryId)
                      .map((subcat) => subcat.id)
                      .includes(Number(categorySelected.value)) && (
                      <div className="form-group mb-4">
                        <label htmlFor="subCategory">SubCategorías</label>
                        <Field as="select" name="subCategory" id="subCategory" className="form-control">
                          <option value={""}>Seleccione un subcategoria</option>
                          {subCategories
                            .filter((subCategory) => Number(categorySelected.value) === subCategory.categoryId)
                            .map((subcategory) => (
                              <option value={subcategory.id}>{subcategory.subCategory}</option>
                            ))}
                        </Field>
                        <ErrorMessage component="div" name="subCategory" className="fs-5 pt-0 text-danger" />
                      </div>
                    )}

                    {/* no uso formik en el input de tipo file ya que formik no maneja la bien la subida de archivos */}
                    <div className="form-group mb-4">
                      <label htmlFor="file">Imagenes</label>
                      <input
                        type="file"
                        ref={inputFile}
                        id="file"
                        name="file"
                        multiple={true}
                        className="form-control"
                        onChange={(event) => {
                          handlerFiles(event.target.files);

                          setFIles(event.target.files);
                        }}
                      />
                      <ErrorMessage component="div" name="file" className="fs-5 pt-0 text-danger" />
                    </div>

                    <div className="form-group mb-4">
                      <label htmlFor="quotas">Cantida de cuotas</label>
                      <Field as="select" className="form-control" id="quotas" name="quotas">
                        <option value="">Elija la cantida de cueotas</option>
                        <option value={QuotaProduct.tres}>{QuotaProduct.tres}</option>
                        <option value={QuotaProduct.seis}>{QuotaProduct.seis}</option>
                        <option value={QuotaProduct.nueve}>{QuotaProduct.nueve}</option>
                        <option value={QuotaProduct.doce}>{QuotaProduct.doce}</option>
                      </Field>
                      <ErrorMessage component="div" name="quotas" className="fs-5 pt-0 text-danger" />
                    </div>

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

export default EditModalProduct;
