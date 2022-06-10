import React, { useState } from 'react';
import FormSuccess from '../components/FormSuccess';
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  
  return (
      <div>
        {!isSubmitted ? (
          <RegisterForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
  );
};

export default RegisterPage;