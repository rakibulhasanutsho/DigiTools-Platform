import React from "react";
export default  function Explore() {
  return (
    <div className="  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-30 text-center space-y-5">
       <h2 className="text-[30px] font-bold text-white">Ready to Transform Your Workflow?</h2>
       <p className="text-[16px] text-white  leading-5">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
       <div className="flex justify-center gap-3">
        <button className="btn btn-primary">Explore Products</button>
        <button className="btn btn-outline">View Pricing</button>
       </div>
    </div>
  );
}