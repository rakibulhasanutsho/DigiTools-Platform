import { useState } from "react"
import { AiFillLayout } from "react-icons/ai"
import Swal from "sweetalert2"
export default  function ModelCard({model, carts, setCarts}) {
    const [isBuy , setIsBought] = useState(false)
    const handleBuy = (product) =>{
         setIsBought(true)
        const  isExist = carts.find((item) => item.id === model.id)
        if(!isExist){
          setCarts([...carts, model])
          
          Swal.fire(
            {
            position:'top-end',
            icon:'success',
            title: 'Add to Cart',
            showConfirmButton:'false',
            timer:1500,
            toast:true,
          }
          )
        }
        else{
          Swal.fire({
            title:'Already Added',
            text:"This item is already in your selection.",
            icon:"info",
            confirmButtonColor:"#3085d6"

          })
        }
         
    }
        
  return (
     
      <div key={model.id} className='p-4 my-5 border border border-[#8697a7] rounded-xl ' >
            <div className='my-[26px] '>
              {/* <img src={model.image} alt="" /> */}
              <p className=' max-w-25 text-center text-[#BB4D00] p-2 px-4 bg-[#FEF3C6] rounded-xl'>{model.icon}</p>
            </div>
            <h3 className='text-2xl font-bold text-[#101727 mb-4'>{model.name}</h3>
            <p className='text-[16px] text-[#627382] leading-5 line-clamp-2 mb-4'> {model.description}</p>
            <p className='text-2xl font-bold text-[#101727 '>${model.price}/<span className='text-[24px] text-[#627382] font-normal'>{model.period}</span> </p>
            <p></p>
           <ul className='my-[26px] '>
            {
              model.features.map((feature, index) =>{
                return (
                  <li className='text-[16px] leading-[20px] text-[#627382]' key={index}>
                  <span className='bg-green-500 bg-clip-text text-transparent'>✔</span>
                  <span>{feature}</span>
                </li>
                )
              })
            }
           </ul>
           <button onClick={handleBuy} className='btn btn-primary w-full'>
            Buy Now
           </button>

          </div>
     
          )
  
}