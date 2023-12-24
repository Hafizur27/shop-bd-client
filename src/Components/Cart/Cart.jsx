import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cartData, setCartDate] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => setCartDate(res.data[0].products));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Title</th>
              <th>Size</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((data, index) => (
              <tr key={data?.id}>
                <td>{index + 1}</td>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={data?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{data?.title}</td>
                <td>{data?.size}</td>
                <td>{data?.color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
