import React from 'react'

const BasketItem = ({item, product}) => {
    console.log(product);
  return (
    <div>
      <div>Title: {product.title} X Amount: {item.amount} X Price: ${item.amount*product.price}</div>
    </div>
  )
}

export default BasketItem
