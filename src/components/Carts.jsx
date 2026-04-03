import { FaShoppingBasket } from "react-icons/fa"
import { useState } from "react"
export default  function Carts({carts,removeCartProduct,removeAllCartProduct}) {
  const totalPrice = carts.reduce((sum, product) => sum + product.price, 0)
  const [isCheckOuted, setIsCheckOuted] = useState(false)
  
  
  console.log(carts)
    return (
      <div className="w-[1140px] mx-auto border border-gray-300 p-15 flex flex-col gap-4 rounded mb-20">
        <h3 className="text-3xl font-bold ">Your Cart</h3>
        { 
        carts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-400 mb-2 ">Your cart is empty!</h2>
            <p className="text-[16px] text-gray-500">Looks like you haven't added anything to your cart yet.</p>
          </div>
        )
          :
          carts.map((cart,index)=>{
            return(
              
              <div key={index} className="bg-[#F9FAFC] p-5 rounded flex justify-between">
                
              <div className="space-y-2 flex gap-5">
                <div className=" border border-gray-300 p-4 rounded-full bg-white"><FaShoppingBasket></FaShoppingBasket></div>
                <div>
                  <h4 className="font-medium text-xl">{cart.name}</h4>
                  <p className="text-[#627382]  leading-[20px] text-[16px]">${cart.price}</p>

                </div>
              </div>
              <p onClick={()=>removeCartProduct(cart.id)} className="text-red-500 cursor-pointer">Remove</p>
            </div>
            )
          }
          

          )
        }
        <div className="space-y-4">
          <div className="flex justify-between">
            <p>Total :</p>
            <h3 className="text-2xl font-bold text-[#101727] ">${(totalPrice).toFixed(2)}</h3>
          </div>
          <button onClick={()=>removeAllCartProduct(true)} className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full p-3 cursor-pointer rounded-4xl text-[16px] text-white text-semibold">Proceed to Checkout</button>
        </div>

        
      </div>
    )
}