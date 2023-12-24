import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://aicontentfy.com/hubfs/Blog/b0de44d3-52a2-40cd-84be-9e24848d5fc0.jpg)",
      }}
    >
      <div className="hero-overlay opacity-10"></div>
      <div className="hero-content text-center ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5 text-white font-semibold shadow-md">
          Discover endless possibilities at your fingertips! Shop the latest trends and exclusive deals on our e-commerce platform – where style meets convenience for a seamless shopping experience.
          </p>
          <Link to="/products"><button className="bg-[#0dd567] text-black font-semibold py-2 px-3 rounded-md hover:bg-inherit hover:border hover:border-[#0dd567]  hover:text-black hover:font-semibold">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
