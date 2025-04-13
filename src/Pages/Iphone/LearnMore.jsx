// import React from 'react'

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router';

// function LearnMore() {

//      const [products, setProducts] = useState([]);

//     let {id} = useParams()

//     useEffect(() => { // Simulating API call
//     const fetchProduct = async () => {
//          const products = [
//             { id: "1", name: "iPhone 15", price: "$999" },
//             { id: "2", name: "MacBook Pro", price: "$1999" },
//             { id: "3", name: "iPad Air", price: "$599" }, ];
//             const selectedProduct = products.find((p) => p.id === Number
//             (id)); setProduct(selectedProduct); };
//             fetchProduct();
//         }, [id]);

//     if(!products ) return <h2>product not found</h2>
//   return (
//     <div>
//     <div className="Learnmore-page">
//   <section className="internal-page-wrapper">
//     <div className="container">
//       <div className="row justify-content-center text-center">
//         <div className="col-12 mt-5 pt-5">
//            <h1 className="font-weight-bold">
//             <b>IPhones</b> <br/>
//             The best for the brightness
//             </h1>
//     </div>
//       </div>

//       {products?.map((siproducts, i) => {
//           return (
//             <div className="row justify-content-center text-center ">
//               <div
//                 className="col-sm-12 col-md-6 pt-5 mt-5">
//                 <br />
//                 <br />
//                 <br />
//                 <br />

//                 <div key ={i}className="product-title fw-bold">
//                   <h1>
//                     <b>{siproducts.product_name}</b>
//                   </h1>
//                 </div>

//                 <div className="starting-price">{siproducts.starting_price}</div>

//                 <div className="price-range">{siproducts.price_range}</div>

//                 <div className="Product-brief-description">
//                   {siproducts.product_brief_description}
//                 </div>
//                 <div className="products-descrition">
//                   {siproducts.product_description}
//                 </div>
//                 <br />

//               </div>

//               <div className="col-sm-12 col-md-6 pt-5 mt-5">

//                 <div className="product-img">
//                   <img src={siproducts.product_img} alt="" />
//                 </div>
//               </div>
//             </div>
// );
//     })}

//         </div>
//   </section>
//   </div>

//   </div>

//   )
// }

// export default LearnMore

import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

function LearnMore() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();
  useEffect(() => { 
    const fetchProduct = async () => { 
        try { 
            const response = await fetch("http://localhost:3000/product/21"); 
            const data = await response.json(); // Extract product list and find the correct product
            console.log("fetched data", data); 
            console.log("searching fot product_id", id);
           if(!data || !data.products){
             console.log("Invalid API Response", data);
             return;
              }
            const selectedProduct = data.products.find((p) => p.product_id === parseInt(id));
            if(selectedProduct){
                setProducts(selectedProduct)
            }else{
                console.warn("product is not found", id)
                setProducts(null)
            }
            //  setProducts(selectedProduct ? [selectedProduct] : []);

                } catch (error) {
                 console.error("Error fetching product:", error); 
                //  setProducts([])
                } 
            }; 
            fetchProduct(); 
        }, [id]);
  if (!products || products.length ===0) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="Learnmore-page">
    
      <section className="internal-page-wrapper">
        
        <div className="container">
          
          <div className="row justify-content-center text-center">
        
            <div className="col-12 mt-5 pt-5">
            
              <h1 className="font-weight-bold">
            
                <b>iPhones</b> <br /> The best for brightness
               
                <p></p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {products?.map((product, i) => (
        <div key={i} className="row justify-content-center text-center">
        
          <div className="col-sm-12 col-md-6 pt-5 mt-5">
        
            <div className="product-title fw-bold">
              
              <h1>
                <b>{product.product_name}</b>
              </h1>
            </div>
            <div className="starting-price">{product.starting_price}</div>
            <div className="products-description">{product.product_brief_description}</div>
          </div>
          <div className="col-sm-12 col-md-6 pt-5 mt-5">
            
            <div className="product-img">
            
              <img src={product.product_img} alt={product.product_name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LearnMore;
