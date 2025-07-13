import React, { useState } from 'react';
import classes from './App.module.scss';
import { Link } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Image from '@/assets/app-image.svg';
import About from '@/pages/about/About';

function TODO() {
  TODO2();
}

function TODO2() {
  throw new Error();
}



export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    TODO();
  }
  // setCount((prev) => prev + 1);

  // TODO('12435134');

  // if(__PLATFORM__ === 'desktop') {
  //   return (
  //     <div>ISDESKTOPPLATFORM</div>
  //   )
  // }

  // if(__PLATFORM__ === 'mobile') {
  //   return (
  //     <div>ISMOBILEPLATFORM</div>
  //   )
  // }

  // if(__ENV__ === 'development') {
  //   return (
  //     <div>ISDEVELOPMENTENV</div>
  //   )
  // }

  // if(__ENV__ === 'production') {
  //   return (
  //     <div>ISPRODUCTIONENV</div>
  //   )
  // }

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'PLATFORM'}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt="avatar" />
        <img width={100} height={100} src={avatarJpg} alt="avatar" />
      </div>
      <div>
        asdfsdertgerg
        EFASDFAS
        asfaregsegsgadsf
        <Image color={'darkgreen'} width={50} height={50} />
      </div>
      <Link to={`/about`}>About</Link>
      <br />
      <Link to={`/shops`}>Shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>Increment</span>
      </button>
      <About />
    </div>
  );
};

