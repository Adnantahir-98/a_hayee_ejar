// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
// ** Reducers
import TypesSlice from '@/app/store/app/propertyTypes/slice'
import AreasSlice from '@/app/store/app/areas/slice'
import FeaturesSlice from '@/app/store/app/features/slice'
import PropertyListingSlice from '@/app/store/app/propertyListing/slice'

export const store = configureStore({
  reducer: {
    type:TypesSlice,
    areas:AreasSlice,
    features:FeaturesSlice,
    propertyListing:PropertyListingSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
