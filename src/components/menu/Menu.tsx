import React from 'react';
import classes from './Menue.module.css';

function Menu() {
  return (
    <div className={classes.menubox}>
        <input type='text' placeholder='Enter your name'></input>
        <div className={classes['btn-group']}>
            <button className={classes.startBtn}>Start</button>
            <button>Create private room</button>
        </div>
    </div>
  )
}

export default Menu