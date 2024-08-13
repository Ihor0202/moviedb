import React, {FC} from 'react';
import {IMovies} from "@/model/IMovies";
import styles from "./moviesListCard.module.css";

// MoviesListCard (contain all movie information)

type IProps = {
    movie: IMovies
}
const MoviesListCardComponent:FC<IProps> = ({movie}) => {
    return (
        <div className={styles.cardList}>
            <div>
            <img
                // ref={movie.poster_path}
                 alt='movie.poster_path'/>
            <h4>
                {movie.id}: {movie.title}
            </h4>

            </div>


        </div>
    );
};

export default MoviesListCardComponent;