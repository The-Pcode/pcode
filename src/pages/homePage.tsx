import exportIcon from "../svg/exporticon.svg";
import downIcon from "../svg/downIcon.svg";
import { Switch } from "@chakra-ui/switch";
import Editor from "../components/Editor";

const HomePage = () => {
  const controls = [
    { color: "bg-controls-red", id: 1 },
    { color: "bg-controls-yellow", id: 2 },
    { color: "bg-controls-green", id: 3 },
  ];
  return (
    <div className="pt-24  w-full min-h-[50rem] h-auto flex flex-col justify-between">
      <div className="mx-auto w-8/12 min-h-96 h-auto bg-gradient-to-tl from-primary-300 to-primary-200 p-7">
        <div className="bg-secondary-code w-full h-full rounded-lg overflow-hidden">
          <div className="w-full h-8  rounded-t-md flex justify-between items-end pb-1 pl-3  pr-3">
            <div className="flex w-20">
              {controls.map((item) => (
                <span
                  key={item.id}
                  className={`w-4 h-4 rounded-full mr-3 block ${item.color}`}
                ></span>
              ))}
            </div>
            <span
              // contentEditable="true"
              className="outline-none block  text-secondary-title"
            >
              untitle-1
            </span>
            <div className="w-20"></div>
          </div>
          <Editor />
        </div>
      </div>
      <div className="mx-auto w-8/12 h-16 border-2 border-primary-200 rounded-md flex justify-between items-center pl-3 pr-3">
        <div className="flex items-center  ">
          <div className="flex items-center mr-6 cursor-pointer">
            <h1 className="text-primary-400 mr-3 font-medium">background</h1>
            <span className="bg-primary-200 w-7 h-7 rounded-full "></span>
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <h1 className="text-primary-400 mr-3 font-medium">dark mode</h1>
            <Switch colorScheme="orange" />
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <h1 className="text-primary-400 mr-3 font-medium">transparent</h1>
            <Switch colorScheme="orange" />
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <h1 className="text-primary-400 mr-3 font-medium">padding</h1>
            <img src={downIcon} alt="" className="select-none" />
          </div>
        </div>

        <div className="flex items-center bg-primary-200 px-3 h-8 rounded-lg cursor-pointer">
          <h1 className="font-medium select-none text-primary-400">Export</h1>{" "}
          <img
            className="w-3 select-none ml-2"
            src={exportIcon}
            alt="export icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
