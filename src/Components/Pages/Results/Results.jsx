import React, { useState, useEffect } from 'react';
import classes from './Results.module.css';
import Layout from '../../LayOut/LayOut';
import { useParams } from 'react-router-dom';
import { productUrl } from '../../../Api/endPoints';
import axios from 'axios';
import ProductCard from '../../Product/ProductCard';


function Results() {
  // const { image, title, id, rating, price } = productItem;
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { categoryName } = useParams(); // Get category name from the URL
  console.log(categoryName);

  useEffect(() => {
    // Fetch products for the given category
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res.data);
        setResult(res.data);
        isLoading(false)
      })
      .catch((err) => {
        isLoading(false)
        console.log(err);
      });
  }, [categoryName]); // Add categoryName as a dependency so it updates when it changes

  // console.log(result);

  return (
    <Layout>
      {
        isLoading?(<loader />):(<section>
          <h1 style={{ padding: '30px', color:'black'}}>Results</h1>
          <p style={{ padding: '30px',color:'black' }}>category/{categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {result?.map((product) => (
              <ProductCard key={product.id} product={product}
              renderAdd={true}
               />
            ))}
          </div>
        </section>)
      }
      
    </Layout>
  );
}

export default Results;
