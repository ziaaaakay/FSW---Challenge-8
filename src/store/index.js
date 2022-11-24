// import { createStore } from "redux";
import {configureStore} from '@reduxjs/toolkit';

// import counterReducer from './counter'
// import authReducer from './auth'
import postReducer from './postSlice';


const store = configureStore({
  reducer: {
    post: postReducer,
  },
});


export default store;
