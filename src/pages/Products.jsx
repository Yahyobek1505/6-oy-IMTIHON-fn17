import React from "react";
import { useTranslation } from "react-i18next";
import { PuffLoader } from "react-spinners";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Card from '../components/Card'

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
        i18n.changeLanguage('uz');
    }
  }, [])

  useEffect(() => {
    setLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>{
        setLoading(false);
      })
  }, []);
  return (
    <div className="dark:bg-[#272935] dark:text-white">
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <section className="form-section mt-20 container rounded-md p-8 max-w-[1160px] pb-6 bg-[#f0f6ff] dark:bg-[#1e2029] dark:text-white">
        <div className="form-box dark:bg-[#1e2029] dark:text-white">
          <div className="input-rows dark:bg-[#1e2029] dark:text-white ">
            <form className="flex gap-4 dark:bg-[#1e2029] dark:text-white">
              <div className="search dark:bg-[#1e2029] dark:text-white">
                <label
                  htmlFor="search"
                  className="block ml-2 text-xl text-slate-500 mb-2 ">
                  {t("search")}
                </label>
                <input
                  type="search"
                  className="w-60 h-12 outline-[#bcd5fc] rounded-md indent-4  duration-300 border-2 border-gray-500 dark:bg-[#1e2029] dark:text-white"
                />
              </div>
              <div className="search">
                <label
                  htmlFor="search"
                  className="block ml-2 text-xl text-slate-500 mb-2 ">
                  {t("sort1")}
                </label>
                <select
                  name=""
                  id=""
                  className="w-60 h-12  outline-[#bcd5fc] rounded-md indent-4  duration-300 border-2 border-gray-500 text-xl dark:bg-[#1e2029] dark:text-white">
                  <option value="all">all</option>
                  <option value="all">Tables</option>
                  <option value="all">Chairs</option>
                  <option value="all">Kids</option>
                  <option value="all">Sofas</option>
                  <option value="all">Beds</option>
                </select>
              </div>
              <div className="search">
                <label
                  htmlFor="search"
                  className="block ml-2 text-xl text-slate-500 mb-2 ">
                  {t("sort2")}
                </label>
                <select
                  name=""
                  id=""
                  className="w-60 h-12  outline-[#bcd5fc] rounded-md indent-4  duration-300 border-2 border-gray-500 text-xl dark:bg-[#1e2029] dark:text-white">
                  <option value="all">all</option>
                  <option value="all">Modezna</option>
                  <option value="all">Luxora</option>
                  <option value="all">Artifex</option>
                  <option value="all">Comfora</option>
                  <option value="all">Homstead</option>
                </select>
              </div>
              <div className="search">
                <label
                  htmlFor="search"
                  className="block ml-2 text-xl text-slate-500 mb-2 ">
                  {t("sort3")}
                </label>
                <select
                  name=""
                  id=""
                  className="w-60 h-12  outline-[#bcd5fc] rounded-md indent-4  duration-300 border-2 border-gray-500 text-xl dark:bg-[#1e2029] dark:text-white">
                  <option value="a-z">a-z</option>
                  <option value="all">z-a</option>
                  <option value="all">high</option>
                  <option value="all">low</option>
                </select>
              </div>
            </form>

            <div className="button dark:bg-[#1e2029] dark:text-white">
              <button
                type="submit"
                className="btn btn-primary text-2xl btn-sm w-64 mt-10">
                {t("searchInput")}
              </button>
              <button className="btn btn-danger btn-sm w-64 mt-10 ml-20 text-2xl dark:bg-[#1e2029] dark:text-white">
                {t("reset")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="cardion pb-10">
        <div className="flex flex-wrap gap-4 align-middle justify-center">
          
          {
           loading && <PuffLoader color="#000000" className="mt-20" />
          }
          {
            !loading && data && data.map((product, index) => {
              return (
                <Card key={index}  product = {product}></Card>
              );
            })}
          
        </div>
      </section>
    </div>
  );
}

export default Products;
