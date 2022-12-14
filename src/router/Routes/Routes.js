import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AddService from '../../pages/AddService/AddService';
import Blog from '../../pages/Blog/Blog';
import Checkout from '../../pages/Checkout/Checkout';
import About from '../../pages/Home/About/About';
import Home from '../../pages/Home/Home/Home';
import ShowAll from '../../pages/Home/ShowAll/ShowAll';
import Login from '../../pages/Login/Login';
import Reviews from '../../pages/Reviews/Reviews';
import Signup from '../../pages/Signup/Signup';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


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
                    path: '/reviews',
                    element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
                },
                {
                    path:'checkout/:id',
                    element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                    loader: ({params}) => fetch(`https://art-masters-server.vercel.app/services/${params.id}`)
                },
                {
                    path:'addservice',
                    element: <AddService></AddService>,
                },
                {
                    path:'about',
                    element: <About></About>
                }

            ]
        }

    ]);

export default router;