import React, {FC} from 'react';
import StarRatings from "react-star-ratings";
import {IMovie} from "@/model/IMovie";


type IProps = {
    movie: IMovie
}
const StarsRatingComponent: FC<IProps> = ({movie}) => {
    return (
        <div>
            <StarRatings
                rating={(movie.vote_average / 10) * 5}
                starRatedColor="black"
                starDimension="20px"
                starSpacing="10px"
                numberOfStars={5}
            />
        </div>
    );
};

export default StarsRatingComponent;
