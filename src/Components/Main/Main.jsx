import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTOCart, addUser } from "../redux/actions/actions";


const Main = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      axios
        .post("https://sports-master-server-hafizur27.vercel.app/checktoken", {
          token: token,
        })
        .then((res) => {
          dispatch(addUser(res.data));
          axios
            .get("https://sports-master-server-hafizur27.vercel.app/cart")
            .then((res) => dispatch(addTOCart(res?.data[0]?.products)));
        });
    }
  }, [token]);

  return (
    <div className="p-6">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
