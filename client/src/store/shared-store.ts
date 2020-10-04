import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../lib/models";
import { AppThunk } from "./app-thunk";

export interface SharedStore {
    searchText: string;
};

export const initialState: SharedStore = {
    searchText: ''
};

const slice = createSlice({
    name: 'shared',
    initialState,
    reducers: {
        setSearchText: (state: SharedStore, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        }
    }
});

export const { setSearchText } = slice.actions;

export const reducer = slice.reducer;

// thunk

// AppThunk interface should be updated and replaced with any
export const onSaveTrack = (track: Track): any => async (dispatch, store) => {
    let item = localStorage.getItem('favourites');

    if (item) {
        let tracks: Track[] = JSON.parse(item);
        if (!tracks.filter(x => x.id === track.id).length) {
            tracks.unshift(track);
            localStorage.setItem('favourites', JSON.stringify(tracks));
        }
    } else {
        localStorage.setItem('favourites', JSON.stringify([track]));
    }
}
