// src/pages/SignInPage.tsx
import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import { useNavigate } from 'react-router-dom';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  const handleFooterLinkAction = () => {
    navigate('/signup');
  };

  return (
    <AuthForm
      title="SIGN IN"
      subtitle="Enter your credentials to access your account"
      fields={[
        { label: 'Email', placeholder: 'Enter your email', type: 'email' },
        { label: 'Password', placeholder: 'Enter your password', type: 'password' },
      ]}
      buttonLabel="SIGN IN"
      footerText="Don’t have an account?"
      footerLinkText="Create one"
      footerLinkAction={handleFooterLinkAction}
    />
  );
};

export default SignInPage;
