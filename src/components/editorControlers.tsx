import exportIcon from "../svg/exporticon.svg";
import downIcon from "../svg/downIcon.svg";
import { Switch } from "@chakra-ui/switch";

const EditorControlers = () => {
    return (
        <div className="mx-auto w-8/12 h-16 border-2 border-primary-200  rounded-md flex justify-between items-center pl-3 pr-3">
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
    )
}

export default EditorControlers;
