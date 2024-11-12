// src/pages/SignUpPage.tsx
import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import { useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFooterLinkAction = () => {
    navigate('/signin');
  };

  return (
    <AuthForm
      title="SIGN UP"
      subtitle="Fill in the following fields to create an account."
      fields={[
        { label: 'Name', placeholder: 'First Name', type: 'text' },
        { label: '', placeholder: 'Last Name', type: 'text' },
        { label: 'Email', placeholder: 'Enter your email', type: 'email' },
        { label: 'Password', placeholder: 'Enter password', type: 'password' },
        { label: '', placeholder: 'Re-enter your password', type: 'password' },
      ]}
      buttonLabel="SIGN UP"
      footerText="Do you have an account?"
      footerLinkText="Sign in"
      footerLinkAction={handleFooterLinkAction}
    />
  );
};

export default SignUpPage;
