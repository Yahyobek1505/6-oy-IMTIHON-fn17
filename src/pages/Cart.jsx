import React from "react";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Cartim from "../assets/pexels-3.jpeg";
function Cart() {
  return (
    <div>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <div className="container w-screen ">
        <div class="border-b border-base-300 pb-4 container  mt-10">
          <h2 class="text-3xl font-medium tracking-wider capitalize">
            Shopping Cart
          </h2>
        </div>
        <div className="cardion flex items-center gap-20">
          <div className="image-item mt-4 flex gap-20">
            <img src={Cartim} alt="" className="w-36 h-[120px]  rounded-xl" />
            <div className="desc">
              <h4 className="text-xl ">Contemporary Sofa</h4>
              <p className="text-stone-500 mt-3">Comfora</p>
              <p >Color : <span className="bg-yellow-400 mt-3  w-4 h-4 rounded-full inline-block"> </span></p>
            </div>
          </div>
          <div className="amount">
           <h3 className="mb-2">Amount</h3>
           <select name="" id="" className="w-16 border mb-2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
           </select> <br />
           <a href="#">remove</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
