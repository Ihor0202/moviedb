import {IMovies} from "@/model/IMovies";


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
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const movieService = {
    getAllMovies: async (): Promise<IMovies[]> => {
        let response = await fetch('https://api.themoviedb.org/3/discover/movie', options)
            .then(res => res.json())
        return response.results

    }}

// export const getAllUsers = async (): Promise<IUser[]> => {
//     let response = await fetch('http://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//     return response
//
// }









// export const movieService = {
//     getAllMovies: async (): Promise<any> => {
//         let response = await fetch('https://api.themoviedb.org/3/discover/movie', options)
//             .then(res => res.json())
//         return response
//
// }}