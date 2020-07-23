import * as yup from 'yup'

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is Required"),
  last_name: yup
    .string()
    .min(2, "Last Name must be at least 2 characters")
    .required("Last name is Required"),
  email: yup
    .string()
    .required("Email is required"),
  password: yup
  .string()
  .required('You need a password, not a mask!')
})

export default formSchema
