import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/slices/features/productSlice'
import cardReducer from '../redux/slices/CardFeatures/CardFeaturesSlice'
import addtoReducer from '../redux/slices/addtocard/AddtoCardFeatures'
export const store = configureStore({
  reducer: {
    product:productReducer,
    cardfeatures:cardReducer,
    addtocard:addtoReducer
  },
});