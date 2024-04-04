import React from "react";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Cartim from "../assets/pexels-3.jpeg";
import { NavLink } from "react-router-dom";
function Cart() {
  return (
    <div className="dark:bg-[#272935] dark:text-white h-screen">
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <div className="container w-screen dark:bg-[#272935] dark:text-white">
        <div class="border-b border-base-300 pb-4 container  mt-10 dark:bg-[#272935] dark:text-white">
          <h2 class="text-3xl font-medium tracking-wider capitalize">
            Shopping Cart
          </h2>
        </div>
        <div className="cardion flex items-center gap-20 dark:bg-[#272935] dark:text-white">
          <div className="image-item mt-4 flex gap-20 dark:bg-[#272935] dark:text-white">
            <img src={Cartim} alt="" className="w-36 h-[120px]  rounded-xl" />
            <div className="desc">
              <h4 className="text-xl ">Contemporary Sofa</h4>
              <p className="text-stone-500 mt-3">Comfora</p>
              <p >Color : <span className="bg-yellow-400 mt-3  w-4 h-4 rounded-full inline-block"> </span></p>
            </div>
          </div>
          <div className="amount dark:bg-[#272935] dark:text-white">
           <h3 className="mb-2">Amount</h3>
           <select name="" id="" className="w-16 border mb-2 dark:bg-[#1e2029] dark:text-white">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
           </select> <br />
           <a href="#" className="text-blue-500 hover:underline">remove</a>
          </div>
          <h1 className="ml-40 mt-[-40px]">$399.99</h1>
          <div className="amount dark:bg-[#272935] dark:text-white">
            <div className="counter mt-16 p-4  rounded-lg bg-[#f0f6ff] dark:bg-[#1e2029] dark:text-white pt-10 pb-4 ">
             <div className="subtotal  flex justify-between mb-2 border-b-2 gap-40 pb-2">
             <span>Subtotal</span>
             <span>$399.99</span>
             </div>
             <div className="subtotal flex justify-between mb-2 border-b-2 gap-40">
             <span>Shipping</span>
             <span>$5.00</span>
             </div>
             <div className="subtotal flex justify-between mb-2 border-b-2 gap-40">
             <span>Tax</span>
             <span>$34.00</span>
             </div>
            </div>
          <NavLink to='/login'><button className="btn btn-primary uppercase w-80  mt-6 dark:bg-[#ff7ac6] dark:text-white" >Please Login</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
