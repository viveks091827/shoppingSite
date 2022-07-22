import {render} from "react-dom"
import {useState} from "react"
import {Link} from "react-router-dom";

const Add = () => {
    const [proddata,setproduct] = useState();
   
    const [id,setID] = useState("");
    const [name,setName] = useState("");
    const [type, setType] = useState("");
    const [ig,setImage] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");


    const [phonemodel, setphoneModel] = useState("");
    const [ram, setRam] = useState();
    const [camera,setCamera] = useState("");
    const [storage,setStorage] = useState("");
    const [processor,setProcessor] = useState("");
    const [phonecolor,setphoneColor] = useState("");


    const [clothbrand,setclothBrand] = useState("");
    const [size, setSize] = useState("");
    const [clothcolor,setclothColor] = useState("");
    const [clothtype, setclothType] = useState("");
    const [gender, setGender] = useState("");


    const [bookname, setbookName] = useState("");
    const [pages, setPages] = useState("");
    const [author,setAuthor] = useState("");
    const [publisher,setPublisher] = useState("");
    const [year, setYear] = useState("");


    const addphone = ()=> {
        fetch("http://127.0.0.1:3009/product", {
        method: "POST",
        body: JSON.stringify({
          product_id: id,
          product_name: name,
          type:type,
          image : ig,
          brand : brand,
          price : price,
          phone_id: id,
          model: phonemodel,
          ram : ram,
          camera: camera,
          storage:storage,
          processor:processor,
          color:phonecolor
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })


      
      .then((addphone) => addphone.json())
      .then((json) => console.log(json));
    }
    
    const addcloth = ()=> {
        fetch("http://127.0.0.1:3009/product", {
      method: "POST",
      body: JSON.stringify({
        product_id : id,
        product_name: name,
        type :type,
        image : ig,
        brand : brand,
        price : price,
        cloth_id: id,
        brand: clothbrand,
        size : size,
        color : clothcolor,
        cloth_type : clothtype,
        gender:gender
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
      .then((addcloth) => addcloth.json())
      .then((json) => console.log(json));
}
      const addbook = () => 
      { fetch("http://127.0.0.1:3009/product", {
        method: "POST",
        body: JSON.stringify({
          product_id : id,
          product_name: name,
          type :type,
          image : ig,
          brand : brand,
          price : price,
          book_id: id,
          book_name: bookname,
          pages : pages,
          author : author,
          publisher : publisher,
          year:year
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((addbook) => addbook.json())
        .then((json) => console.log(json));
    }
        
    return(
        <>
        <Link to={`/`}><h1>Navbar</h1></Link>
        <div class="rootpage">
            <div className="main_content">
                <div className="typecontent">
                <div>
                <label>ID: </label>
                <div className="inputbox" >
                    <input type="text" onChange={(e)=>setID(e.target.value)}/>
                </div>
                </div>
                <div>
                <label>Name: </label>
                <div className="inputbox" >
                    <input type="text"  onChange={(e)=>setName(e.target.value)}/>
                </div>
                </div>
                <div>
                    <label>Type: </label>
                    <div>
                    <input type="text" onChange={(e)=>setType(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Image Link: </label>
                    <div>
                        <input type="text" onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Brand: </label>
                    <div>
                        <input type="text" onChange={(e)=>setBrand(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Price: </label>
                    <div>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Phone Model: </label>
                    <input type="text" onChange={(e)=>setphoneModel(e.target.value)}/>
                </div>
                <div>
                    <label>RAM: </label>
                    <div>
                        <input type="text" onChange={(e)=>setRam(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Camera: </label>
                    <div>
                        <input type="text" onChange={(e)=>setCamera(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Storage: </label>
                    <div>
                        <input type="text" onChange={(e)=>setStorage(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Processor: </label>
                    <div>
                        <input type="text" onChange={(e)=>setProcessor(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Color: </label>
                    <div>
                        <input type="text" onChange={(e)=>setphoneColor(e.target.value)}/>
                    </div>
                </div>
                <button onClick={addphone}>Submit</button>
                </div>


                <div className="typecontent">
                <div>
                <label>ID: </label>
                <div className="inputbox">
                    <input type="text" onChange={(e)=>setID(e.target.value)}/>
                </div>
                </div>
                <div>
                <label>Name: </label>
                <div className="inputbox">
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div>
                </div>
                <div>
                    <label>Type: </label>
                    <div>
                    <input type="text" onChange={(e)=>setType(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Image Link: </label>
                    <div>
                        <input type="text" onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Brand: </label>
                    <div>
                        <input type="text" onChange={(e)=>setBrand(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Price: </label>
                    <div>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Cloth Brand: </label>
                    <input type="text" onChange={(e)=>setclothBrand(e.target.value)}/>
                </div>
                <div>
                    <label>Size: </label>
                    <div>
                        <input type="text" onChange={(e)=>setSize(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Color: </label>
                    <div>
                        <input type="text" onChange={(e)=>setclothColor(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Cloth Type: </label>
                    <div>
                        <input type="text" onChange={(e)=>setclothType(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Gender: </label>
                    <div>
                        <input type="text" onChange={(e)=>setGender(e.target.value)}/>
                    </div>
                </div>
                <button onClick={addcloth}>Submit</button>
                </div>
            </div>




            <div className="typecontent">
                <div>
                <label>ID: </label>
                <div className="inputbox">
                    <input type="text" onChange={(e)=>setID(e.target.value)}/>
                </div>
                </div>
                <div>
                <label>Name: </label>
                <div className="inputbox">
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div>
                </div>
                <div>
                    <label>Type: </label>
                    <div>
                    <input type="text" onChange={(e)=>setType(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Image Link: </label>
                    <div>
                        <input type="text" onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Brand: </label>
                    <div>
                        <input type="text" onChange={(e)=>setBrand(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Price: </label>
                    <div>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Book Name: </label>
                    <input type="text" onChange={(e)=>setbookName(e.target.value)}/>
                </div>
                <div>
                    <label>No Of Pages: </label>
                    <div>
                        <input type="text" onChange={(e)=>setPages(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Author: </label>
                    <div>
                        <input type="text" onChange={(e)=>setAuthor(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Publisher: </label>
                    <div>
                        <input type="text" onChange={(e)=>setPublisher(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Year: </label>
                    <div>
                        <input type="text" onChange={(e)=>setYear(e.target.value)}/>
                    </div>
                </div>
                <button onClick={addbook}>Submit</button>
                </div>
        </div>
        </>
    )
}

export default Add;