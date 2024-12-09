// import { ClassNames } from '@emotion/react'
import React from 'react'
import classes from './Catagory.module.css'
import { Link } from 'react-router-dom'

function CatagoryCard({ data }) {
    // console.log(data)
    // destructure
    return (
       
        <div className={classes.catagory}>
            
                <Link to={`/category/${data?.name}`} >
                    <span>
                        <h2>{data?.title}</h2>
                    </span>
                    <img src={data?.image} alt='' />
                    <p>shop now</p>
                </Link>
                
                            
        </div>

    )
}

export default CatagoryCard
