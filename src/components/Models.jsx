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
      <div className='my-20 text-center'>
            <h3 className='text-[36px] font-extrabold  text-[#101727]'>Premium Digital Tools</h3>
            <p className='text-[16px] leading-[20px] text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <button className='btn btn-outline my-4 rounded-3xl'>button</button>
        </div>
        <div className='grid grid-cols-3 gap-4 '>
          {models.map(model=> <div className='p-4'>
            <div className='flex justify-between'>
              {/* <img src={model.image} alt="" /> */}
              <p className='text-right'>{model.icon}</p>
            </div>
            <h3>{model.name}</h3>
            <p> {model.description}</p>
            <p>{model.price}</p>
            <p>{model.period}</p>
           <ul>
            {
              model.features.map((feature, id) =>{
                return (
                  <li key={id}>
                  <span>✔</span>
                  <span>{feature}</span>
                </li>
                )
              })
            }
           </ul>
           

          </div>)}
        </div>
    </div>
  )
}