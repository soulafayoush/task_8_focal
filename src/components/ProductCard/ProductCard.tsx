// src/components/ProductCard.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  product: {
    id: string;
    image: string;
    name: string;
    // أضف المزيد من الحقول حسب الحاجة
  };
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  const [imgSrc, setImgSrc] = useState(product.image);
  const navigate = useNavigate();

  const handleImageError = () => {
    setImgSrc('/src/assets/images/image 1.png');
  };

  const handleEdit = () => {
    navigate(`/products/edit/${product.id}`);
  };

  return (
    <div className="product-card">
      <img src={imgSrc} alt={product.name} className="product-image" onError={handleImageError} />
      <div className="overlay">
        <p className="product-name">{product.name}</p>
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
