import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdMoon } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  function handleChange(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem('language', e.target.value)
  }
  useEffect(() =>{
    if (localStorage.getItem('language')) {
    i18n.changeLanguage(localStorage.getItem('language'));
    }else{
        i18n.changeLanguage('en');
    }
  }, [])

  return (
    <div className="bg-[#f0f6ff]">
      <div className="navBar py-3 flex justify-between align-element container px-16">
        <div className="logo ">
          <button className="text-4xl text-white w-14 rounded-lg h-12 bg-[#0069e0]">
            C
          </button>
        </div>
        <div className="navLink pt-3 ">
          <ul className="flex gap-8">
            <li>
              <NavLink
                className="text-lg navbarLInk rounded-lg duration-300 p-2"
                to="/">
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg navbarLInk rounded-lg duration-300 p-2"
                to="/about">
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg navbarLInk rounded-lg duration-300 p-2"
                to="/products">
                {t("products")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg navbarLInk rounded-lg duration-300 p-2"
                to="/cart">
                {t("cart")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="icons flex  gap-4 pt-3">
          <IoMdMoon className="cursor-pointer text-2xl" />
          <Link to='/cart'><BsCart3 className="cursor-pointer text-2xl" /></Link>
          <select
            name=""
            id=""
            value={lang}
            onChange={handleChange}
            className="border">
            <option value="en">English</option>
            <option value="uz">Uzbek</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
