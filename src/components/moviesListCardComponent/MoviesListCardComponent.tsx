import React, {FC} from 'react';
import {IMovie} from "@/model/IMovie";
import styles from "./moviesListCard.module.css";
import {baseUrlImg} from "@/constants/url";
import Link from "next/link";
import StarRatings from "react-star-ratings";


// MoviesListCard (contain all movie information)
type IProps = {
    movie: IMovie
}
const MoviesListCardComponent:FC<IProps> = ({movie}) => {


    return (

        <div className={styles.cardList}>
            <div>
                <Link className={styles.link} href={{pathname:  `/movie/${movie.id}`,
                }}>
            <img className={styles.img}
                src={baseUrlImg+movie.poster_path}
                 alt='movie.poster_path'
                     // width={120}
                     height={200}
            />
                    <div>
                        <StarRatings
                            rating={(movie.vote_average / 10) * 5}
                            starRatedColor="black"
                            starDimension="20px"
                            starSpacing="10px"
                            numberOfStars={5}
                        />
                    </div>
            <h4>popularity: {movie.popularity}
                {movie.title}: {movie.release_date}
                <hr/>
            </h4>
                </Link>
            </div>

        </div>
    );
};






{/*<Image*/}
{/*    src={baseUrlImg + movie.poster_path}*/}
{/*    alt={movie.title}*/}
{/*    width={500}  // Ширина зображення в пікселях*/}
{/*    height={750} // Висота зображення в пікселях*/}
{/*/>*/}
export default MoviesListCardComponent;