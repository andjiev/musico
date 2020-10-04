export default interface IItemListProps {
    name: string;
    id: string;
    artist?: string;
    imageUrl?: string;
    previewClicked?: boolean;
    disablePreview?: boolean;
    buttonText: string;
    buttonClass: string;
    buttonIcon: string;

    onPreviewClick: () => void;
    onButtonClick: () => void;
};