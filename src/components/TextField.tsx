import React, { ClassAttributes, InputHTMLAttributes } from "react";
import { ErrorMessage, FieldHookConfig, useField } from "formik";

interface Props {
  icon: any;
  onClickIcon: () => void;
  label: string;
  placeholder: string;
  name: string;
  type: string;
}

const TextField = (
  props: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> & FieldHookConfig<string>,
  { icon, onClickIcon, label, placeholder, name, type }: Props
) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="input-group input-group-lg mt-3 mx-auto ">
        <label className="my-2" htmlFor={field.name}>
          {label}
        </label>

        <input
          style={{ padding: ".7rem", borderRadius: ".7rem", borderTopRightRadius: icon ? 0 : ".7rem", borderBottomRightRadius: icon ? 0 : ".7rem" }}
          className={`form-control fs-3 ${meta.touched && meta.error && "is-invalid"}`}
          aria-describedby="button-addon2"
          {...field}
          {...props}
          autoComplete="off"
          placeholder={placeholder}
        />
        {icon && (
          <button onClick={onClickIcon} className="btn btn-primary" type="button">
            <i className={icon + " fs-2 text-white"}></i>
          </button>
        )}
      </div>
      <ErrorMessage component="div" name={field.name} className="fs-5 pt-0 text-danger" />
    </>
  );
};

export default TextField;
