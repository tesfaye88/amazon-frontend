
import { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './Product.module.css'
import ProductCard from './ProductCard'
import Loder from '../Loder/Loder'

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setIsLoading(false)
                setProducts(res.data);
            })
            .catch((err) => {
                setIsLoading(false)
                console.error('Error fetching products:', err);
            });
    }, []);

    return (
        <>
            {

            }
            {isLoading ? (<Loder />) : (
                <section className={classes.products_container}>

                    {
                        // products.length > 0 ? (
                        products.map((singleProduct,id) => (

                            <ProductCard key={singleProduct.id} product={singleProduct} renderAdd={true}  />
                        ))

                    }

                </section>)
            }


        </>

    );
}

export default Product;


