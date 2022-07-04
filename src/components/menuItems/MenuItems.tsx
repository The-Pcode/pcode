import { DiCss3, DiHtml5, DiJavascript } from 'react-icons/di'
import { IoLogoPython } from 'react-icons/io'
import { BsTextareaResize } from 'react-icons/bs'

const langItems: { title: string; icon: JSX.Element }[] = [
  {
    title: 'JSX',
    icon: (
      <span>
        <DiHtml5 style={{ fontSize: '25px' }} color="#3E2013" />
      </span>
    ),
  },
  {
    title: 'HTML',
    icon: (
      <span>
        <DiCss3 style={{ fontSize: '25px' }} color="#3E2013" />
      </span>
    ),
  },
  {
    title: 'CSS',
    icon: (
      <span>
        <DiJavascript style={{ fontSize: '25px' }} color="#3E2013" />
      </span>
    ),
  },
  {
    title: 'JAVASCRIPT',
    icon: (
      <span>
        <DiJavascript style={{ fontSize: '25px' }} color="#3E2013" />
      </span>
    ),
  },
  {
    title: 'PYTHON',
    icon: (
      <span>
        <IoLogoPython style={{ fontSize: '25px' }} color="#3E2013" />
      </span>
    ),
  },
]

const paddingItems: { title: string; icon: JSX.Element }[] = [
  {
    title: 'p-5',
    icon: (
      <span>
        <BsTextareaResize />
      </span>
    ),
  },
  {
    title: 'p-7',
    icon: (
      <span>
        <BsTextareaResize />
      </span>
    ),
  },
  {
    title: 'p-10',
    icon: (
      <span>
        <BsTextareaResize />
      </span>
    ),
  },
  {
    title: 'p-16',
    icon: (
      <span>
        <BsTextareaResize />
      </span>
    ),
  },
  {
    title: 'p-20',
    icon: (
      <span>
        <BsTextareaResize />
      </span>
    ),
  },
]

const bgItems: { title: string; icon: JSX.Element }[] = [
  {
    title: 'Beige',
    icon: (
      <div
        className={`w-5 h-5 bg-gradient-to-br from-themes-beigeFrom to-themes-beigeTo rounded-full`}
      ></div>
    ),
  },
  {
    title: 'Purple',
    icon: (
      <div
        className={`w-5 h-5 bg-gradient-to-br from-themes-purpleFrom to-themes-purpleTo rounded-full`}
      ></div>
    ),
  },
  {
    title: 'Green',
    icon: (
      <div
        className={`w-5 h-5 bg-gradient-to-br from-themes-greenFrom to-themes-greenTo rounded-full`}
      ></div>
    ),
  },
  {
    title: 'Blue',
    icon: (
      <div
        className={`w-5 h-5 bg-gradient-to-br from-themes-blueFrom to-themes-blueTo rounded-full`}
      ></div>
    ),
  },
  {
    title: 'White',
    icon: (
      <div
        className={`w-5 h-5 bg-gradient-to-br from-slate-200 to-slate-600 rounded-full`}
      ></div>
    ),
  },
]


export { langItems, paddingItems, bgItems }
