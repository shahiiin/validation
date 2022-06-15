import UseForm from "./UseForm"
import Validate from "./Validatenfo"
// import './Form.css'

const FormSignup = (submitForm) => {


  const { handleChange, values ,handleSubmit,errors} =
   UseForm(Validate,submitForm)



  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Get started with us today!create your
          acount by filing out the information below.</h1>
        <div className='form-input'>
          <lable htmlFor='username' className='form-label'>
            Username:
          </lable>
          <input
            id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p className='error'>{errors.username}</p>}
        </div>
        <div className='form-input'>
          <lable htmlFor='Email' className='form-label'>
            Email:
          </lable>
          <input
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='form-input'>
          <lable htmlFor='password' className='form-label'>
            Password:
          </lable>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className='form-input'>
          <lable htmlFor='password2' className='form-label'>
            Confirm Password:
          </lable>
          <input
            id='password2'
            type='password'
            name='password2'
            className='form-input'
            placeholder='Enter your password2'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p className='error'>{errors.password2}</p>}
        </div>
      
        <button
          className='form-input-btn'
          type='submit'
        >
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account?Login<a href='#'>here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignup