// src/utils/formValidator.ts
export const validateFormData = (formData: Record<string, string>): boolean => {
    const requiredFields = ['first_name', 'last_name', 'email', 'password', 'password_confirmation'];
    
    if (!requiredFields.every(field => field in formData)) {
      return false;
    }
  

    return true;
  };
  