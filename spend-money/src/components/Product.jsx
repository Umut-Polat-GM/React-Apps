import React from 'react'

const Product = ({product, basket, setBasket, total, money}) => {
    const basketItem = basket.find(item =>item.id === product.id)

    function addBasket(){
        const checkBasket = basket.find(item => item.id === product.id)
        //ürün daha önce varsa bu sekilde bir yol izleyebiliriz
        if(checkBasket){
            checkBasket.amount +=1
            //daha önce olan ürün cıkartıp yeniden düzenledik diyelim mi
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }else{
            setBasket([...basket, {
                id: product.id,
                amount : 1
            }])
        }
    }

    function removeBasket(){
        const currentBasket = basket.find(item => item.id === product.id)
        currentBasket.amount -=1
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        if(currentBasket.amount === 0){
            setBasket([...currentBasket])
        }else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

  return (
    <div className='product'>
        <hr/>
        <h3>{product.title}</h3>
        <div className='price'>price: ${product.price}</div>
        <div className="actions">
            <button disabled={!basketItem} onClick={removeBasket}>sell</button>
            <span className='amount'>{basketItem ? basketItem.amount : 0}</span>
            <button disabled={total + product.price > money} onClick={addBasket}>buy</button>
        </div>
    </div>
  )
}

export default Product
