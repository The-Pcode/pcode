import templateOne from "../svg/templateOne.svg";

const TemplatePage = () => {
  return (
    <div className="p-10">
      <div className="text-center">
        <p className="font-bold text-5xl text-primary-400">The templates</p>
        <p className="font-bold text-5xl text-primary-400">we have</p>
        <p className="font-medium mt-6" style={{ color: "#9B8E88" }}>
          You can use these templates
        </p>
        <div className="mt-16">
          <img src={templateOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
