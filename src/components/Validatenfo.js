export default function Validate(values) {
  let errors = {}

  if (!values.username.trim()) {
    errors.username = "Username is required"
  }
  if (!values.email) {
    errors.email = "Email address is invalid"
  }
  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters"
  }
  if (!values.password2) {
    errors.password2 = "Confirm Password is required"
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password must match"
  }
  return errors
}