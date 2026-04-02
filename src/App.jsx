import { Navbar } from "./components/Navbar"
import { Banner } from "./components/Banner"
import { Status } from "./components/Status"
import { Products } from "./components/Products"
import { Models } from "./components/Models"
import Accounts from "./components/Accounts"
import Transparent from "./components/Transparent"
import Explore from "./components/Explore"
import Carts from "./components/Carts"

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
 
  return (
    <>
          
    <Navbar></Navbar>
    <Banner></Banner>
    <Status></Status>
    <Products></Products>
    
   
      <Models modelPromise={modelPromise} ></Models>
      <Carts></Carts>
      <Accounts></Accounts>
      <Transparent transparentPromise ={transparentPromise}></Transparent>
      <Explore></Explore>
    
    
    </>
  )
}

export default App
