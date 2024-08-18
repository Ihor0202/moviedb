import React from 'react';
import styles from './userInfo.module.css'

// UserInfo (just hardcoded small circle and name)
const UserInfo = () => {
    return (
        <div className={styles.loginImg}>

            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFOV20q8g2EDRyKfVfHg3TRcK_eKo_V0Pew&s'} alt={'img'}/>

            <h5>Oros Ihor</h5>
        </div>
    );
};

export default UserInfo;