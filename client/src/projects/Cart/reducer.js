export const reducer = (cart,action) => {
  switch(action.type){
    case "CLEAR_ITEMS":
      return {...cart,items:[]}
    case "REMOVE_ITEM":
      return {...cart,items:cart.items.filter((item)=>item.id !== action.payload)}
    case "INCREASE_AMOUNT":
      let tempItems = cart.items.map((item) => {
        if(item.id === action.payload){
          return {...item,amount:item.amount+1}
        }
        return item
      })  
      return {...cart,items:tempItems}
    case "DECREASE_AMOUNT":
      let tempItemsDecrease = cart.items.map((item) => {
        if(action.payload === item.id && item.amount > 1){
          return {...item,amount:item.amount-1}
        }
        return item
      })
      return {...cart,items:tempItemsDecrease}
    case "GET_TOTALS":
      const {totalItemAmount,totalAmountKN} = cart.items.reduce((cartTotalAcc,currentItem)=>{
        const {price,amount} = currentItem
        const itemTotal = price * amount
        cartTotalAcc.totalItemAmount += amount
        cartTotalAcc.totalAmountKN += itemTotal

        return cartTotalAcc
      },{
        totalItemAmount: 0,
        totalAmountKN: 0
      })
      return {...cart,totalItemAmount,totalAmountKN}      
  }  
}