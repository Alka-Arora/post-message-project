import React, { ForwardedRef, forwardRef } from 'react'

type inputProps = {
  label: string,
  error: string | undefined,
  type: string,
  placeholder: string,
}
type InputRef = HTMLInputElement;


const FormInput = forwardRef((props: inputProps, ref: ForwardedRef<InputRef>) => {
  const { label, error, type, placeholder,...rest} = props;
  return (
    <>
      <label>{label}</label>

      <input className="mt-3  form-control" type={type} placeholder={placeholder} ref={ref}{...rest} />
      {error && <p className="text-danger">{error}</p>}
    </>
  );
});
FormInput.displayName = "FormInput";
export default FormInput
