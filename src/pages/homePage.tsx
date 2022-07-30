import domtoimage from 'dom-to-image'
import Editor from '../components/Editor'
import { ChangeEvent, createRef, useEffect, useState } from 'react'
import { BiExport } from 'react-icons/bi'
import Modal from '../components/modal'
import ListBox from '../utils/listBox'
import {
  bgItems,
  langItems,
  paddingItems,
} from '../components/menuItems/MenuItems'
import { SwitchToggle } from '../utils/Switch'

const HomePage = (): JSX.Element => {
  const [paddingOptions, setPaddingOptions] = useState<string>('')
  const [lang, setLang] = useState<string>('')
  const [themes, setThemes] = useState<string>('')
  const [isDark, setIsDark] = useState<boolean>(false)
  const [isTransparent, setIsTransparent] = useState<boolean>(false)
  const [bg, setBg] = useState<string>(``)
  const [src, setSrc] = useState<string>('')
  const [isOpen, setIsopen] = useState<boolean>(false)
  const [codeTitle, setCodeTitle] = useState<string>('')

  const boxRef = createRef<HTMLDivElement>()

  useEffect(() => {
    switch (themes.toLowerCase()) {
      case 'beige':
        setBg(`bg-gradient-to-br from-themes-beigeFrom to-themes-beigeTo`)
        break
      case 'purple':
        setBg(`bg-gradient-to-tr from-themes-purpleFrom to-themes-purpleTo`)
        break
      case 'green':
        setBg(`bg-gradient-to-br from-themes-greenFrom to-themes-greenTo`)
        break
      case 'blue':
        setBg(`bg-gradient-to-br from-themes-blueFrom to-themes-blueTo`)
        break
      case 'white':
        setBg(`bg-gradient-to-br from-slate-200 to-slate-600`)
        break
      default:
        setBg(`bg-gradient-to-br from-themes-beigeFrom to-themes-beigeTo`)
        break
    }
  }, [themes])

  const controls = [
    { color: 'bg-controls-red', id: 1 },
    { color: 'bg-controls-yellow', id: 2 },
    { color: 'bg-controls-green', id: 3 },
  ]

  const handlePadding = (item: string) => {
    setPaddingOptions(item)
  }

  const handleLang = (item: string) => {
    setLang(item)
  }

  const handleTheme = (item: string) => {
    setThemes(item)
  }

  const handleExport = (node: HTMLElement | any) => {
    let scale = 2
    domtoimage
      .toPng(node, {
        width: node.clientWidth * scale,
        height: node.clientHeight * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left',
        },
      })
      .then(dataUrl => {
        let img = new Image()
        img.src = dataUrl
        setSrc(img.src)
      })
      .catch(function (err) {
        console.error('oops, something went wrong!', err)
      })
  }

  return (
    <div className="container ">
      <div
        ref={!isTransparent ? boxRef : null}
        className={` max-w-7xl min-h-96 h-auto mb-14 w-screen sm:w-auto ${
          paddingOptions ? paddingOptions : 'p-7'
        } ${isTransparent ? 'transparentBg' : bg}`}
      >
        <div ref={isTransparent ? boxRef : null}>
          <div
            className={`${
              !isDark ? 'bg-secondary-code' : 'bg-secondary-light'
            }  rounded-xl overflow-hidden shadow-2xl`}
          >
            <div className="w-full h-[26px] mb-4 rounded-t-xl flex justify-between items-end px-4 ">
              <div className="flex w-auto">
                {controls.map(item => (
                  <span
                    key={item.id}
                    className={`w-[13px] h-[13px] rounded-full mr-2 block ${item.color}`}
                  ></span>
                ))}
              </div>
              <input
                type="text"
                value={codeTitle}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCodeTitle(e.target.value)
                }}
                placeholder="untitled"
                className="bg-transparent border-none text-center outline-none h-4 text-[14px] w-full font-light placeholder:text-slate-400 text-slate-400"
              />
              <div className="w-20"></div>
            </div>

            <Editor lang={lang} isDark={isDark} />
          </div>
        </div>
      </div>

      <div className="mx-auto min-w-9/12 w-screen sm:w-auto flex-wrap h-auto py-3 border-2 border-primary-200  rounded-md flex justify-between items-center pl-3 pr-3 ">
        <div className="flex items-center flex-wrap  ">
          <div className="flex items-center mr-3 cursor-pointer">
            <ListBox items={bgItems} handleClick={handleTheme} type="bg" />
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <label
              htmlFor="lightmode"
              className="text-primary-400 mr-3 font-normal cursor-pointer select-none"
            >
              light mode
            </label>
            <SwitchToggle isEnabled={isDark} setIsEnabled={setIsDark} />
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <label
              htmlFor="transparent"
              className="text-primary-400 mr-3 font-normal cursor-pointer select-none"
            >
              transparent
            </label>
            <SwitchToggle
              isEnabled={isTransparent}
              setIsEnabled={setIsTransparent}
            />
          </div>
          <div className="flex items-center  cursor-pointer ">
            <ListBox
              items={paddingItems}
              handleClick={handlePadding}
              type="padding"
            />
          </div>
          <div className="flex items-center mr-6 cursor-pointer">
            <ListBox items={langItems} handleClick={handleLang} type="lnag" />
          </div>
        </div>

        <button
          className="bg-primary-200 px-4 py-1 hover:bg-primary-100 border-2 border-primary-200 transition-all active:bg-primary-200 font-medium text-primary-400 rounded-lg flex items-center"
          onClick={() => {
            setIsopen(true)
            handleExport(boxRef.current)
          }}
        >
          Export
          <BiExport style={{ marginLeft: '10px', color: '#3E2013' }} />
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        setIsopen={setIsopen}
        src={src}
        title={codeTitle}
      />
    </div>
  )
}

export default HomePage
