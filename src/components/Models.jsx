import  {use} from 'react'
// import { designTool } from '../assets/products./design-tool.png'


export const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    
   {/*
      {
    "id": 1,
    "name": "Minimalist Gypsum Planter",
    "description": "A handcrafted, eco-friendly flower pot with a smooth matte finish, perfect for modern desk setups.",
    "price": 25.00,
    "period": "one-time",
    "tag": "Best Seller",
    "tagType": "best-seller",
    "features": ["Handmade", "Water-resistant coating", "Felt base protection"],
    "icon": "Cactus"
  }, */}
  return (
    <div className='w-[1140px] mx-auto '>
      <div className='my-20 text-center items-stretch'>
            <h3 className='text-[36px] font-extrabold  text-[#101727]'>Premium Digital Tools</h3>
            <p className='text-[16px] text-[#627382] leading-5 whitespace-normal'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <button className='btn btn-outline my-4 rounded-3xl'>button</button>
        </div>
        <div className='grid grid-cols-3 gap-4 bg-[#F2F2F2 space-y-5'>
          {models.map(model=> <div className='p-4 my-[26px] border border border-[#8697a7] rounded-xl' >
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
           <button className='btn btn-primary w-full'>Bye Now</button>

          </div>)}
        </div>
    </div>
  )
}