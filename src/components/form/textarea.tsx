import React,{ForwardedRef, forwardRef} from 'react'

type inputProps={
    label: string,
   error:string|undefined,
   placeholder:string,
}
type InputRef = HTMLTextAreaElement;


const TextArea = forwardRef((props:inputProps,ref:ForwardedRef<InputRef>) => {
    const { label,error,placeholder,...rest} = props;
    return (
        <>
        <label>{label}</label>

        <textarea className="form-control"rows={3} placeholder={placeholder} ref={ref}{...rest}/>
      
      {error && <p className="text-danger">{error}</p>}
      </>
    );
  });
  TextArea.displayName="TextArea"
export default TextArea
