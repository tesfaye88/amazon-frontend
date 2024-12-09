import React from 'react'
import { CatagoryInfos } from './CatagoryFulInfo'
import CatagoryCard from './CatagoryCard'
import classes from './Catagory.module.css'
function Catagory() {

  return (
    <section className={classes.catagory_container}>
      {
        CatagoryInfos.map((infos, index) => {
          return <CatagoryCard data={infos} key={infos.index} />
        })

      }

    </section>

  )
}

export default Catagory
