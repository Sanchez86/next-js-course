import cn from "classnames";
import { PTagProps } from "./PTag.props";
import styles from './PTag.module.css';

export const PTag = ({size, children, className, ...props}: PTagProps) => {
    return (
        <p className={cn(className, {
            [styles.small]: size == 's',
            [styles.medium]: size == 'm',
            [styles.large]: size == 'l',
        })}
        {...props}
        >{children}</p>
    );
}