import { Navbar } from "./components/Navbar"
import { Banner } from "./components/Banner"
import { Status } from "./components/Status"
import { Products } from "./components/Products"
import { useState } from "react"
import Accounts from "./components/Accounts"
import Transparent from "./components/Transparent"
import Explore from "./components/Explore"
import Carts from "./components/Carts"
import { Models } from "./components/Models"



const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json();
}
const getTransparent = async ()=> {
  const res = await fetch ("/transparent.json")
  return res.json()
}
 const modelPromise = getModels()
 const transparentPromise = getTransparent()

function App() {
  const [activeTab, setActiveTab] = useState("Products")
    console.log(activeTab)
    const [carts, setCarts] = useState([])
    
  
  return (
    <>
          
    <Navbar></Navbar>
    <Banner></Banner>
    <Status></Status>
    
    
      <Models activeTab={activeTab} setActiveTab={setActiveTab }></Models>
      {activeTab ==="Products" ? <Products className="w-[1140px] mx-auto" setActiveTab={setActiveTab} modelPromise={modelPromise} carts={carts}  setCarts= {setCarts} ></Products> : null}
      
      {activeTab ==="Cart" ?  <Carts setActiveTab={setActiveTab} carts={carts}  ></Carts> :null}
      
      <Accounts></Accounts>
      <Transparent transparentPromise ={transparentPromise}></Transparent>
      <Explore></Explore>
    
    
    </>
  )
}

export default App
