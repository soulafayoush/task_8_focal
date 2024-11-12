// src/store/productsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  // أضف المزيد من الحقول حسب الحاجة
}

interface ProductsState {
  products: Product[];
  currentProduct: Product | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  currentProduct: null,
  status: 'idle',
  error: null,
};

// Thunks
export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (productId: string) => {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  'products/update',
  async (updatedProduct: Product) => {
    const response = await axios.put(`/api/products/${updatedProduct.id}`, updatedProduct);
    return response.data;
  }
);

// Slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // أضف reducers إضافية إذا لزم الأمر
  },
  extraReducers: builder => {
    builder
      // جلب منتج بواسطة ID
      .addCase(fetchProductById.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.status = 'succeeded';
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch product';
      })
      // تحديث المنتج
      .addCase(updateProduct.pending, state => {
        state.status = 'loading';
      })
      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.status = 'succeeded';
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        state.currentProduct = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update product';
      });
  },
});

export const selectCurrentProduct = (state: { products: ProductsState }) => state.products.currentProduct;

export default productsSlice.reducer;



// إضافة thunk لجلب جميع المنتجات
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await axios.get('/api/products');
    return response.data;
  }
);


// Selector لجلب جميع المنتجات
export const selectAllProducts = (state: { products: ProductsState }) => state.products.products;

// ... باقي الكود كما هو
