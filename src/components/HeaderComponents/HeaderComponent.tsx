import React from 'react';
import Link from "next/link";
import styles from "./Header.module.css";

// import "./globals.css";



const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <div className={styles.Database}>
               <h3>The Movies Database</h3>
            </div>

            <div className={styles.homeContainer}>
                <h3><Link href={'/'}>Home</Link></h3>
                <h3><Link href={'/movie'}>Movie</Link></h3>
                <h3><Link href={'/genre'}>Genre</Link></h3>
                <h3><Link href={'/search'}>Search</Link></h3>
            </div>

            <div className={styles.theme}>
                <h3>Theme</h3>
            </div>
        </div>
    );
};

export default HeaderComponent;