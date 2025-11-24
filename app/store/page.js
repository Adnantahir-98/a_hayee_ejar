// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import TypesSlice from '@/app/store/app/propertyTypes/page.js'
import AreasSlice from '@/app/store/app/areas/page.js'

export const store = configureStore({
  reducer: {
    TypesSlice,
    AreasSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
