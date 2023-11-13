import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { blogsReducer } from '../features/display/blogsSlice';
import logger from 'redux-logger';
import { usersReducer } from '../features/user/userSlice';



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogs: blogsReducer,
    user: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
