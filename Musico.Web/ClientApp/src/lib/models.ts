export interface ArtistResult {
    artist: Artist;
}

export interface Track {
    id: string;
    name: string;
    album: Album;
    artists: Artist[];
}

export interface Album {
    id: string;
    name: string;
    genres: string[];
    images: Image[];
}

export interface Artist {
    id: string;
    name: string;
    genres: string[];
    images: Image[];
}

export interface Image {
    url: string;
    width: number;
    height: number;
}