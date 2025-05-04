import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, AddProject, ErrorPage, Gallery, Home, Login, Projects, Users } from "./pages"
import { Layout } from "./components"
import {action as createProjectAction} from './components/ProjectCreateContainer'

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
      {
        path:'add-project',
        element:<AddProject/>,
        action: createProjectAction
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
