import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 mt-10 lg:mt-32" id="contact">
      <h2 className="text-4xl font-bold text-base-content">Get in touch</h2>
      <p className="pt-2 pb-4 text-base-content-secondary max-w-lg">
        Whether you have a concern or simply want to say hello, I am here to
        facilitate communication with you.
      </p>
      <div className="flex gap-4 items-center mt-4">
        <a
          href="https://www.facebook.com/rupomsarker.creator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookCircleLine className="w-9 h-9 fill-base-content-secondary hover:fill-primary" />
        </a>
        <a
          href="https://www.instagram.com/rupomsarker.creator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-8 h-8 fill-base-content-secondary hover:fill-primary" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=8801408011990&text=Hi%2C%20can%20we%20have%20a%20small%20discussion%3F/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="w-8 h-8 fill-base-content-secondary hover:fill-primary" />
        </a>
        <a
          href="https://www.youtube.com/@rupomsarker.creator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineYoutube className="w-9 h-9 fill-base-content-secondary hover:fill-primary" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
