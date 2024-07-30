import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TabbarState {
    current: number;
}

// Define the initial state using that type
const initialState: TabbarState = {
    current: 0
};

export const tabbarSlice = createSlice({
    name: "tabbar",
    initialState,
    reducers: {
        setTabbar: (state, action: PayloadAction<number>) => {
            state.current = action.payload;
        }
    }
});

// 导出方法
export const { setTabbar } = tabbarSlice.actions;
export default tabbarSlice.reducer;