import instagram from "../assets/instagram.png"
import twitter from "../assets/Twitter.png"
import facebook from "../assets/Facebook (1).png"
export default  function Footer() {
  return (
    <div className=" bg-[#101710]">
       <div className="flex flex-col lg:flex-row justify-between text-[#FAFAFA] text-center lg:text-left   p-5 lg:p-20 space-y-5 ">
        <div className="space-y-5">
            <h2 className="text-3xl font-bold">Digitools</h2>
            <p className="text-[16px] leading-6">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
        </div>
        <div className="space-y-5">
            <h3 className="text-2xl font-medium">Product</h3>
            <div className="text-[16px] space-y-5">
                <p >Features</p>
                <p>Pricing</p>
                <p>Templates</p>
                <p>Integrations</p>
                </div>
        </div>
        <div className="space-y-5">
            <h3 className="text-2xl font-medium">Company</h3>
            <div className="text-[16px] space-y-5">
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Press</p>
            </div>
        </div>
        <div className="space-y-5">
            <h3 className="text-2xl font-medium">Resources</h3>
            <div className="text-[16px] space-y-5">
                <p>Documentation</p>
                <p>Help Center</p>
                <p>Community</p>
                <p>Contact</p>
            </div>
        </div>
        <div className="space-y-5">
            <h3 className="text-2xl font-medium">Social Links</h3>
            <div className="flex gap-5 justify-center lg:justify-start">
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
       </div>
       <hr className="text-[#FAFAFA] mx-5 lg:mx-20 " />
       <div className="text-[#FAFAFA] space-y-5 text-center flex flex-col lg:flex-row  justify-between p-5 lg:p-20">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex flex-col text-center lg:flex-row gap-10">
            <p>Privacy Policy</p>
            <p>Terms of Service </p>
            <p>Cookies</p>
        </div>
       </div>
    </div>
  );
}