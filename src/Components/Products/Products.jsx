
import Product from "./Product/Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  // const allProducts = useLoaderData() || {};
  const [allProducts, setAllProducts] = useState([]);
  useEffect(()=> {
    axios.get("https://sports-master-server-hafizur27.vercel.app/products")
    .then(res => setAllProducts(res.data))
  }, [])

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-3">
      {allProducts?.map((product) => (
        <Product key={product?._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
