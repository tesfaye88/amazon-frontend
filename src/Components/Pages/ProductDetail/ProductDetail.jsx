import React from 'react'
import './ProductDetail.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { productUrl } from '../../../Api/endPoints'
import ProductCard from '../../Product/ProductCard'
import Loder from '../../Loder/Loder'
import Layout from '../../LayOut/LayOut'
function ProductDetail() {
  const [product, setproduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const{productId}=useParams()

  useEffect(() => {
    setIsLoading(true)

    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  
  }, [])
  return (
    <Layout>
      {isLoading?(<Loder />):(<ProductCard product={product} 
      flex={true}
      renderDes={true}
      renderAdd={true} 
      
      />)}
      
      
    </Layout>
  ) 
}

export default ProductDetail
