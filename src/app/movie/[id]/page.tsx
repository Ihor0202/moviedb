'use client'
import React from 'react';
import {movieService} from "@/service/api.service";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import styles from "./movieById.module.css";
import {baseUrlImg} from "@/constants/url";
import Link from "next/link";
import StarRatings from "react-star-ratings";

const Page = async ({params:id}: Params) =>  {
    let idMovie = id.id


    let movieById  = await movieService.getMovieById(idMovie)


    return (
        <div className={styles.movieByIdContainer}>
            {/*<MovieInfoComponent/>*/}
            <div className={styles.imgInfo}>

                <div>
                    <img className={styles.img}
                         src={baseUrlImg + movieById.poster_path}
                         alt={movieById.title}

                    />
                </div>

                <div>
                    <h4>{movieById.title}</h4>
                    <h4>Popularity: {movieById.popularity}</h4>
                    <h4>
                        Rating
                    </h4>
                    <StarRatings
                        rating={(movieById.vote_average / 10) * 5}
                        starRatedColor="black"
                        starDimension="30px"
                        starSpacing="10px"
                        numberOfStars={5}
                    />
                    <h4>
                        Genres: {movieById.genres?.map((genre, i) => (
                            <span key={genre.id}>
                                <Link href={`/genre/${genre.id}`}>
                                    {genre.name}
                                </Link>
                                {i < movieById.genres.length - 1 && ', '}
                            </span>
                        ))}
                    </h4>
                    <h4>Release date: {movieById.release_date}</h4>
                </div>
            </div>

            <div>
                <p className={styles.p}>
                    {movieById.overview}
                </p>
            </div>

        </div>
    );
};

export default Page;