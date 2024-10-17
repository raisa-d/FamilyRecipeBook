const FormTextArea = ({ formName, placeholder, formLabel }) => {
  return (
    <div className="p-2 flex flex-col text-center self-center w-full">
        <label htmlFor={formName}>{formLabel}</label>
        <textarea 
          name={formName} 
          id={formName} 
          rows="5" 
          type="textarea" 
          placeholder={placeholder} 
          className="py-2 px-3 shadow-xl border-2 border-gray-400 rounded-2xl" 
          required/>
    </div>
  )
}

export default FormTextArea