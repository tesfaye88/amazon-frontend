import React from "react";

import classes from './Footer.module.css'
import {Link} from 'react-router-dom'
// import ScrollUpButton from "react-scroll-up-button";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_backToTop}>
        {/* <ScrollUpButton /> */}
        Back to top
      </div>
      <div className={classes.footer_linkContainer}>
        <div className={classes.footer_links}>
          <h3 className={classes.footer_linksTitle}>Get to Know Us</h3>
          <Link  to="/">
          <p className={classes.footer_link}>About Us</p>
          <p className={classes.footer_link}>Careers</p>
          <p className={classes.footer_link}>Press Releases</p>
          <p className={classes.footer_link}>Amazon Cares</p>
          <p className={classes.footer_link}>Gift a Smile</p>
        
          </Link>
          
        </div>
        <div className={classes.footer_links}>
          <h3 className={classes.footer_linksTitle}>Connect with Us</h3>
          <Link to='/'>
          <p className={classes.footer_link}>Facebook</p>
          <p className={classes.footer_link}>Twitter</p>
          <p className={classes.footer_link}>Instagram</p>
          </Link>
        </div>
                  
        <div className={classes.footer_links}>
          <h3 className={classes.footer_linksTitle}>Make Money with Us</h3>
          <Link to='/'>
          <p className={classes.footer_link}>Sell on Amazon</p>
          <p className={classes.footer_link}>Sell under Amazon Accelerator</p>
          <p className={classes.footer_link}>Amazon Global Selling</p>
          <p className={classes.footer_link}>Become an Affiliate</p>
          <p className={classes.footer_link}>Amazon Pay on Merchants</p>
          <p className={classes.footer_link}>Advertise Your Products</p>
          </Link>
        </div>
        <div className={classes.footer_links}>
          <h3 className={classes.footer_linksTitle}>Let Us Help You</h3>
         <Link to='/'>
         <p className={classes.footer_link}>COVID-19 and Amazon</p>
          <p className={classes.footer_link}>Your Account</p>
          <p className={classes.footer_link}>Returns Centre</p>
          <p className={classes.footer_link}>100% Purchase Protection</p>
          <p className={classes.footer_link}>Amazon App Download</p>
          <p className={classes.footer_link}>Help</p>
         </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
