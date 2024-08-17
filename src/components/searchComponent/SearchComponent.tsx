'use client'
import React, { useState} from 'react';
import {movieService} from "@/service/api.service";
import SearchForm from "@/components/searchComponent/searchForm";
import MoviesListCardComponent from "@/components/moviesListCardComponent/MoviesListCardComponent";
import styles from "@/components/MoviesListComponent/MoviesList.module.css";
import {IMovie} from "@/model/IMovie";
import {useRouter} from "next/navigation";
import Link from "next/link";


// const SearchComponent = () => {
//     const [searchResults, setSearchResults] = useState([]);
//     const [page, setPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//
//     const searchMoviesByName = async (nameMovies, pageNumber = 1) => {
//         let searchMovie = await movieService.searchMovies(nameMovies, pageNumber);
//         setSearchResults(searchMovie.results);
//         setTotalPages(searchMovie.total_pages);  // Оновлюємо загальну кількість сторінок
//     };
//
//     const handlePageChange = (newPage) => {
//         setPage(newPage);
//         searchMoviesByName('', newPage);  // Викликаємо пошук для нової сторінки
//     };
//
//     useEffect(() => {
//         // Виконуємо початковий пошук
//         searchMoviesByName('', page);
//     }, [page]);
//
//     return (
//         <div>
//             <SearchForm onSearch={(nameMovies) => searchMoviesByName(nameMovies, 1)} />
//             <div className={styles.moviesPage}>
//                 {searchResults.map(movie => (
//                     <MoviesListCardComponent key={movie.id} movie={movie}/>
//                 ))}
//             </div>
//             <PaginationSearchComponent page={page} maxPage={totalPages} onPageChange={handlePageChange} />
//         </div>
//     );
// };
//
// export default SearchComponent;









const SearchComponent = () => {
    const [searchResults, setSearchResults] = useState<IMovie[]>([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState<string>('');
    const router = useRouter();

    const [totalPages, setTotalPages] = useState<number>()


    const searchMoviesByName = async (nameMovies: string) => {
        setQuery(nameMovies);  // Зберігаємо пошуковий запит
        setPage(1);  // Скидаємо сторінку на 1
        let searchMovie = await movieService.searchMovies(nameMovies, 1);  // Запит для першої сторінки
        setSearchResults(searchMovie.results);
        await router.push(`/search?query=${nameMovies}&page=${page}`);
    };

    const handleNextPage = async () => {
        const newPage = page + 1;
        setPage(newPage);
        await router.push(`/search?query=${query}&page=${newPage}`);
        const searchMovie = await movieService.searchMovies(query, newPage);
        setSearchResults(searchMovie.results);
        setTotalPages(searchMovie.total_pages)
    };

    const handlePrevPage = async () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            await router.push(`/search?query=${query}&page=${newPage}`);
            const searchMovie = await movieService.searchMovies(query, newPage);
            setSearchResults(searchMovie.results);
        }
    };

    return (
        <div>
            <SearchForm onSearch={(nameMovies) => searchMoviesByName(nameMovies)} />
            <div className={styles.moviesPage}>
                {searchResults.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
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






// const SearchComponent = () => {
//     const [searchResults, setSearchResults] = useState<IMovie[]>([]);
//     const router = useRouter();
//     const [movie, setMovie] = useState<string>('');
//
//     const [page, setPage] = useState(1);
//
//     const searchMoviesByName = async (nameMovies) => {
//         let searchMovie = await movieService.searchMovies(nameMovies);
//         setSearchResults(searchMovie.results)
//         setMovie(nameMovies)
//         console.log('.')
//     };
//
//     const handleNextPage = () => {
//         setPage(prevPage => prevPage + 1);
//         router.push(`/search/movie?query=${movie}&page=${page}`);
//     };
//     const handlePrevPage = () => {
//         if (page > 1) {
//             setPage(prevPage => prevPage - 1);
//             router.push(`/search/movie?query=${movie}&page=${page}`);
//         }
//     };
//
//     return (
//         <div>
//             <SearchForm onSearch={searchMoviesByName}/>
//             <div className={styles.moviesPage}>
//                 {searchResults.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
//             </div>
//             <div
//                 className={styles.paginationContainer}
//             >
//                 <button onClick={handlePrevPage} disabled={page === 1}>
//                     Попередня
//                 </button>
//
//                 <p>Сторінка {page}</p>
//
//                 <button onClick={handleNextPage} disabled={page === 500}>
//                     <Link href={{pathname: `/search/movie?query=${movie}&page=${page}`, query: {page: JSON.stringify(page)}}}>
//                         Наступна
//                     </Link>
//                 </button>
//             </div>
//         </div>
//     );
// };


export default SearchComponent;