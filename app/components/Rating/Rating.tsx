import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = ({isEditable = false, rating, setRating}: RatingProps) => {
    return (<div>
        <img src="star.svg" alt="star" />
    </div>)
};
