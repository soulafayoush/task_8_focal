// src/pages/EditProductPage.tsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditProductForm from '../../components/EditProductForm/EditProductForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProductById, selectCurrentProduct, updateProduct } from '../../store/slices/productSlice';

const EditProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const product = useAppSelector(selectCurrentProduct);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  const handleSubmit = async (updatedProduct: any) => {
    await dispatch(updateProduct(updatedProduct));
    navigate('/products');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-product-page">
      <h2>Edit Product</h2>
      <EditProductForm product={product} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProductPage;
