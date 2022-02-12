import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/switch";
import { createRef, useEffect, useState } from "react";
import Editor from "../components/Editor";
import exportIcon from "../svg/exporticon.svg";
import domtoimage from "dom-to-image";

const HomePage = () => {
  const [isDark, setIsDark] = useState<any>(true);
  const [isTransparent, setIsTransparent] = useState<any>(false);
  const [paddingOptions, setPaddingOptions] = useState("");
  const [lang, setLang] = useState("");
  const [themes, setThemes] = useState("");
  const [bg, setBg] = useState(``);
  const [src, setSrc] = useState("");
  const boxRef = createRef<any>();

  useEffect(() => {
    switch (themes) {
      case "beige":
        setBg(`bg-gradient-to-br from-themes-beigeFrom to-themes-beigeTo`);
        break;
      case "purple":
        setBg(`bg-gradient-to-br from-themes-purpleFrom to-themes-purpleTo`);
        break;
      case "green":
        setBg(`bg-gradient-to-br from-themes-greenFrom to-themes-greenTo`);
        break;
      case "blue":
        setBg(`bg-gradient-to-br from-themes-blueFrom to-themes-blueTo`);
        break;
      default:
        setBg(`bg-gradient-to-br from-themes-beigeFrom to-themes-beigeTo`);
        break;
    }
  }, [themes]);

  const controls = [
    { color: "bg-controls-red", id: 1 },
    { color: "bg-controls-yellow", id: 2 },
    { color: "bg-controls-green", id: 3 },
  ];

  const handlePadding = (e: any) => {
    setPaddingOptions(e.target.name);
  };

  const handleLang = (e: any) => {
    setLang(e.target.name);
  };

  const handleTheme = (e: any) => {
    setThemes(e.target.name);
  };

  const handleExport = (dom: any) => {
    var scale = 2;
    domtoimage
      .toPng(dom, {
        width: dom.clientWidth * scale,
        height: dom.clientHeight * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
        },
      })
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        setSrc(img.src);
      })
      .catch(function (err) {
        console.error("oops, something went wrong!", err);
      });
  };

  return (
    <div className="container">
      <div
        ref={isTransparent ? null : boxRef}
        className={`w-auto max-w-7xl  min-h-96 h-auto mb-14 ${
          paddingOptions ? paddingOptions : "p-7"
        } ${isTransparent ? "transparentBg" : bg}`}
      >
        <div ref={isTransparent ? boxRef : null}>
          <div
            className={`${
              isDark ? "bg-secondary-code" : "bg-secondary-light"
            }  rounded-xl  overflow-hidden  `}
          >
            <div className="w-full h-8 mb-4 rounded-t-xl flex justify-between items-end  pl-4  pr-4 ">
              <div className="flex w-auto ">
                {controls.map((item) => (
                  <span
                    key={item.id}
                    className={`w-4 h-4 rounded-full mr-3 block ${item.color}`}
                  ></span>
                ))}
              </div>
              <input
                type="text"
                placeholder="untitled-1"
                className="input-title"
              />
              <div className="w-20"></div>
            </div>

            <Editor lang={lang} isDark={isDark} />
          </div>
        </div>
      </div>

      <div className="mx-auto w-9/12 h-16 border-2 border-primary-200  rounded-md flex justify-between items-center pl-3 pr-3">
        <div className="flex items-center  ">
          <div className="flex items-center mr-6 cursor-pointer">
            <Menu>
              <MenuButton
                as={Button}
                _focus={{}}
                bg="none"
                _hover={{}}
                _active={{}}
              >
                <h1 className="text-primary-400 mr-3 font-medium">
                  background
                </h1>
              </MenuButton>
              <MenuList bg='#fde8be' border="1px solid #F6C76E">
                <MenuItem name="beige" onClick={handleTheme}>
                  Beige
                </MenuItem>
                <MenuItem name="purple" onClick={handleTheme}>
                  purple
                </MenuItem>
                <MenuItem name="green" onClick={handleTheme}>
                  green
                </MenuItem>
                <MenuItem name="blue" onClick={handleTheme}>
                  blue
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <h1 className="text-primary-400 mr-3 font-medium">light mode</h1>
            <Switch
              colorScheme="orange"
              onChange={() => setIsDark((prev: any) => !prev)}
              value={isDark}
            />
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <h1 className="text-primary-400 mr-3 font-medium">transparent</h1>
            <Switch
              colorScheme="orange"
              value={isTransparent}
              onChange={() => setIsTransparent((prev: any) => !prev)}
            />
          </div>
          <div className="flex items-center mr-4 cursor-pointer">
            <Menu>
              <MenuButton
                as={Button}
                _focus={{}}
                bg="none"
                _hover={{}}
                _active={{}}
              >
                <h1 className="text-primary-400  font-medium">padding</h1>
              </MenuButton>
              <MenuList>
                <MenuItem name="p-5" onClick={handlePadding}>
                  5
                </MenuItem>
                <MenuItem name="p-7" onClick={handlePadding}>
                  7
                </MenuItem>
                <MenuItem name="p-10" onClick={handlePadding}>
                  10
                </MenuItem>
                <MenuItem name="p-16" onClick={handlePadding}>
                  16
                </MenuItem>
                <MenuItem name="p-20" onClick={handlePadding}>
                  20
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <Menu>
              <MenuButton
                as={Button}
                _focus={{}}
                bg="none"
                _hover={{}}
                _active={{}}
              >
                <h1 className="text-primary-400 mr-3 font-medium">language</h1>
              </MenuButton>
              <MenuList>
                <MenuItem name="html" onClick={handleLang}>
                  HTML
                </MenuItem>
                <MenuItem name="css" onClick={handleLang}>
                  CSS
                </MenuItem>
                <MenuItem name="javascript" onClick={handleLang}>
                  JAVASCRIPT
                </MenuItem>
                <MenuItem name="jsx" onClick={handleLang}>
                  JSX
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <div
          className="flex items-center bg-primary-200 px-3 h-8 rounded-lg cursor-pointer"
          onClick={() => handleExport(boxRef.current)}
        >
          <h1 className="font-medium select-none text-primary-400">Export</h1>{" "}
          <img
            className="w-3 select-none ml-2"
            src={exportIcon}
            alt="export icon"
          />
        </div>
        <a href={src} download="theme">
          down
        </a>
      </div>
    </div>
  );
};

export default HomePage;
