export interface IElementProps {
    name: string;
    artist?: string;
    imageUrl?: string;
    buttonText: string;

    onButtonClick: () => void;
};