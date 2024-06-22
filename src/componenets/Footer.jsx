import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { PiMediumLogoBold } from "react-icons/pi";
// import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  let socialMedya = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/mehmet_elifoglu_/",
    },
    {
      name: "Linkedin",
      icon: <IoLogoLinkedin />,
      href: "https://www.linkedin.com/in/mehmet-elifo%C4%9Flu/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/meoglutr",
    },
    {
      name: "Medium",
      icon: <PiMediumLogoBold />,
      href: "https://medium.com/@mehmeteoglutr",
    },
  ];

  let links = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımda", href: "/about" },
    { name: "Projelerim", href: "/projects" },
  ];
  return (
    <footer className="bg-[#37474F] text-white p-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-6 lg:mb-0 lg:w-1/3">
            <h2 className="text-lg font-semibold mb-2">İletişim Bilgileri</h2>
            <p>Adres: Akdam Mahallesi Hisarcık caddesi</p>
            <p className="mt-1"> 5877. sokak Hacılar/Kayseri</p>
            <p className="mt-1">E-posta: mehmeteoglutr@gmail.com</p>
            <p className="mt-1">E-posta: info@mehmetelifoglu.com</p>

          </div>
          <div className="mb-6 lg:mb-0 lg:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Hızlı Bağlantılar</h2>
            <ul>
              {links.map((link, index) => (
                <li key={index} className="ml-4">
                  {link.href ? (
                    <Link to={link.href} className="text-white">
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-gray-300">{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Sosyal Medya</h2>
            <ul>
              {socialMedya.map((link, index) => (
                <li key={index} className="ml-4">
                  {link.href ? (
                    <a
                      href={link.href}
                      className="flex items-center "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="mr-2">{link.icon}</i> {link.name}
                    </a>
                  ) : (
                    <span className="flex items-center">
                      {link.icon} {link.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
