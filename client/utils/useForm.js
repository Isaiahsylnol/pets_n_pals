import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        conPassword: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };
    
    
    const handleSubmit = e => {
        
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        if(Object.keys(errors).length === 0) {
            
        const auth = getAuth(); 
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("userCredential: ", userCredential)
            console.log("user: ", user)
            axios.post("http://localhost:8000/api/auth/signup", {
              "username": values.username,
              "email": values.email,
              "password": values.password,
              "roles": ["user"]
          })
          })
          // .then(Router.push('/login'))
          .catch((err) => setErrors(err.message))
        }
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        [errors]
      );
      
    return {values, handleChange, handleSubmit, errors};
    
}

export default useForm;