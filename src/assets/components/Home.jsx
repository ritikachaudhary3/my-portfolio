import { FiGithub, FiLinkedin } from "react-icons/fi";
import img from "/src/assets/Ritikaimg.jpg";
import resume from "/src/assets/ritikaportfolio.pdf";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col px-6 md:px-24">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4">
        <div className="text-4xl md:text-4xl font-medium text-transparent bg-clip-text bg-gray-300">
          Rc.
        </div>

        {/* Desktop Navbar Links */}
        <div className="flex items-center space-x-6 text-2xl text-gray-300">
          <a
            href="https://www.linkedin.com/in/ritika-chaudhary11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/ritikachaudhary3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FiGithub />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center flex-1 text-center gap-10 md:gap-24">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-300 text-lg  font-medium md:text-xl">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Ritika Chaudhary
          </h1>
          <h2 className="text-md md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400- to-purple-900 mt-2 mb-6">
            MERN Stack Developer
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-6">
            <a
              href={resume}
              className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
              download="My_resume.pdf"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition"
            >
              Contact Info
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div>
          <img
            src={img}
            alt="Profile"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
