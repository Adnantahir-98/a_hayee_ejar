// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import TypesSlice from '@/app/store/app/propertyTypes/page'
import AreasSlice from '@/app/store/app/areas/page'
import FeaturesSlice from '@/app/store/app/features/page'

export const store = configureStore({
  reducer: {
    type:TypesSlice,
    areas:AreasSlice,
    features:FeaturesSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
