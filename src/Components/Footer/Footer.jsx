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
          <div className={classes.footer_link}>
          <ul  >
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Cares</li>
          <li >Gift a Smile</li>
          </ul>
          </div>
          
        
          </Link>
          
        </div>
        <div className={classes.footer_links}>
          <h3 className={classes.footer_linksTitle}>Connect with Us</h3>
          <Link to='/'>
         <div className={classes.footer_link}>
         <ul >
         <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
         </ul>
         </div>
          </Link>
        </div>
                  
        <div className={classes.footer_links}>
          <h3 className={classes.footer_linksTitle}>Make Money with Us</h3>
          <Link to='/'>
          <div className={classes.footer_link}>
          <ul >
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li >Amazon Global Selling</li>
          <li>Become an Affiliate</li>
          <li >Amazon Pay on Merchants</li>
          <li >Advertise Your Products</li>
          </ul>
          </div>
          </Link>
        </div>
        <div className={classes.footer_links}>
          <h3 className={classes.footer_linksTitle}>Let Us Help You</h3>
         <Link to='/'>
         <div className={classes.footer_link}>
         <ul  >
         <li >COVID-19 and Amazon</li>
          <li >Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Help</li>
         </ul>
         </div>
                  
         </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
