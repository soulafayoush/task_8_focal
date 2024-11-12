import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import './Dashboard.css';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProducts, selectAllProducts } from '../../store/slices/productSlice';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("All Products:", products); // تحقق من وصول البيانات للمنتجات

  // حساب المنتجات الحالية بناءً على الترقيم
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  console.log("Current Products for display:", currentProducts); // تحقق من المنتجات المعروضة

  const handleDelete = (id: string) => {
    // تنفيذ حذف المنتج عبر Redux أو مباشرة هنا
    console.log("Deleting product with id:", id); // تحقق من تنفيذ عملية الحذف
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="products-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map(product => (
              <ProductCard key={product.id} product={product} onDelete={() => handleDelete(product.id)} />
            ))
          ) : (
            <p>No products found</p> // رسالة عند عدم وجود منتجات
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / productsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
