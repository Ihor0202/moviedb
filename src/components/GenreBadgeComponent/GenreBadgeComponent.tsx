import React, {FC} from 'react';
import {genreService} from "@/service/api.service";
import GenreComponent from "@/components/GenreBadgeComponent/GenreComponent";
import styles from './GenreComponent.module.css'


const GenreBadgeComponent = async () => {

    const genres = await genreService.getAllGenre();




    return (
        <div  className={styles.genreBox}>
            {genres.map(genre => <GenreComponent key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenreBadgeComponent;