import { baseApi } from './endPoints/baseApi'

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
}
