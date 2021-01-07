import React, { useContext } from 'react'
import {AiOutlineArrowUp,AiOutlineArrowDown} from "react-icons/ai"
import { CartContext } from './CartContainer'

export const CartItem = ({id,name,price,img,amount}) => {
  
  const {remove,increase,decrease} = useContext(CartContext)

  return (
    <div className="item" key={id}>
      <div className="left-side">
        <img src={img} alt={name} className="item-img"/>
        <div className="left-side-text">
          <h4 className="left-text">{name}</h4>
          <h4 className="left-text">{price} kn</h4>
          <button className="left-text" onClick={()=>remove(id)}>remove</button>
        </div>        
      </div>
      <div className="right-side">
        <button onClick={()=>increase(id)}><AiOutlineArrowUp className="cart-arrow"/></button>
  <h4>{amount}</h4>
        <button onClick={()=>decrease(id)}><AiOutlineArrowDown className="cart-arrow"/></button>
      </div>
      
    </div>
  )
}
