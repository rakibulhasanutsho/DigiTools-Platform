
import { useState } from "react";






export const Models = ({ setActiveTab}) => {
    // const [activeTab, setActiveTab] = useState("Products")
    // console.log(activeTab);
   
   
  return (
    <div className='w-[1140px] mx-auto'>
      <div className='my-20 text-center items-stretch space-y-5'>
            <h3 className='text-[36px] font-extrabold  text-[#101727]'>Premium Digital Tools</h3>
            <p className='text-[16px] text-[#627382] leading-5 whitespace-normal'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            
              <div className="tabs tabs-box justify-center w-[255px]  bg-blue-700 mx-auto">
                <input type="radio" name="my_tabs_1" className="tab px-10 border " aria-label="Products" defaultChecked onClick={()=> setActiveTab("Products")} />
                <input type="radio" name="my_tabs_1" className="tab px-10 border" aria-label="Cart" onClick={()=> setActiveTab("Cart")}  />
                
              </div>

            
        </div>
        
        
    </div>
  )
}