import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

import { useNavigate } from "react-router-dom";
import Alert from "../../services/alert-service";
import { Category } from "../../models/Category";
import { getAllCategories, getAllSubCategories, getCategoryById, getSubCategotyByIds } from "../../services/category-service";
import { SubCategory } from "../../models/Sub-category";
import { uploadImage } from "../../services/upload-images";
import { addProduct } from "../../services/db-service";
import { Product } from "../../models/Product";
import { QuotaProduct } from "../../interfaces/products";
import { saveDB } from "../../services/created-db";
import Loader from "../loader/Loader";
import { validateYup } from "../../helpers/helper";
interface InitialValues {
  title: string;
  price: string;
  discount: string;
  category: string;
  description: string;
  subCategory: string;
  file: string;
}
interface ErrrorImage {
  error: boolean;
  errorText?: string;
}
interface CategorySelected {
  value: string;
  status: boolean;
}
const FormProductCreate = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const [subCategories, setSubCategories] = useState<Array<SubCategory>>([]);
  const [categorySelected, setCategorySelected] = useState<CategorySelected>({ value: "", status: false });
  const [files, setFIles] = useState<FileList | null>(null);
  const [validations, setValidations] = useState<ErrrorImage>({ error: false });
  const inputFile = React.useRef<HTMLInputElement | null>(null);
  let filesAcepted: Array<string> = ["image/jpeg", "image/jpg", "image/svg", "image/png", "image/svg+xml"];

  function handlerFiles(files: FileList | null): void {
    console.log(files, "files");

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

  const validate = (values: InitialValues) => {
    let idsCategories: Array<number> = categories.map((cat) => cat.id);
    let errors: any = {};
    if (categorySelected.value === "") {
      errors.category = "Debe ingresar una categoria";
    } else if (!idsCategories.includes(Number(categorySelected.value))) {
      errors.category = "Debe ingresar una categoria valida";
    }
    console.log(validations.error, validations?.errorText);
    if (inputFile.current && inputFile.current.value === "") {
      console.log(inputFile.current.value, "ffafsfafa");
      errors.file = "El campo imagen es requerido";
    } else if (validations.error) {
      //si es false queire decir que hay errores, lo niego y entra para setear el error
      errors.file = validations.errorText;
    }
    return errors;
  };
  return (
    <>
      {!loader ? (
        <Formik
          initialValues={{
            title: "",
            price: "",
            discount: "0",
            category: "",
            description: "",
            subCategory: "",
            file: "",
            quotas: "",
          }}
          validateOnChange={true}
          validationSchema={validateYup}
          validate={validate}
          onSubmit={async (values, { resetForm }) => {
            //con el id de la categoria y el id de la sub categoria enceuntro la categoria a asignar del array de subcategorías
            console.log(Number(categorySelected.value), "Number(categorySelected.value)");
            console.log(Number(values.subCategory), " Number(values.subCategory)");

            let subCategory = getSubCategotyByIds(Number(categorySelected.value), Number(values.subCategory));
            const category = getCategoryById(Number(categorySelected.value));
            console.log(subCategory, "subCategory");
            console.log(category, "category");

            if (subCategory && files && category) {
              setLoader(true);
              let images: Array<string> = await uploadImage(files);
              console.log(images, "images");
              //el id puede ser cualquier numero ya que la db se encarga de buscar el ultimo (id + 1) de su array y asignarleo al nuevo producto
              const product = new Product(
                0,
                values.title,
                { price: Number(values.price), discount: Number(values.discount) },
                values.description,
                category,
                subCategory,
                Number(values.quotas),
                images
              );
              addProduct(product);
              saveDB();
              setLoader(false);
              Alert.success({ title: "Exitoso", message: "producto fue creado exitosamente" });
              navigate(`/producto/${product.id}`);
            }
          }}
        >
          {() => (
            <div className="ctn-from-create-product">
              <Form className="d-flex flex-column  mt-5 ">
                <div className="form-group mb-4 ">
                  <label htmlFor="title">Titulo</label>
                  <Field name="title" type="text" placeholder="titulo" id="title" className="form-control" />
                  <ErrorMessage component="div" name="title" className="fs-5 pt-0 text-danger" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="price">Precio</label>
                  <Field name="price" type="number" min={0} id="price" placeholder="precio" className="form-control" />
                  <ErrorMessage component="div" name="price" className="fs-5 pt-0 text-danger" />
                </div>
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
                    className="form-control"
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
                      console.log(event.target);
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
                      console.log(event.target.files);
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

                <button type="submit" style={{ borderRadius: ".7rem" }} className=" btn btn-primary w-100   text-white p-2 my-4 ">
                  Crar producto
                </button>
              </Form>
            </div>
          )}
        </Formik>
      ) : (
        <Loader height={100} width={100} className="container-loader" />
      )}
    </>
  );
};

export default FormProductCreate;
