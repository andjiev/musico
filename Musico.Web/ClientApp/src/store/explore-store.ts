import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./app-thunk";

export interface ExploreStore {
    searchText: string;
};

export const initialState: ExploreStore = {
    searchText: ''
};

const slice = createSlice({
    name: 'explore',
    initialState,
    reducers: {
        setState: (state: ExploreStore, action: PayloadAction<any>) => {
            Object.assign(state, action.payload);
        },
        setSearchText: (state: ExploreStore, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        }
    }
});

export const { setState, setSearchText } = slice.actions;

export const reducer = slice.reducer;

// thunk

export const onPageInit = (): AppThunk => async (dispatch, store) => {
    // TODO

    console.log('On page init called');

    dispatch(setState({}));
}