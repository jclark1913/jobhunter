import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../ThemeContext";

const Homepage = () => {
  const TYPE_DELAY = 2000;
  const typeSequence = [
    "software",
    TYPE_DELAY,
    "data science",
    TYPE_DELAY,
    "product management",
    TYPE_DELAY,
    "marketing",
    TYPE_DELAY,
    "design",
    TYPE_DELAY,
    "finance",
    TYPE_DELAY,
    "human resources",
    TYPE_DELAY,
    "Starfleet",
    TYPE_DELAY,
  ];

  const {theme} = useTheme();

  return (
    <div className="text-primarytext flex justify-center flex-row align-middle w-full flex-grow">
      <img
        className="h-[400px] hidden sm:block"
        src={theme === "dark" ? "/man-reading.svg" : "/man-reading-light.svg"}
      />
      <div className="flex flex-col">
        <h1 className="font-6xl font-bold">JobHunter</h1>
        <h1 className="text-4xl font-bold flex flex-col border p-12 rounded-lg border-normalborder w-full bg-gradient-to-b from-white/5 to-sitebackground shadow-lg text-center">
          <p>Find your next job in</p>
          <div className="text-center">
            <TypeAnimation
              className="text-transparent bg-clip-text bg-gradient-to-r from-gradientstart to-gradientend"
              sequence={typeSequence}
              repeat={Infinity}
            />
          </div>
        </h1>
        <div className="flex flex-row gap-4 items-stretch justify-items-stretch justify-between mt-4">
          <p className="text-lg border rounded-lg p-12  border-normalborder bg-gradient-to-b from-white/5 to-sitebackground shadow-lg">
            Browse{" "}
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gradientstart to-gradientend font-extrabold">
              companies
            </span>
          </p>
          <p className="text-lg border rounded-lg p-12  border-normalborder bg-gradient-to-b from-white/5 to-sitebackground shadow-lg">
            Find{" "}
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gradientstart to-gradientend font-extrabold">
              jobs
            </span>
          </p>
          <p className="text-lg border rounded-lg p-12  border-normalborder bg-gradient-to-b from-white/5 to-sitebackground shadow-lg">
            Jumpstart your{" "}
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gradientstart to-gradientend font-extrabold">
              career
            </span>
          </p>
        </div>
        <small className="text-center mt-4">
          Ready to unlock your career potential?{" "}
          <Link to="/login">Sign in </Link> to your account or{" "}
          <Link to="/signup">register</Link> to get started.
        </small>
      </div>
    </div>
  );
};

export default Homepage;
