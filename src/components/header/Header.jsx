import { AvatarPNG, Linkedin } from "../../assets/image";
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarPNG} alt="avatar" className="avatar" />
              {/*Name and Title*/}
              <h1 className="header-name text-white">
                Collin Belik, <br /> Software Developer
              </h1>
            </div>
            {/*Description*/}
            <p className="header-text text text-white">
              Confident, decisive, responsible, self-motivated professional with
              a high degree of flexibility, resourcefulness, creativity and a
              true passion for excellence. Exceptional leadership,
              organizational, oral/written communication, interpersonal,
              analytical and problem resolution skills. Thrive in both
              independent and collaborative work environments. Seeking an
              aggressive organization offering opportunity for advancement, as
              warranted by demonstrated ability, education and training.
            </p>
          </div>
          {/*Contact Information*/}
          <div className="header=contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  Email: <span className="text">Collin.Belik@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text">
                  Phone: <span className="text">(919) 454-5551</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  Location: <span className="text">Raleigh, NC, USA</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={14} />
                </span>
                <p className="info-item-text">
                  Projects:{" "}
                  <span className="text">
                    <a
                      href="https://github.com/crbelik"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/crbelik
                    </a>
                  </span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLink size={14} />
                </span>
                <p className="info-item-text">
                  Resume:{" "}
                  <span className="text">
                    <a
                      href="https://drive.google.com/file/d/1hkpgGn7QfyC6O2ZKRz2pVWK256Nz6GFR/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  </span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
              <li className="social-item">
                <a
                  href="https://www.linkedin.com/in/collin-belik/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} alt="LinkedIn Link" />
                  <span className="tooltip text">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
