const Footer = (): JSX.Element => {
  return (
    <div className=" w-full h-16 pb-4 text-sm">
      <h1 className="text-center text-base  text-primary-400">
        <a
          className="absolute bottom-3 md:bottom-6 right-0 left-0"
          href="https://github.com/MoltyCode"
        >
          © powered by <span className="font-bold "> moltycode team</span>
        </a>
      </h1>
    </div>
  )
}

export default Footer
