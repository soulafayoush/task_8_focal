// src/components/AuthForm.tsx
import React from 'react';
import './AuthForm.css';

interface AuthFormProps {
  title: string;
  subtitle: string;
  fields: { label: string; placeholder: string; type: string }[];
  buttonLabel: string;
  footerText: string;
  footerLinkText: string;
  footerLinkAction: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, subtitle, fields, buttonLabel, footerText, footerLinkText, footerLinkAction }) => {
  return (
    <div className="auth-form">
      <h1 className="auth-logo">focal<span style={{ color: 'orange' }}>X</span></h1>
      <h2 className="auth-title">{title}</h2>
      <p className="auth-subtitle">{subtitle}</p>
      <form className="auth-form-fields">
        {fields.map((field, index) => (
          <div key={index} className="form-group">
            <label>{field.label}</label>
            <input type={field.type} placeholder={field.placeholder} required />
          </div>
        ))}
        <button type="submit" className="auth-button">{buttonLabel}</button>
      </form>
      <p className="auth-footer">
        {footerText} <span onClick={footerLinkAction} className="auth-footer-link">{footerLinkText}</span>
      </p>
    </div>
  );
};

export default AuthForm;
