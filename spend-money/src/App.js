import Header from "./components/Header";
import React, { useState, useEffect } from 'react'
import products from './products.json'
import Product from "./components/Product";
import Basket from "./components/Basket";


function App() {
  const [money, setMoney] = useState(100)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }
  function changeMoney(e){
    setMoney(parseInt(e))
  }

  useEffect (()=> {
    setTotal(basket.reduce((acc, item)=>{
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0)
    )
  }, [basket])
  return (
    <>
    <Header 
      money={money} 
      total={total}
      resetBasket = {resetBasket}
      changeMoney={changeMoney}
      
    />
     {
       products.map((product, i)=>
            <Product 
              key={i} 
              basket={basket} 
              setBasket={setBasket} 
              product={product}
              total={total}
              money={money} 
            />
        )
     }
     <hr/>
     <Basket 
      basket={basket}
      products={products}
     />
     <hr/>
     <h2>Total Price: ${total}</h2>
     <button onClick={resetBasket}>Reset Basket</button>
    
    </>
  );
}

export default App;
