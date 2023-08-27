
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [arr, setArr] = useState([{name:"Item 1",price:10},{name:"Item 2",price:20},{name:"Item 3",price:30}]);
  let [values,setValues] = useState({});
  function handleChange1(e){
    setValues({...values,name:e.target.value});
  }
  function handleChange2(e){
    setValues({...values,price:e.target.value});
  }
  function handleClick(){
    if(arr.length === 0){
      // console.log("hell");
      let a = [];
      a.push({name:values.name,price:values.price})
      setArr(a);
    }else{
      setArr([...arr,{name:values.name,price:values.price}]);
    }
  }

  function handleChild(e){
    let item = e.target.parentElement.innerText.substr(0,7);
    let ab = arr.filter((e)=>{

      if(e.name[5] == item[5]){
        return false;
      }
      return true;
    });
    setArr(ab);

  }
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <label htmlFor="">Item Name</label>
          <input type="text"  id="itemName" onChange={handleChange1}/>
          <label htmlFor="">Item Price</label>
          <input type="number"  id="itemPrice" onChange={handleChange2}/>
          <button onClick={handleClick}>Add Item</button>
          <div className="child">
            <h1>Child Component</h1>
            <ul>
            {
              arr.map((e,i)=>{
                return <li>{e.name} - ${e.price} <button onClick={handleChild}>Remove</button></li>    
                
              })
            }
            </ul>
          </div>
        </div>
    </div>
  )
}

export default App
