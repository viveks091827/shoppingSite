import {render} from "react-dom"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom';

const About = () => {
    
  
    let [item, updateItem] = useState({});
    
    let data1;
    let data2;
    let render = "";

    const prodDetails = async (id) => {
      console.log("inside product details: ");
      const response = await fetch(`http://127.0.0.1:3009/product/${id}`);
      const json = await response.json();

      data1 = json[0];
      data2 = json[1];
      
      let newData;
      if (data1.type === 'phone') {
        newData = {productId: data1.product_id, productName: data1.product_name, productType: data1.t,
                    productImage: data1.image, productBrand: data1.brand, productPrice: data1.price,
                    model: data2.model, ram: data2.ram, camera: data2.camera, storage: data2.storage,
                    processor: data2.storage, color: data2.color
                    }
        }
        else if(data1.type === 'book') {
         newData = {productId: data1.product_id, productName: data1.product_name, productType: data1.t,
                productImage: data1.image, productBrand: data1.brand, productPrice: data1.price, name:data2.book_name,
                pages: data2.pages, author: data2.author, publisher: data2.publisher, year: data2.year}
        }
        else {
            newData = {productId: data1.product_id, productName: data1.product_name, productType: data1.t,
                productImage: data1.image, productBrand: data1.brand, productPrice: data1.price, brand:data2.brand,
                size: data2.size, color: data2.color, cloth_type: data2.cloth_type, gender: data2.gender}
        }
        updateItem(newData);

        console.log("item: ", item);
        console.log("newData: ",newData);

    if (data1.type === 'phone') {
        render = 
            <div>
                <img src={item.productImage} height="90" width="40"></img>
                <h1>{item.productName}</h1>
                <div>
                    <h3>{item.ram}</h3>
                    <h3>{item.storage}</h3>
                </div>
                <div>{item.productPrice}</div>
            </div>
     
        
    }
    else if(data1.type === 'book') {
        render = 
            <div>
                <img src={item.productImage} height="90" width="40"></img>
                <h1>{item.productName}</h1>
                <div>
                    <h3>{item.author}</h3>
                    <h3>{item.page}</h3>
                </div>
                <div>{item.productPrice}</div>
                <div>{item.year}</div>
            </div>
     
        
    }
    else {
        render = 
            <div>
                <img src={item.productImage} height="90" width="40"></img>
                <h1>{item.productName}</h1>
                <div>
                    <h3>{item.size}</h3>
                    <h3>{item.color}</h3>
                </div>
                <div>{item.productPrice}</div>
            </div>
     
        
    }
    console.log("render:", {render});
    
      
    };

    const { id } = useParams();
    useEffect(() => {
        prodDetails(id);
    }, []);

    
    
  
    return (<p>{render}</p>)
}

export default About;