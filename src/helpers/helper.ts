import * as Yup from "yup";
export function getRandom(max: number): number {
  return Math.floor(Math.random() * max);
}

export const validateYup = Yup.object({
  title: Yup.string().required("Ingrese su titulo"),
  price: Yup.number().typeError("Debe ingresar un numero").required("Ingrese un precio").min(0),
  discount: Yup.number().typeError("Debe ingresar un numero").min(0),
  description: Yup.string()
    .required("Requiere una descripcion")
    .min(15)
    .typeError("debe tener al menos 15 caracteres")
    .max(800)
    .typeError("debe tener menos de 800 caracteres"),
  subCategory: Yup.string().required("El campo subcategoria es requerido"),
  quotas: Yup.string().required("El campo cuotas es requerido"),
});
