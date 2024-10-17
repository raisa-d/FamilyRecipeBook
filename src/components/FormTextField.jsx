import React from 'react'

const FormTextField = ({formName, placeholder, formLabel}) => {
  return (
    <div className="p-2 flex flex-col items-center">
        <label htmlFor={formName}>{formLabel}</label>
        <input 
          type="text" 
          name={formName} 
          id={formName} 
          placeholder={placeholder} 
          className="py-2 px-3 shadow-xl border-2 border-gray-400 rounded-2xl w-full" 
          required/>
    </div>
  )
}

export default FormTextField