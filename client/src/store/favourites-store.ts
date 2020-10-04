import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./app-thunk";

import { Track } from '../lib/models';

export interface FavouritesStore {
    tracks: Track[];
};

export const initialState: FavouritesStore = {
    tracks: []
};

const slice = createSlice({
    name: 'explore',
    initialState,
    reducers: {
        setTracks: (state: FavouritesStore, action: PayloadAction<Track[]>) => {
            state.tracks = action.payload;
        }
    }
});

export const { setTracks } = slice.actions;

export const reducer = slice.reducer;

// thunk

// AppThunk interface should be updated and replaced with any
export const onPageInit = (): any => async (dispatch, store) => {
    let item = localStorage.getItem('favourites');

    if (item) {
        let tracks: Track[] = JSON.parse(item);

        dispatch(setTracks(tracks));
    }
}

export const onDeleteTrack = (id: string): any => async (dispatch, store) => {
    let item = localStorage.getItem('favourites');
    let tracks: Track[] = JSON.parse(item!);
    let newTracks = tracks.filter(x => x.id !== id);

    localStorage.setItem('favourites', JSON.stringify(newTracks));

    dispatch(setTracks(newTracks));
}
