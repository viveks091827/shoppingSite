import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let [proData, getList] = useState([]);

  const prodlist = async () => {
    console.log("inside listProduct");
    const response = await fetch("http://127.0.0.1:3009/products/");
    const json = await response.json();
    console.log("json data: ", json);
    getList(json);
  };
  
  const addToCart = (id) => {
    console.log('added to cart')
  }

  useEffect(() => {
    prodlist();
  }, []);

  return (
    <div className="prod_box">
      <div>
        {proData.map((data) => {
          return <div className="main_prod">
            <div>
                <div className="posterimage">
                    <Link to={`/about/${data.product_id}`}><img src={data.image} alt="Product_poster" /></Link>
                </div>
                <h1>{data.product_name}</h1>
              
                 <div className="brandprice">
                <div>
                  <label>Brand: </label> {data.brand}
                </div>
                <div>
                  <label>Price: </label> {data.price}
                </div>
              </div>
              <input type="checkbox" onChange={()=>{addToCart(data.product_id)}} />
            </div>
          </div>;
        })}
        
      </div>
    </div>
  )
}

export default Home;
