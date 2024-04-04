import { useState, useEffect } from "react"
import { useParams, useNavigate, NavLink } from "react-router-dom"
import { PuffLoader } from "react-spinners";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
// import { t, i18n} from "i18next";
function info() {
 const [product, setProduct] = useState({});
 const [loading, setLoading] = useState(false);
 const {id} = useParams();
 const navigate = useNavigate();
 useEffect(() => {
  if (id) {
    setLoading(true)
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`, {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
      setProduct(data.data.attributes)
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() =>{
      setLoading(false)
    })
  }else{
    navigate('/')
  }
 }, [id])
  return (
    <>
    <TopHeader></TopHeader>
    <Navbar></Navbar>
     {
       loading && <PuffLoader color="#000000" className="mt-[200px] ml-[700px]" />
     }
     {
      !loading ?
        <div className="container mt-20 pb-10 dark:bg-[#181920] dark:text-white" >
     <div className="product flex  align-middle justify-center  gap-4">
      <div className="image-side w-[40%]">
        <NavLink to='/' className="hover:underline duration-300 ml-4">Home</NavLink>   > 
        <NavLink to='/products' className="hover:underline duration-300 ml-2">Product </NavLink> 
      <img src={product.image} alt=""  className="w-[100%] rounded-2xl mt-2  h-[350px]"/>
      </div>
      <div className="title-side ml-4 w-[50%] ">
      <h1 className="capitalize text-3xl font-bold mt-4">{product.title}</h1>
      <h3 className="capitalize text-slate-300 text-2xl font-medium mt-2">{product.company}</h3>
      <h4 className=" text-slate-900 text-2xl font-regular mt-2 mb-2">${product.price}</h4>
      <p>{product.description}</p>
      <p className="text-2xl font-regular mt-2 mb-2">Colors</p>
      <span className=" bg-[#33FF57] cursor-pointer  w-5 h-5 rounded-full inline-block"></span>
      <span className=" bg-[#f1ff33] cursor-pointer w-5 h-5 rounded-full inline-block ml-2"></span>
      <span className=" bg-[#9233ff] cursor-pointer w-5 h-5 rounded-full inline-block ml-2"></span>
      <select name="" id="" className="block mt-2 mb-2 w-40 border outline-slate-500 h-8 rounded-md">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
      <NavLink to='/cart'><button className="btn btn-primary">ADD TO BAG</button></NavLink>
      </div>
     </div>
     </div>
      : ""
     }
    </>
  )
}

export default info
