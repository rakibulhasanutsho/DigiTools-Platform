import { use } from "react";
export default  function Transparent ({transparentPromise}) {
    const transparent = use(transparentPromise)
  return (
    <div className='w-full mx-auto p-5 lg:p-20 space-y-10'>
      <div className="text-center space-y-4">
        <h2 className='text-[48px] font-extrabold  text-[#101727]'>Simple, Transparent Pricing</h2>
        <p className='text-[16px] text-[#627382] leading-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        { 
            transparent.pricing_plans.map(trans =>
                <div key= {trans.id} className={`space-y-5 p-5 rounded-2xl flex flex-col ${trans.plan_name ==='Pro'?'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]':' bg-[#F2F2F2] border-gray-600' }`}>
                    <p className="text-2xl font-bold text-{#101727">{trans.plan_name}</p>
                    <p className="text-[16px] text-[#627382] leading-5">{trans.tagline}</p>
                    <p><span className="text-[40px] font-bold "> {trans.price} </span><span className="text-[20px] text-[#627382]">{trans.billing_cycle}</span></p>
                    <ul>
                        {
                            trans.features.map((feature, index) =>
                                <li key={index}><span>✔</span> {feature}</li>
                            )
                        }
                    </ul>
                    <button className="mt-auto btn btn-primary w-full rounded-3xl">{trans.button_text}</button>
                </div>
            )
        }
      </div>
    </div>
  );
}