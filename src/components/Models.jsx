import  {use} from 'react'
import ModelCard from './ModelCard'
// import { designTool } from '../assets/products./design-tool.png'


export const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    
   
  return (
    <div className='w-[1140px] mx-auto  '>
      <div className='my-20 text-center items-stretch space-y-5'>
            <h3 className='text-[36px] font-extrabold  text-[#101727]'>Premium Digital Tools</h3>
            <p className='text-[16px] text-[#627382] leading-5 whitespace-normal'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            
              {/* name of each tab group should be unique */}
<div className="tabs tabs-box w-[145px] bg-blue-700 mx-auto">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Products" />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart" defaultChecked />
  
</div>
            
        </div>
        <div className='grid grid-cols-3 gap-4 bg-[#F2F2F2 space-y-5'>
          {models.map(model=> 
         <ModelCard model={model}></ModelCard>
        )}
        </div>
    </div>
  )
}