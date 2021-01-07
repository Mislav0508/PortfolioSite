import React,{useReducer,useEffect} from 'react'
import "./cart.css"
import {CartItem} from "./CartItem"
import {cartItems} from "./data"
import {reducer} from "./reducer"

export const CartContext = React.createContext() //CONTEXT

const defaultCart = {
  items:cartItems,
  totalItemAmount: 0,
  totalAmountKN: 0
}
export const CartContainer = () => {
  const [cart,dispatch] = useReducer(reducer,defaultCart)

  const remove = (id) => {
    dispatch({type:"REMOVE_ITEM",payload:id})
  }
  const increase = (id) => {
    dispatch({type:"INCREASE_AMOUNT",payload:id})
  }
  const decrease = (id) => {
    dispatch({type:"DECREASE_AMOUNT",payload:id})
  }
  useEffect(() => {
    dispatch({type:"GET_TOTALS"})
  },[cart.items])
  
  return (
    <CartContext.Provider value={{remove,increase,decrease}} >
      <section className="cart">
      <div className="cart-title">
        <h1>CART [{cart.totalItemAmount}]</h1>
      </div>
      <div className="cart-content">
        {cart.items.map((item) => {
          return (
            <>
              <CartItem 
              key={item.id}               
              {...item} 
              itemAmount={cart.itemAmount}/>
            </>
          )
        })}
      </div>
      <p className="cart-footer">
        <span>Total:</span>
        <span>kn {cart.totalAmountKN}</span>
      </p>
      <button className="cart-btn" onClick={()=>{dispatch({type:"CLEAR_ITEMS"})}}>CLEAR CART</button>
    </section>
    </CartContext.Provider>
    
  )
}


