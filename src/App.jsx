import { BrowserRouter, Routes , Route } from "react-router-dom"
import Body from "./component/Body"
import Login from "./component/Login"
import Feed from "./component/Feed"
import Profile from "./component/Profile"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
import Connection from "./component/Connection"
import Request from "./component/Request"

function App() {
 

  return (
    <>
  <Provider store={appStore}>

  <BrowserRouter basename="/">
      <Routes>

        <Route path="/" element = {<Body/>} > 
        <Route path="/feed" element={<Feed/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/connection" element={<Connection/>} />
        <Route path="/request" element={<Request/>} />
        
        </Route>
        
      </Routes>
    </BrowserRouter>
  </Provider>
    
   
    </>
  )
}


export default App
