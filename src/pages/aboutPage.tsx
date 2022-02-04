import logo from "../svg/logo.svg";

const AboutPage = () => {
  const contributors = [
    {
      id: 1,
      name: "Ali Turkaman",
      src: "https://avatars.githubusercontent.com/u/79016171?v=4",
      github: "https://github.com/aliturkamanjs",
    },
    {
      id: 2,
      name: "Matin Turkaman",
      src: "https://avatars.githubusercontent.com/u/79017406?s=400&u=629c29c0c9542a958247aba7f593e24cee442a9b&v=4",
      github: "https://github.com/matinturkaman",
    },
  ];

  return (
    <div className="pt-10">
      <div className="w-5/12 mx-auto">
        <img src={logo} alt="" className="w-52 mx-auto" />
        <div className="pt-10">
          <h1 className="font-medium text-3xl text-primary-400">
            What does it work?
          </h1>
          <p className="w-8/12 mt-3 text-lg">
            Pcode lets you create and share beautiful images of your source code
          </p>
        </div>
        <div className="pt-10">
          <h1 className="font-medium text-3xl mb-3 text-primary-400">
            Join to improve
          </h1>
          <a
            href="mailto:ali.turckaman81@gmail.com"
            className="w-8/12 text-lg underline"
            style={{ color: "#FF8A00" }}
          >
            Welcome Contributors!
          </a>
        </div>
        <div className="pt-6 flex">
          {contributors.map((item) => (
            <a
              href={item.github}
              key={item.id}
              className="w-1/12 mr-3"
              target="blank"
            >
              <img
                src={item.src}
                alt={item.name}
                className="rounded-full border-2 border-primary-400"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;