import { BrowserRouter, Routes , Route } from "react-router-dom"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"

function App() {
 

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>

        <Route path="/" element = {<Body/>} > 
        <Route path="/login" element={<Login/>} />
        <Route path="/Profile" element={<Profile/>} />
        
        </Route>
        
      </Routes>
    </BrowserRouter>
    
   <h1 class="text-3xl text-center" >hellow world</h1>
    </>
  )
}


export default App
