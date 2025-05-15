import img1 from "/src/assets/Physio.png";
import img2 from "/src/assets/Stock.png";
import portfolio from "/src/assets/portfolio1.png";
const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      image: portfolio,
      live: "https://my-portfolio-68yt.onrender.com",
    },
    {
      title: "Physiotherapist Website",
      description:
        "Web platform for physiotherapists to manage appointments, patient records, and treatment plans.",
      image: img1,
      live: "https://physiotherapistproject.onrender.com",
    },
    {
      title: "StockMarket Website",
      description:
        "Inventory management platform to track products, stock levels, suppliers, and restocking.",
      image: img2,
      live: "https://stockproject1.onrender.com/",
    },
  ];

  return (
    <section className="py-18 px-6 md:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
        <p className="text-gray-300 text-lg">
          Some of the work I've built recently
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row overflow-hidden bg-gray-800 rounded-xl shadow-lg"
          >
            {/* Left - Image */}
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="flex space-x-6">
                <a
                  href={project.live}
                  className="px-5 py-2 bg-violet-800 text-white rounded-full hover:bg-violet-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
