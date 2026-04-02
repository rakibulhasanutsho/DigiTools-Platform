import { useState } from "react"
export default  function ModelCard({model}) {
    const [isBuy , setIsBought] = useState(false)
    const handleBuy = () =>{
         setIsBought(true)
    }
        
  return (
     <div key={model.id} className='p-4 my-[26px] border border border-[#8697a7] rounded-xl' >
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
              model.features.map((feature, id) =>{
                return (
                  <li className='text-[16px] leading-[20px] text-[#627382]' key={id}>
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