import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice';

export const store = configureStore({
    reducer:{
        todo: todoReducer //생성한 reducer를 Store에 등록
    }
});