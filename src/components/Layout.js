import React from 'react';
import Header from './Header';
import Footer from './Footer';
import classes from "./Layout.module.scss";
const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <div className={classes.container}>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout
