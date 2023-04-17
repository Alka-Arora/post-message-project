import React from 'react'

type btnProps={
    text:string,
    append:string
}
const Button = (props:btnProps) => {
    const {text,append}=props
  return (
    <div>
       <button type="submit" className={`btn btn-success ${append}`} >{text}</button>
    </div>
  )
}

export default Button
