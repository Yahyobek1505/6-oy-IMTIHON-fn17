import React from 'react'
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
function index(props) {
const {image, title, price, id} = props.data
console.log(id);
  return (
    <div className="card-wrapper flex ">
    <div className="card border-none w-[22rem] cursor-pointer shadow-md p-2 hover:shadow-2xl duration-200">
      <img
        src={image}
        alt=""
        className="rounded-xl h-64 md:h-48 w-full object-cover mt-4"
      />
      <h2 className="card-title capitalize tracking-wider text-center mt-4">
        {title}
      </h2>
      <p className="text-secondary text-center mt-2">
        ${price}
      </p>
    </div>
  </div>
  )
}

export default index
