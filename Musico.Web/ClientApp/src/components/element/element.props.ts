export interface IElementProps {
    name: string;
    artist?: string;
    imageUrl?: string;
    previewClicked?: boolean;
    disablePreview?: boolean;
    buttonText: string;

    onPreviewClick: () => void;
    onButtonClick: () => void;
};