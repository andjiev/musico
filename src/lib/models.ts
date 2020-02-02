export interface SpotifyResult {
    data: Data;
}

export interface Data {
    track: Track;
}

export interface Track {
    name: string;
}