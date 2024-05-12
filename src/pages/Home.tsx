import React from 'react';
import classes from './Home.module.css';
import Title from '../components/title/Title';
import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <div className={classes.background}>
        <Title />
        <Menu />
        <Footer />
    </div>
  )
}

export default Home