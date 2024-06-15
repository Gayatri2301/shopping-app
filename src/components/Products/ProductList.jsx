import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import './Products.css'
const ProductList = () => {
  const [products,setProduct] = useState([]);
  useEffect(
    ()=>{
      getProducts();
    },[products]
  )
  async function  getProducts() {
    const res = await fetch("https://fakestoreapi.com/products")

    const list = await res.json();
    setProduct(list);
    // console.log(list);
  }

if (products.length === 0){
  return(<h1>Fetching data</h1>)
}
  return (
      <>
      <div className='productList'>
        {products.map((p)=>
      <ProductCard
    {...p}
    key={p.id}
    ></ProductCard>)}
      </div>
      </>
  )
}

export default ProductList;
