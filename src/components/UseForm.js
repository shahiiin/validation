import { useState, useEffect } from "react"




const UseForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value

  })
   
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }
  useEffect(() => { 
    if (Object.keys(errors).length === 0 && isSubmitting) {
      alert("Success")
    }
  }
  , [errors])
  return { handleChange, values, handleSubmit,errors }
}
export default UseForm