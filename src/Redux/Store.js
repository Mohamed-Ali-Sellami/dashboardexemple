import { configureStore } from '@reduxjs/toolkit'
import ClientSlice from './ClientSlice'
import ProductSlice from './ProductSlice'


export const store = configureStore({
  reducer: {client:ClientSlice  , product:ProductSlice},
})