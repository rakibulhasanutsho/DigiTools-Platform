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
import Swal from "sweetalert2"




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
    
  const removeCartProduct = (id) => {
    const remainingCart = carts.filter(item => item.id !== id);
    setCarts(remainingCart);
    Swal.fire({
      title:"Are you sure?",
      text: "You won't be able to revert this!",
      icon:"warning",
      showConfirmButton:true,
      confirmButtonColor:"#d33333",
      cancelButtonColor:"#3085d6",
      confirmButtonText:"Yes, delete it!"
    })
  }
  const removeAllCartProduct = () =>{
    Swal.fire({
      title:"success",
      text:"Your order has been placed successfully",
      icon:"success",
      confirmButtonText:"Great!",
      confirmButtonColor:"#101727"
    })
    
    setCarts([]);
  }
  return (
    <>
          
    <Navbar></Navbar>
    <Banner></Banner>
    <Status></Status>
    
    
      <Models activeTab={activeTab} setActiveTab={setActiveTab }></Models>
      {activeTab ==="Products" ? <Products className="w-[1140px] mx-auto" setActiveTab={setActiveTab} modelPromise={modelPromise} carts={carts}  setCarts= {setCarts} ></Products> : null}
      
      {activeTab ==="Cart" ?  <Carts setActiveTab={setActiveTab} carts={carts} removeCartProduct={removeCartProduct} removeAllCartProduct={removeAllCartProduct} ></Carts> :null}
      
      <Accounts></Accounts>
      <Transparent transparentPromise ={transparentPromise}></Transparent>
      <Explore></Explore>
    
    
    </>
  )
}

export default App
