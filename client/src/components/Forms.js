import React from 'react'
import axios from 'axios';
import { Form, Field, withFormik, Formik } from 'formik'
import * as Yup from 'yup'

const Forms = ({errors, touched}) =>{
    // state = {
    //     username: '',
    //     password: ''
    // }
    // render()
    
    return(
        <div>
            <Form>
                <Field type="text" name="username" placeholder='Name Here' className='field' />
                {touched.name && errors.name && <p className='error'>{errors.name}</p>}

                <Field type="password" name="password" placeholder='Password Here' className='field' />
                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <button type="submit">Sign Up!</button>
            </Form>
        </div>
    )

}

const FormikForm = withFormik({
    mapPropsToValues({ username, password}){
      return {
        username: username || '',
        password: password || ''
      }
    },
  
    validationSchema: Yup.object().shape({
      username:Yup.string().required(),
      password: Yup.string().required(),
    }),
    
  //handleSubmit
    handleSubmit(values){
      console.log('yayy', values)
      axios.post('http://localhost:5000/api/register', values)
        .then(res => console.log(res))
        .catch(err=> console.log(err.response))
    }
  })(Forms)
  
  
    // console.log()
  
  export default FormikForm

