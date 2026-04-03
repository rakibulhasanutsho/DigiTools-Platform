import React from 'react'
import { use } from 'react'
import ModelCard from './ModelCard'


export const Products = ({modelPromise, carts, setCarts}) => {
   const models = use(modelPromise)
  return (
    <div className='grid grid-cols-3 gap-4 bg-[#F2F2F2 space-y-5 w-[1140px] mx-auto mb-20'>
          {models.map(model=> 
         <ModelCard  key={model.id} carts={carts} setCarts={setCarts} model={model} ></ModelCard>
        )}
        </div>
  )
}