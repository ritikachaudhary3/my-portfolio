import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiFigma, SiMongodb } from "react-icons/si";

const About = () => {
  const skillsUsingNow = [
    { icon: <FaHtml5 style={{ color: "#E34F26" }} />, title: "HTML5" },
    { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, title: "CSS3" },
    { icon: <FaJs style={{ color: "#F7DF1E" }} />, title: "JavaScript" },
    { icon: <FaReact style={{ color: "#61DAFB" }} />, title: "React" },
    {
      icon: <SiTailwindcss style={{ color: "#38B2AC" }} />,
      title: "Tailwind CSS",
    },
    { icon: <FaGithub style={{ color: "#ffffff" }} />, title: "GitHub" },
    { icon: <SiFigma style={{ color: "#F24E1E" }} />, title: "Figma" },
  ];

  const skillsLearning = [
    { icon: <SiExpress style={{ color: "#ffffff" }} />, title: "Express.js" },
    { icon: <FaNodeJs style={{ color: "#339933" }} />, title: "Node.js" },
    { icon: <SiMongodb style={{ color: "#47A248" }} />, title: "MongoDB" },
  ];

  return (
    <section className="min-h-screen flex flex-col px-8 md:px-24 py-10 text-gray-300">
      {/* About Me Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-justify">
          Hello! I'm a passionate and motivated MERN Stack Developer with a
          strong foundation in building dynamic and responsive web applications.
          I love turning ideas into reality through code and constantly seek
          opportunities to learn and grow. I'm excited to contribute to
          real-world projects and grow as a full-stack developer.
        </p>
      </div>

      {/* Education Section */}
      {/* <div className="mb-10  text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Education</h1>
        <p className="text-lg mb-2">2021 - 2024</p>
        <p className="text-xl font-semibold mb-4">B.Sc in Information Technology</p>
        <p className="text-lg mb-4">Dev Bhoomi Uttarakhand University, Dehradun</p>
      </div> */}

      {/* Skills Section */}
      <div className="mb-16 flex flex-col gap-10 items-center">
        <h1 className="text-4xl font-bold text-white">Skills</h1>

        {/* Using Now */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-6">Using Now:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skillsUsingNow.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning */}
        <div className="w-full mt-10">
          <h2 className="text-2xl font-semibold mb-6">Learning:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {skillsLearning.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-10 mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Education</h1>
        <p className="text-lg mb-2">2021 - 2024</p>
        <p className="text-xl font-semibold mb-4">
          B.Sc in Information Technology
        </p>
        <p className="text-lg">Dev Bhoomi Uttarakhand University, Dehradun</p>
      </div>
    </section>
  );
};

export default About;
