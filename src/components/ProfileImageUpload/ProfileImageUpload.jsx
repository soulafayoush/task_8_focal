// components/ProfileImageUpload.js
import React from 'react';
import styled from 'styled-components';

const UploadArea = styled.div`
  position: relative;
  width: 324.68px;
  height: 17px;
  margin-top: 8px;
`;

const Input = styled.input`
  opacity: 0;
  cursor: pointer;
`;

const Preview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileImageUpload = ({ onImageChange }) => (
  <UploadArea>
    <Input
      type="file"
      accept="image/*"
      onChange={(e) => onImageChange(e.target.files[0])}
    />
    <Preview src="" alt="Profile Image" />
  </UploadArea>
);

export default ProfileImageUpload;
