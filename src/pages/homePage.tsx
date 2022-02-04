const HomePage = () => {
  const controls = [
    { color: "bg-controls-red", id: 1 },
    { color: "bg-controls-yellow", id: 2 },
    { color: "bg-controls-green", id: 3 },
  ];
  return (
    <div className="pt-24  w-full min-h-[50rem] flex flex-col justify-between">
      <div className="mx-auto w-8/12 h-96 bg-gradient-to-tl from-primary-300 to-primary-200 p-7">
        <div className="bg-secondary-code w-full h-full rounded-lg">
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
              contentEditable="true"
              className="outline-none block  text-secondary-title"
            >
              untitle-1
            </span>
            <div className="w-20"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-8/12 h-16 border-2 border-primary-200 rounded-md"></div>
    </div>
  );
};

export default HomePage;
