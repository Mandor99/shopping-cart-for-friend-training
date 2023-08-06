import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<NavBar/>}>
      <Route index element={<Products/>} />
      <Route path='/cart' element={<Cart/>} />
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
