// src/components/EditProductForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './EditProductForm.css';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  // أضف المزيد من الحقول حسب الحاجة
}

interface EditProductFormProps {
  product: Product;
  onSubmit: (updatedProduct: Product) => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState<Product>({ ...product });
  const [imagePreview, setImagePreview] = useState<string>(product.image);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData(prev => ({
          ...prev,
          image: reader.result as string, // أو قم بتحميل الصورة إلى الخادم والحصول على الرابط
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="edit-product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Product Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <div className="image-preview">
          <img src={imagePreview} alt="Product Preview" />
        </div>
      </div>

      <button type="submit" className="submit-button">Save Changes</button>
    </form>
  );
};

export default EditProductForm;
