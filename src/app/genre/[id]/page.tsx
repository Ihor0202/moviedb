'use client'
import React, {useEffect, useState} from 'react';
import {movieService} from "@/service/api.service";
import {useRouter, useSearchParams} from "next/navigation";
import {IMovie} from "@/model/IMovie";
import styles from "@/components/MoviesListComponent/MoviesList.module.css";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import MoviesListCardComponent from "@/components/moviesListCardComponent/MoviesListCardComponent";
import GenreBadgeComponent from "@/components/GenreBadgeComponent/GenreBadgeComponent";

const Page = ({params: id}: Params) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const genreId = id.id;
    // console.log(genreId)
    const searchPage = parseInt(searchParams.get('page') || '1' );

    const [totalPages, setTotalPages] = useState<number>()
    const [page, setPage] = useState<number>(searchPage);
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await movieService.getAllGenreMovie(page,genreId);
            setMovies(moviesData.results);
            setTotalPages(moviesData.total_pages)
        };
        fetchMovies();
    }, [page]);

    // Оновлюємо URL та номер сторінки
    const handleNextPage = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        router.push(`/genre/${genreId}?page=${nextPage}`);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            const prevPage = page - 1;
            setPage(prevPage);
            router.push(`/genre/${genreId}?page=${prevPage}`);
        }
    };

    return (
        <div>
            {/*<GenreBadgeComponent/>*/}
            <div className={styles.moviesPage}>
                {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            </div>

            <div className={styles.paginationContainer}>
                <button onClick={handlePrevPage} disabled={page === 1}>
                Попередня
                </button>

                <p>Сторінка {page}</p>

                <button onClick={handleNextPage} disabled={page === totalPages}>
                    Наступна
                </button>
            </div>
        </div>
    );
};

export default Page;