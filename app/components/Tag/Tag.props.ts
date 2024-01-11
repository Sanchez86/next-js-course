import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: 's' | 'm';
    color: 'red' | 'green' | 'gray' | 'black';
    children: ReactNode;
};
