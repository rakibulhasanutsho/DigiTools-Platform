import { FaShoppingBasket } from "react-icons/fa"
export default  function Carts({carts}) {
  const totalPrice = carts.reduce((sum, product) => sum + product.price, 0)
  console.log(carts)
    return (
      <div className="w-[1140px] mx-auto border border-gray-300 p-15 flex flex-col gap-4 rounded">
        <h3 className="text-3xl font-bold ">Your Cart</h3>
        { 
        
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
              <p className="text-red-500 cursor-pointer">Remove</p>
            </div>
            )
          }
          

          )
        }
        <div className="space-y-4">
          <div className="flex justify-between">
            <p>Total :</p>
            <h3 className="text-2xl font-bold text-[#101727] ">${totalPrice}</h3>
          </div>
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full p-3 cursor-pointer rounded-4xl text-[16px] text-white text-semibold">Proceed to Checkout</button>
        </div>

        
      </div>
    )
}