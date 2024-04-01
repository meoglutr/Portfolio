import React from "react";
import Bootstrap from "../Icons/Bootstrap_logo.svg";
import Csharp from "../Icons/csharp-original.svg";
import Css from "../Icons/css3-original-wordmark.svg";
import Html from "../Icons/html5-original-wordmark.svg";
import Javascript from "../Icons/javascript-original.svg";
import Photoshop from "../Icons/adobe-photoshop-svgrepo-com.svg";
import ReactIcon from "../Icons/react-original-wordmark.svg";
import linkedin from "../Icons/linkedin-big-logo.png";
import GithubIcon from "../Icons/github.png";
import Instagram from "../Icons/instagram.png";
import Medium from "../Icons/medium.png";
import { list } from "postcss";

function Home() {
  let links = [
    {
      name: "Instagram",
      photo: Instagram,
      href: "https://www.instagram.com/mehmet_elifoglu_/",
    },
    {
      name: "linkedin",
      photo: linkedin,
      href: "https://www.linkedin.com/in/mehmet-elifo%C4%9Flu/",
    },
    { name: "github", photo: GithubIcon, href: "https://github.com/meoglutr" },
    {
      name: "medium",
      photo: Medium,
      href: "https://medium.com/@mehmeteoglutr",
    },
  ];

  let abilties = [
    Html,
    Css,
    Bootstrap,
    Javascript,
    Csharp,
    ReactIcon,
    Photoshop,
  ];
  return (
    <>
      <div className="mx-auto">
        <div className="row flex w-full justify-center ">
          <div className="p-5 w-max h-max border-0 border-white border-opacity-20 ">
            <div className="flex items-center flex-col ">
              <div>
                <img
                  className="bg-transparent"
                  src="src/images/ProfileFoto.png"
                  alt=""
                />
              </div>
              <h1 className="font-bold text-2xl">Mehmet ELifoğlu</h1>
              <div className="flex items-center">
                {links.map((link, index) => (
                  <a
                    target="_blank"
                    key={index}
                    href={link.href}
                    className="mx-2"
                  >
                    <img src={link.photo} className="w-[40px] h-auto  mt-5" />
                  </a>
                ))}
              </div>
              <div className="row flex w-full justify-center flex-col items-center mt-5">
                <ul className="flex">
                  {abilties.map((abiltie, key) => (
                    <li key={key} className="list-none m-3">
                      <img src={abiltie} className="w-10 h-auto " />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
