import templateOne from "../svg/templateOne.svg";
import templateTwo from "../svg/templateTwo.svg";
import templateThree from "../svg/templateThree.svg";
import templateFour from "../svg/templateFour.svg";
import { Link } from "react-router-dom";

const TemplatePage = () => {
  const templates = [
    { id: 1, src: templateOne },
    { id: 2, src: templateTwo },
    { id: 3, src: templateThree },
    { id: 4, src: templateFour },
  ];

  return (
    <div className="p-10">
      <div className="text-center">
        <p className="font-bold text-5xl text-primary-400">The templates</p>
        <p className="font-bold text-5xl text-primary-400">we have</p>
        <p className="font-medium mt-6" style={{ color: "#9B8E88" }}>
          You can use these templates
        </p>
        <div className="w-full flex flex-wrap justify-evenly mb-6">
          {templates.map((item) => (
            <Link to="/" key={item.id}>
              <img src={item.src} alt="" className="mt-16" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
