import {IMovie} from "@/model/IMovie";
import {IGenre} from "@/model/IGenre";
import {IMovieDetails} from "@/model/IMovieDetails";
import {IMovieGet} from "@/model/IMovieGet";


const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjE0ODc1MTRmZDA2NWY1NWE5N2ZmZTJjNjk2ZTg3NCIsIm5iZiI6MTcyMzU1NTcwNy40NTEyMjMsInN1YiI6IjY2YmI0NGY2ZDVjODY5MDU1ZGE1YzdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4HzQtNy-Kq6TB071Ym_bQzRvwmq6H0CuPlvcCLTC52M"
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + token
    }
};

 fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response =>
        // console.log(
        response
    // )
    )
    .catch(err =>
        // console.error(
            err
    // )
    );

export const movieService = {
    getAllMovies: async (page:number = 1): Promise<IMovieGet> => {
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, options)
            .then(res => res.json())
        console.log(response)
        console.log('=========')
        console.log(response.results)
        return response
    },
    getAllGenreMovie: async ( page: number = 1, with_genres: string ):Promise<IMovieGet> => {
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${with_genres}&page=${page}`, options)
            .then(res => res.json())
        console.log(response)
        return response
    },
    getMovieById: async (id: number): Promise<IMovieDetails> => {
    return await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        .then(res => res.json())

    },
    searchMovies: async (nameMovies: string, page:number = 1): Promise<IMovieGet> => {
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${nameMovies}&page=${page}`, options)
            .then(res => res.json())
        return response
    }
}

export const genreService = {
     getAllGenre: async (): Promise<IGenre[]> => {
    let response = await fetch('https://api.themoviedb.org/3/genre/movie/list', options)
        .then(res => res.json())
    return response.genres
}
// /discover/movie?with_genres=${with_genres}&page=${page}

}






