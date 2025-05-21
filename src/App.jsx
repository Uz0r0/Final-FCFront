import { RouterProvider } from "react-router-dom";
import { routers } from "./app/routers";
import './App.css'

function App() {
  
  return (
    <>
       <RouterProvider router={routers} />
    </>
  )
}

export default App
