export interface IItemListProps {
    name: string;
    id: string;
    artist?: string;
    imageUrl?: string;
    previewClicked?: boolean;
    disablePreview?: boolean;
    buttonText: string;

    onPreviewClick: () => void;
    onButtonClick: () => void;
};