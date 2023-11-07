import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

 

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/booking.json')
            },
            {
                path: '/news',
                element: <News></News>
            }
        ]
    }
])

export default Routes;