import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 flex flex-col justify-center items-center "
    >
      {/* Subheading */}
      <p className="text-gray-300 mb-8 text-4xl">Get In Touch</p>

      {/* Main Heading */}
      <h2 className="text-3xl font-medium text-white mb-8">Contact Me</h2>

      {/* Contact Options */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-[#fff] border border-gray-700 rounded-full py-4 px-8 shadow-md">
        {/* Email */}
        <a
          href="mailto:chaudharyritika313@gmail.com"
          className="flex items-center space-x-2  hover:text-blue-400 transform hover:scale-105 transition duration-300"
        >
          <FiMail className="text-2xl" />
          <span className="text-lg">chaudharyritika313@gmail.com</span>
        </a>

        {/* Phone */}
        <a
          href="tel:6397631265"
          className="flex items-center space-x-2  hover:text-blue-400 transform hover:scale-105 transition duration-300"
        >
          <FiPhone className="text-2xl" />
          <span className="text-lg">6397631265</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
