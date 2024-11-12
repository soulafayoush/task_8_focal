// src/api/authApi.ts
import axios from 'axios';

// دالة للتسجيل
export const registerUser = async (userData: {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  profile_image: File | null;
}) => {
  const formData = new FormData();
  formData.append('first_name', userData.first_name);
  formData.append('last_name', userData.last_name);
  formData.append('user_name', userData.user_name);
  formData.append('email', userData.email);
  formData.append('password', userData.password);
  formData.append('password_confirmation', userData.password_confirmation);

  if (userData.profile_image) {
    formData.append('profile_image', userData.profile_image);
  }

  try {
    const response = await axios.post('https://test1.focal-x.com/api/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
