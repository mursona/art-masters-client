import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Routes/Routes';

function App() {

  return (
    <div className='bg-fuchsia-50'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
