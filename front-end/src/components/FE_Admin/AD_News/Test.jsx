import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Test() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('products').then(resp => setProducts(resp.data));
    }, []);
  return (
    <>
        <h1>Test</h1>
        <div>
            {products.map((item, index) => (
            <div key={index}>
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <img src={item.thumbnail} alt="product" />
            </div>
            ))}
        </div>
    </>
  )
}

export default Test