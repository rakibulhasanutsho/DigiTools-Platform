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
    
    const [carts, setCarts] = useState([])
    
  
  return (
    <>
          
    <Navbar></Navbar>
    <Banner></Banner>
    <Status></Status>
    <Products></Products>
    
   
      {activeTab ==="Products" &&<Models modelPromise={modelPromise} setActiveTab={setActiveTab} carts={carts} setCarts ={setCarts} ></Models>}
      
      {activeTab ==="Cart" &&  <Carts carts={carts} setCarts={setCarts} setActiveTab={setActiveTab}></Carts>}
      <Accounts></Accounts>
      <Transparent transparentPromise ={transparentPromise}></Transparent>
      <Explore></Explore>
    
    
    </>
  )
}

export default App
