import './App.css'
import { useState } from 'react'
import { useGetAllProductsQuery, useGetSingleProductQuery } from './store/productApi'

function App() {
  const [input, setInput] = useState("");
 // const {data, isLoading} = useGetAllProductsQuery();
//  console.log(data);

const {data: singleData ,isLoading} = useGetSingleProductQuery(input);

console.log(singleData);



  return (
    <>
    {isLoading ?  <h1>Loading...</h1> : <h1>OUR PRODUCTS</h1>}

  <input type="text" onChange={e=>setInput(e.target.value)} placeholder='Search products' /> <br />

      {singleData?.products?.map((item,index)=>(
        <li key={index}>  <img src={item.thumbnail} alt="" width={200}/> <br />
        {item.title} <br />
        price: ${item.price}
        </li>
      ))}
    </>
  )
}

export default App
