import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        conPassword: '',
        duplicate: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [check, setCheck] = useState();
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
          duplicate: check,
        });

      };
    
    const handleSubmit = e => {
        
        e.preventDefault();
        setErrors(validate(values));
            
        const auth = getAuth(); 
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;
            axios.post("http://localhost:8000/api/auth/signup", {
              "username": values.username,
              "name": values.name,
              "email": values.email,
              "password": values.password,
              "roles": ["user"]
          })
          }).catch((err) => setCheck(err.message))
          setIsSubmitting(true);
          console.log(values.duplicate)
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting && !check) {
            callback();
          }
        },
        [errors]
      );
      
    return {values, handleChange, handleSubmit, errors};
    
}

export default useForm;