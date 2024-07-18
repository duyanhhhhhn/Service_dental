import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
         axios.get('products').then(resp =>
        setProduct(resp.data))
    }, [])
    console.log(product)
    return (<div>
        {product?.map((item, index) => (
            <div key={index}>{item.name}</div>
        ))}
    </div>  );
}
 
export default Products;