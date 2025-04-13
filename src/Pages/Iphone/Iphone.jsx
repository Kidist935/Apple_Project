import React from "react";
import { useState, useEffect } from "react";
import LearnMore from "./LearnMore";
import './Iphone.css'



function Iphone() {

  const [productss, setProducts] = useState([]);

  useEffect(() => {
        fetch("http://localhost:3000/iphone")
          .then((res) => res.json())
          .then((data) => {
         
            setProducts(data.products);
          });
      }, []);

  return (
  <div>
 
 <div className="iphone-page"> 
  <section className="internal-page-wrapper"> 
    <div className="container"> 
      <div className="row justify-content-center text-center"> 
        <div className="col-12 mt-5 pt-5">
           <h1 className="font-weight-bold"> 
            <b>IPhones</b> <br/>
            The best for the brightness
            </h1> 
    </div> 
      </div> 

  {productss?.map((singleProduct, i) =>{
    // let vidId = singleVideo.id.videoId;
    // let videoLink = `https://www.youtube.com/watch?v=${vidId}`;
return(
    <div className="row justify-content-center text-center"> 
    <div className={`col-sm-12 col-md-6 pt-5 mt-5 my-auto order-${
                  i % 2 === 0 ? "1" : "2"
                }`}>
    <div  className="product_url" >{singleProduct.product_url}</div>
    <div className="product_name" >{singleProduct.product_name}</div>
    <div className="product-price" >{singleProduct.starting_price}</div>
    <div className="links-wrapper">
							<ul>
								<li><a href="/LearnMore">Learn more</a></li></ul>
        </div>
     <div className="product-brief-description">{singleProduct.product_brief_description}</div>
     <div className="product-decs" > {singleProduct.product_description}
     </div>
    </div>
    
     <div className={`col-sm-12 col-md-6 pt-5 mt-5 order-${
                  i % 2 === 0 ? "2" : "1"
                }`}
>
      <div className="product-img" ><img src={singleProduct.product_img}/>
     <div className="product_link">{singleProduct.product_link}


     </div>

      </div>


     </div>


    </div>
);
    })}


        </div> 
  </section> 
  </div>

  </div>
  );
}

export default Iphone;

