"use client";

import { useState } from "react";
import { Rating } from "../Rating/Rating";

export const RatingWithState = () => {
    const [rating, setRating] = useState<number>(3);
    return(<Rating rating={rating} isEditable setRating={setRating} />);
}
