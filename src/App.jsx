import { Navbar } from "./components/Navbar"
import { Banner } from "./components/Banner"
import { Status } from "./components/Status"
import { Products } from "./components/Products"
import { Models } from "./components/Models"

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json();
}
 const modelPromise = getModels()

function App() {
 
  return (
    <>
          
    <Navbar></Navbar>
    <Banner></Banner>
    <Status></Status>
    <Products></Products>
    
   
      <Models modelPromise={modelPromise} ></Models>
    
    
    </>
  )
}

export default App
