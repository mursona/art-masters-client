import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../pages/Blog/Blog';
import Checkout from '../../pages/Checkout/Checkout';
import Home from '../../pages/Home/Home/Home';
import ShowAll from '../../pages/Home/ShowAll/ShowAll';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';


    const router = createBrowserRouter([

        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/showall',
                    element: <ShowAll></ShowAll>
                },
                {
                    path:'/login',
                    element: <Login></Login>
                },
                {
                    path:'/signup',
                    element: <Signup></Signup>
                },
                {
                    path:'/blog',
                    element: <Blog></Blog>
                },
                {
                    path:'checkout/:id',
                    element:<Checkout></Checkout>,
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
                }
            ]
        }

    ]);

export default router;