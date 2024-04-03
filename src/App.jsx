import "./App.css";
import { createContext } from "react";
import {Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Info from "./pages/Info";
import { useState, useEffect } from "react";
import Error from "./pages/Error";
export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState('light');
  const [product, setProduct] = useState({})
  useEffect(() =>{
 if (localStorage.getItem('theme')) {
  setTheme(localStorage.getItem('theme')) 

 }
  }, [])
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path="/about" element = {<About></About>}></Route>
        <Route path="/cart" element ={<Cart></Cart>}></Route>
        <Route path="/products" element ={<Products></Products>}></Route>
        <Route path="/info/:id" element ={<Info></Info>}></Route>
        <Route path="/login" element ={<Login></Login>}></Route>
        <Route path="/register" element ={<Register></Register>}> </Route>
        <Route path="*" element ={<Error></Error>}> </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
