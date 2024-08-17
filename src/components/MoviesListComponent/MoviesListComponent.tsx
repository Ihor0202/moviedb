'use client'
import React, {useEffect, useState} from 'react';
import MoviesListCardComponent from "@/components/moviesListCardComponent/MoviesListCardComponent";
import {movieService} from "@/service/api.service";
import styles from "./MoviesList.module.css";
import {IMovie} from "@/model/IMovie";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";


// MoviesList (renders MoviesListCards)

const MoviesListComponent = () => {
    // const searchParams = useSearchParams();
    // const searchPage = parseInt(searchParams.get('page') || '1');
    //
    // const [page, setPage] = useState<number>(searchParams);
    // const [movies, setMovies] = useState<IMovies[]>([]);
    //
    // useEffect(() => {
    //
    //     const fetchMovies = async () => {
    //         const moviesData = await movieService.getAllMovies(page);
    //         setMovies(moviesData);
    //     };
    //     fetchMovies();
    //
    // }, [page]);
    //
    // const handleNextPage = () => {
    //     setPage(prevPage => prevPage + 1); // Збільшуємо номер сторінки на 1
    // };
    //
    // const handlePrevPage = () => {
    //     if (page > 1) {
    //         setPage(prevPage => prevPage - 1);
    //     }
    // };

    // чат GPT
    const searchParams = useSearchParams();
    const router = useRouter();

    // console.log(searchParams)
    // console.log('-------------')
    // console.log(router)

    const searchPage = parseInt(searchParams.get('page') || '1');

    const [max, setMax] = useState<number>();

    const [page, setPage] = useState<number>(searchPage);
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await movieService.getAllMovies(page);
            setMovies(moviesData.results);
            setMax(moviesData.total_pages)
        };
        fetchMovies();
    }, [page]);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
        router.push(`/movie?page=${page + 1}`);
    };
    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
            router.push(`/movie?page=${page - 1}`);
        }
    };

    return (
        <div>
            <div className={styles.moviesPage}>
                {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            </div>

            <div>


                <div
                    className={styles.paginationContainer}
                >
                    <button onClick={handlePrevPage} disabled={page === 1}>
                        Попередня
                    </button>

                    <p>Сторінка {page}</p>

                    <button onClick={handleNextPage} disabled={page === max}>
                        <Link href={{pathname: '/movie', query: {page: JSON.stringify(page)}}}>Наступна</Link>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MoviesListComponent;