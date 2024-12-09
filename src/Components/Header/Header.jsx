import React, { useContext } from 'react'
import classes from './Header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../Utility/firebase'
function Header() {
    const [{user, basket }, dispatch] = useContext(DataContext)
    console.log('at header ' ,basket)
    const totalItem = basket?.reduce((amount, item) => {
        return item.amount + amount
    }, 0)
    return (
        <section className={classes.fixed}>

            <section>
                <div className={classes.header_conatainer} >
                    {/* logo section */}
                    <div className={classes.logo_container}>
                        <Link to='/'>
                            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                        </Link>

                        <div className={classes.delivery}>
                            <span>
                                {/* icon */}
                                <SlLocationPin />

                            </span>
                            <div >
                                <p> Deliver to </p>
                                <span>Ethiopia</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.search}>
                        {/* searching  */}
                        <select name=" " id="">
                            <option value="">All</option>
                        </select>
                        <input type="text" placeholder='search product ' />
                        {/* icon */}
                        <BsSearch size={38} />
                    </div>
                    {/* right side link */}
                    <div className={classes.order_container}>

                        <Link to='/' className={classes.language}>
                            <img src="https://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png" />
                            <select name="" id="">
                                <option value="">EN</option>
                            </select>
                        </Link>

                        {/* three components */}
                        <Link to={!user && "/auth"} >
                            <div>
                                
                                {
                               
                                 user ? (
                                    <>
                                    <p>Hello {user?.email?.split("@")[0]}</p> 
                                    <span onClick={()=>auth.signOut()}>sign Out </span>
                                    </>
                                )
                                
                                :
                                ( 
                                   <>
                                    <p>Hello,sign In </p>
                                    <span>account & Lists</span>
                                    </>
                                )
                                   
                                
                                }
                                
                                
                            </div>
                        </Link>
                        {/* orders */}
                        <Link to='/orders' >
                            <div>
                                <p>Returns </p>
                                <span>& orders</span>
                            </div>
                        </Link>
                        <Link to='/cart' className={classes.cart}>
                            <div>
                                {/* icon */}
                                <BiCart size={35} />

                                <span>{totalItem}</span>
                            </div>
                        </Link>

                    </div>



                </div>
            </section >

            <LowerHeader />

        </section>

    )
}

export default Header

