import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, ErrorPage, Gallery, Home, Login, Projects, Users } from "./pages"
import { Layout } from "./components"

const router=createBrowserRouter([
  {
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'gallery',
        element:<Gallery/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'users',
        element:<Users/>
      },
      {
        path:'projects',
        element:<Projects/>
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
