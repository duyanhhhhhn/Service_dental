import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
         axios.get('products').then(resp =>
        console.log(resp.data)
        // setProduct(resp.data))
         )
    },[])
    return (<>Product</>  );
}
 
export default Products;