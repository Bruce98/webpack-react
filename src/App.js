import React from 'react';
import {hot} from 'react-hot-loader/root';
import style from'./app.scss';
import one_img from './assets/1.png';
import tow_img from './assets/2.png';


function App(){
    return(
        <div className={style.title}>
            hello reactdddddddd
            <img src={one_img} alt="" />
             <img src={tow_img} alt="" />
        </div>
    )
}

export default hot(App);