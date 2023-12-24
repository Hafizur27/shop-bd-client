/* eslint-disable no-unsafe-optional-chaining */
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addTOCart } from "../../redux/actions/actions";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { userReducer } = useSelector((state) => state);
  const navigate = useNavigate();


  // console.log(userReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const { title, image, variation, _id, des } = location?.state;
  
  
  const handleAddTOCart = () => {
    const data = {
      title: title,
      image: image,
      color: color,
      size: size,
      _id,
      des,
      userEmail: userReducer?.email,
    };
    axios.post("http://localhost:5000/cart", data).then((res) => {
      if (res?.data?.insertedId || res?.data?.result?.modifiedCount) {
        dispatch(addTOCart(data));
        toast.success("Product Added Successfully ", {position: 'top-right'})
        navigate("/cart")
      } else {
        toast.error("Already Added", {position: 'top-right'})
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-[#7a5ac4]">
      <figure>
        <img className="w-full h-[100vh]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="w-1/2 text-gray-600">{des}</p>

        <div className="card-actions py-2">
          <select
            className="w-20 outline-none border border-black rounded-lg px-2 font-semibold"
            name=""
            id=""
            onClick={(e) => setColor(e.target.value)}
          >
            <option selected disabled>Color</option>
            {variation?.color.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
          <select
            className="w-30 outline-none border border-black rounded-lg px-2 font-semibold"
            name=""
            id=""
            onClick={(e) => setSize(e.target.value)}
          >
            <option selected disabled>Size</option>
            {variation?.size.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleAddTOCart}
            className="bg-green-500 text-white py-2 px-3 rounded-md hover:bg-inherit hover:border hover:border-green-500 hover:text-black hover:font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
