import { RouterProvider } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import './App.css';
import router from './router/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='bg-fuchsia-50'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
