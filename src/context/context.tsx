'use client'
import React, {ReactNode} from 'react';
import {createContext, useContext, useState} from "react";



// ThemeContext

type StoreType = {
    theme: string
    // change: () => void
    white: () => void
    black: () => void
}


let defaultValue1 = {
    theme: 'black',
    white: () => {},
    black: () => {}

};
let MyContext = createContext<StoreType>(defaultValue1);

export const useAppContext = ():StoreType => useContext(MyContext)




export const Context = ({ children }: { children:ReactNode }) => {

    const [color, setColor] = useState<string>('black')

    return (
        <div>
            <MyContext.Provider value={{
                theme: color,
                white: () => {
                    setColor( 'white')
                },
                black: () => {
                    setColor( 'black')

                }
            }}>
                {/*<HeaderComponent/>*/}
                {children}

            </MyContext.Provider>
        </div>
    );
};

export default Context;