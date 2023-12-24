import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, image, variation } = product;
  return (
    <div className="card bg-green-100 shadow-xl border border-[#7a5ac4]">
      <figure>
        <img className="h-[250px] w-full" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg text-gray-800 pt-2">{title}</h2>

        <div className="card-actions justify-start py-2">
          <select
            className="w-20 outline-none border border-black rounded-lg px-2 font-semibold"
            name=""
            id=""
          >
            <option value="color" selected disabled>
              Color
            </option>
            {variation?.color?.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
          <select
            className="w-30 outline-none border border-black rounded-lg px-2 font-semibold"
            name=""
            id=""
          >
            <option value="size" selected disabled>
              Size
            </option>
            {variation?.size.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <Link to={`/products/${product?._id}`} state={product}>
            <button className="bg-[#0dd567] text-white py-[5px] px-[10px] rounded-md hover:bg-inherit hover:border hover:border-[#0dd567] hover:text-black ">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
