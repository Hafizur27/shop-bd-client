import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../Components/redux/actions/actions";


const NavBar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {userReducer }= useSelector((state) => state);
  const dispatch = useDispatch();
 

  

  const handleLogOut = () => {
    axios.post("http://localhost:5000/logout", {user: userReducer}).then((res) => {
      if (res.data.modifiedCount !== 1) {
        localStorage.removeItem("token");
        dispatch(addUser({ email: "", token: "" }));
        navigate("/login");
      }
    });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/cart" className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
         
        </Link>
      </li>
      {token ? (
        <li>
          <a onClick={handleLogOut}>Log Out</a>{" "}
        </li>
      ) : (
        <li>
          <Link to="/logIn">Log In</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#9279cb] mb-5 px-4 rounded-md  font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-40  font-bold"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-semibold">
          SHOP_BD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold text-white">{navOptions}</ul>
      </div>
    </div>
  );
};

export default NavBar;
