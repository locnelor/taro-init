import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 导出state的样式
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;