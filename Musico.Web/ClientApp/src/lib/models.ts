export interface ArtistResult {
    tracks: Track[];
}

export interface Track {
    id: string;
    name: string;
    popularity: number;
    album: Album;
    artists: Artist[];
}

export interface Album {
    id: string;
    name: string;
    images: Image[];
}

export interface Artist {
    id: string;
    name: string;
}

export interface Image {
    url: string;
    width: number;
    height: number;
}
