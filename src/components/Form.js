import { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'
const Form = () => {
  const [submiting, setSubmiting] = useState(false)


  function submitForm(e) {
    setSubmiting(true)
  }

  return (
    <div className='form-container'>
    <span className='close-btn'>x</span>
    <div className='form-content-left'>
      <img src='image/img-2.svg' className='form-img' />
      </div>
      {!submiting ? < FormSignup submitForm={submitForm} /> : <FormSuccess /> } 
    </div>
  )
}

export default Form