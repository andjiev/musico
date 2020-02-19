export interface IElementProps {
    name: string;
    artist?: string;
    imageUrl?: string;
    previewClicked?: boolean;
    disablePreview?: boolean;
    showOpenAlbumButton?: boolean;
    buttonText: string;

    onPreviewClick?: () => void;
    onButtonClick?: () => void;
    onOpenAlbumClick?: () => void;
};