import logo from "../svg/logo.svg";
import { Link } from "react-router-dom";

const Navigation = () : JSX.Element => {
  return ( 
    <div className="pt-4 px-4 flex w-full justify-between items-center">
      <Link to="/">
        <img className="w-20" src={logo} alt="" />
      </Link>
      <div className="flex">
        <Link to="/template">
          <h1 className="mr-4 text-lg font-medium text-primary-400">
            Template
          </h1>
        </Link>
        <Link to="/about">
          <h1 className="text-lg font-medium text-primary-400">About</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
