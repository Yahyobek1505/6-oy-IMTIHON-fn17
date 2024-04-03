import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import Hero1 from "../../assets/hero1.webp";
import Hero2 from "../../assets/hero2.webp";
import Hero3 from "../../assets/hero3.webp";
import Hero4 from "../../assets/hero4.webp";
function Main() {
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
    fetch(
      "https://strapi-store-server.onrender.com/api/products?featured=true",
      {
        method: "GET",
      }
    )
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
      });
  }, []);

  return (
    <div className="container w-lg-[1240px] mx-auto px-16 pb-10">
      <section className=" row align-element flex py-14">
        <div className=" col-7 gap-2 items-center">
          <div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            {t("title")}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8">
              {t("desc")}
            </p>
            <div className="mt-10">
              <NavLink className="btn btn-primary" to="/products">
                {t("button")}
              </NavLink>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleInterval"
          className="carousel slide col-5 "
          data-bs-ride="carousel-auto">
          <div className="carousel-inner bg-[#021431] rounded-[20px]">
            <div
              className="carousel-item active bg-[#021431] rounded-[20px] p-4"
              data-bs-interval="10000" >

              <img
                src={Hero1}
                className="d-block w-100 h-[400px] rounded-[20px]"
                alt="..."
              />
            </div>
            <div
              className="carousel-item bg-[#021431] rounded-[20px] p-4"
              data-bs-interval="1000">
              <img
                src={Hero2}
                className="d-block w-100 h-[400px] rounded-[20px]"
                alt="..."
              />
            </div>
            <div className="carousel-item bg-[#021431] rounded-[20px] p-4" data-bs-interval="1000">
              <img
                src={Hero3}
                className="d-block w-100 h-[400px] rounded-[20px]"
                alt="..."
              />
            </div>
            <div className="carousel-item bg-[#021431] rounded-[20px] p-4" data-bs-interval="1000">
              <img
                src={Hero4}
                className="d-block w-100 h-[400px] rounded-[20px]"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev w-1"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next w-1"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="feature">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-3xl font-medium tracking-wider capitalize mb-[-10px]">
            {t("selected")}
          </h2>
          {/* <hr className="mt-4 opacity-10"/> */}
        </div>
        <div className="flex flex-wrap gap-4 align-middle justify-center">
        {
           loading && <PuffLoader color="#000000" className="mt-20" />
          }
        {
         !loading && data && data.map((el, index) =>{
            return (
              <div key={index} className="card-wrapper flex ">
          <div className="card border-none w-[22rem] cursor-pointer shadow-md p-2 hover:shadow-2xl duration-200">
            <img
              src={el.attributes.image}
              alt=""
              className="rounded-xl h-64 md:h-48 w-full object-cover mt-4"
            />
            <h2 className="card-title capitalize tracking-wider text-center mt-4">
            {el.attributes.title}
            </h2>
            <p className="text-secondary text-center mt-2">${el.attributes.price}</p>
          </div>
        </div>
            )
          })
        }
        </div>
      </section>
    </div>
  );
}

export default Main;
