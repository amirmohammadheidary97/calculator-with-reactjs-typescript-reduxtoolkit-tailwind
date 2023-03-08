import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import calculatorReducer from './calculator.slice';
//
export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store