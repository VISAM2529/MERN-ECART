import React, { useState, useEffect, createContext, useContext } from "react";
import FilterMobile from "./FilterMobile";
import { categoryContext } from "../../App";
import { Link, useParams } from "react-router-dom";

const idContext = createContext();
// const category = useContext(categoryContext)

function SmartphonesHome() {
  const getUrlId = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://dummyjson.com/products/category/${getUrlId.smartphones}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setData([responseJson.products]);
    };
    fetchApi();
  }, []);
  console.log(data);
  console.log(getUrlId);
  return (
    <idContext.Provider value={data}>
      
      <div className="flex flex-col gap-14 items-center  py-10">
        <div className="flex  flex-wrap gap-5 px-14 justify-center ">
          {data[0]?.map((product) => {
            return (
              <div className="w-72 h-auto shadow-2xl rounded-2xl flex flex-col items-center text-2xl gap-5 hover:-translate-y-3 transition-all ease-in-out duration-300 cursor-pointer phone:w-56">
                <img
                  src={product.thumbnail}
                  className="w-full h-48 bg-contain object-cover rounded-tl-2xl rounded-tr-2xl"
                />
                <div className="flex flex-col gap-5 items-center text-center phone:text-lg">
                  <Link
                    to={`/${getUrlId.smartphones}/${product.id}`}
                    key={product.id}
                  >
                    {product.title}
                  </Link>
                 <div className="flex gap-2 items-center mb-10">
                 <p className="text-xl phone:text-sm">${product.price}</p>
                 <p className="text-sm bg-red-500 px-3 py-1 text-white phone:text-xs">{product.discountPercentage}% off</p>
                 </div>
                </div>
               
              </div>
            );
          })
          }
        </div>
      </div>
    </idContext.Provider>
  );
}

export default SmartphonesHome;
export { idContext };
