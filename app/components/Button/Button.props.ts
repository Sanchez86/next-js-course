import { ButtonHTMLAttributes, DetailedHTMLProps, DetailsHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearance?: 'primary' | 'ghost';
    arrow?: boolean;
}