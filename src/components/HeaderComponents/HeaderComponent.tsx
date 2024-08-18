'use client'
import React from 'react';
import Link from "next/link";
import styles from "./Header.module.css";
import {useAppContext} from "@/context/context";
import UserInfo from "@/components/UserComponent/UserInfo";

// import "./globals.css";


const HeaderComponent = () => {
    let colorTheme = useAppContext()

    // console.log(colorTheme)
    return (
        <div className={styles.header}>
            <div
                // className={styles.Database}
            >
               <h3>The Movies Database</h3>
            </div>

            <div className={styles.homeContainer}>
                <h3><Link href={'/'}>Home</Link></h3>
                <h3><Link href={'/movie'}>Movie</Link></h3>
                <h3><Link href={'/genre'}>Genre</Link></h3>
                <h3><Link href={'/search'}>Search</Link></h3>
            </div>

            <div className={styles.theme}>
                <h3>Theme: {colorTheme.theme}</h3>
                <div>
                    <button className={styles.butWhite} onClick={colorTheme.white}>
                    </button>

                    <button className={styles.butBlack} onClick={colorTheme.black}
                    >
                    </button>
                </div>
            </div>
            <UserInfo/>
        </div>
    );
};

export default HeaderComponent;