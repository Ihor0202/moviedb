'use client'
import React, {FC, useEffect, useState} from 'react';
import styles from "../../app/movie/[id]/movieById.module.css";
import {movieService} from "@/service/api.service";

// MovieInfo (contains label, description, badges)


type IProps = {
    id:number
}
// FC<MovieByIdProps>
const MovieInfoComponent: FC<IProps> = ({id}) => {
    // {params:id}: Params
    // let idMovie = id.id
    // const [movie, setMovie] = useState()
    const [movieById, setMovieById] = useState()
    console.log(movieById)
    useEffect(() => {
        const fetchMovie = async () => {
            let movie  = await movieService.getMovieById(id)
            if (!movie) {
                setMovieById(movie)

            }
        }
        fetchMovie()
    }, [id]);
    // let movieById  = await movieService.getMovieById(idMovie)

    return (
        <div className={styles.movieByIdContainer}>
            {/*<div className={styles.imgInfo}>*/}
            {/*    <div>*/}
            {/*        <img*/}
            {/*            className={styles.img}*/}
            {/*            src={baseUrlImg + movieById.poster_path}*/}
            {/*            alt={movieById.title}*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <h4>{movieById.title}</h4>*/}
            {/*        <h4>Popularity: {movieById.popularity}</h4>*/}
            {/*        <h4>Rating</h4>*/}
            {/*        <StarRatings*/}
            {/*            rating={(movieById.vote_average / 10) * 5}*/}
            {/*            starRatedColor="black"*/}
            {/*            starDimension="30px"*/}
            {/*            starSpacing="10px"*/}
            {/*            numberOfStars={5}*/}
            {/*        />*/}
            {/*        <h4>*/}
            {/*            Genres: {movieById.genres?.map((genre, i) => (*/}
            {/*            <span key={genre.id}>*/}
            {/*                    <Link href={`/genre/${genre.id}`}>*/}
            {/*                        {genre.name}*/}
            {/*                    </Link>*/}
            {/*                {i < movieById.genres.length - 1 && ', '}*/}
            {/*                </span>*/}
            {/*        ))}*/}
            {/*        </h4>*/}
            {/*        <h4>Release date: {movieById.release_date}</h4>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <p className={styles.p}>{movieById.overview}</p>*/}
            {/*</div>*/}
        </div>
    );
};

export default MovieInfoComponent;