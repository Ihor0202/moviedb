import React, {FC} from 'react';
import {IGenre} from "@/model/IGenre";
import styles from './GenreComponent.module.css'
import Link from "next/link";




type IProps = {
    genre: IGenre
}
const GenreComponent:FC<IProps> = ({genre}) => {


    return (
        <div className={styles.paragraph}>
            <p>
                <Link className={styles.link} href={{pathname:  `/genre/${genre.id}`,
                    query: {page: JSON.stringify(1)}
                }}>{genre.name}</Link>
            </p>
        </div>
    );
};

export default GenreComponent;