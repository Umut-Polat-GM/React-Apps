import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({basket, products}) => {
  return (
    <>
        {
            basket.map((item, i)=> 
                <BasketItem 
                    key={i} 
                    item={item}
                    product={products.find(p => p.id === item.id)}
                />
            )
        }
    </>

  )
}

export default Basket
