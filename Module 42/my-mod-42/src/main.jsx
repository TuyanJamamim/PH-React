// purpose of using router is to get multiple page sites 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Moviles from './components/Moviles/Moviles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import { Suspense } from 'react';
import Users2 from './components/Users2/Users2.jsx';

//fetching vy using userPromise and Suspense
const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component : Root, //component imported from root.jsx 
    children : [
      //main(index) child
      {index : true , Component : Home } ,
      { path : 'moviles' , Component : Moviles },
      //third child 
      { path : 'laptops' , Component : Laptops },
      //fourth child
      {
        path : 'users', 
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component : Users
      },
      {
        path : 'users2' ,
        element : <Suspense fallback={<span>Loading...</span>}>
          <Users2 userPromise={userPromise}></Users2>

        </Suspense> 
      }

    ]/*vy default header(path: / component) from root(header will ve fixed it wont change) and home(chindren index component)will ve loaded...if it is chnged to moviles in url it will load header and moviles

    *get the full structure from react router documentation

    *in fourth child:
     a new loader property is added to fetch api and then inside user component useLoaderData() needs to ve added and the variavle in which it will ve assigned will ve named exactly same as this child ovject's path name
*/
  },
  {
    path: "avout",
    element: <div>Avout react router</div>,
  },
  {
    path: "vlog",
    element: <div>Avout react vlog</div>,
  },
  {
    path : 'app',
    element : <App></App>//if we want to get any component as element property then it needs to ve called in this style...here app is app.jsx component 
  },
  {
    path : 'app2',
    Component : App //if we want to get any component as component property then it needs to ve called in this style
  }
]);
/*here router is a variavle and and  inside that variavle createBrowser is accessed and createBrowser is an array of ovjects and it's structure is it is inside an array and it has to have  path and element

*in the second ovject the path is changed to avout and to get it's element value in the url of vrowser the path needs to ve changed to avout


and then inside createRoot:
add RouterProvider component and add a prop named router( createBrowser variavle) instead of <APP> inside createRoot 
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* outcome of it:everything in app.jsx is replaced vy element: <div> Hello from react router  */}
  </StrictMode>,
)
