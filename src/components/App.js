
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [itemName,setItemName]=useState("");
  const [price,setprice]=useState('');
  const [cart,setCart]=useState([]);

  const addItem=()=>{
    const newItem={
      name:itemName,
      price:price
    };
    setCart([...cart,newItem]);
    setItemName("");
    setprice("");
  }

 const removeItem=(index)=>{
  const update=cart.filter((_,i)=>i!=index)
  setCart(update);
 }



  return (
    <div className="parent">
       <h1>Parent Component</h1>  
       <label>Item Name:</label>
       <input type="text" id="itemName" onChange={(e)=>setItemName(e.target.value)} value={itemName}/>
       <label>Item Price:</label>
       <input type="number" id="itemPrice" onChange={(e)=>setprice(e.target.value)} value={price}/> 
       <button onClick={addItem}>Add Item</button>

       <div className="child">
        <h2>Child Component</h2>
        {
          cart.map((item,index)=>{
            <li key={index}>
              <span className="itemName">{item.name}</span>
              <span className="itemPrice">{item.price}</span>
              <button onClick={()=>removeItem(index)}>Remove</button>
            </li>
          })
        }
       </div>
    </div>
  );
}

export default App
