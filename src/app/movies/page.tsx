import React from 'react';
import {movieService} from "@/sirvice/api.service";
import {IMovies} from "@/model/IMovies";
import MoviesListCardComponent from "@/components/moviesListCardComponent/MoviesListCardComponent";
import styles from "./moviesPage.module.css";


const Page = async () => {

    // let movies = movieService.getAllMovies()
    // console.log(movies)

//     const fetchMovies = async () => {
//         try {
//             const movies = await movieService.getAllMovies();
//             console.log('Movies:', movies);
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//         }
//     };
//
// // Виклик функції
//     fetchMovies();


    const movies = await movieService.getAllMovies()

    return (
        <div className={styles.moviesPage}>
            {movies.map(movie => <MoviesListCardComponent movie={movie}/>)}
        </div>
    );
};

export default Page;