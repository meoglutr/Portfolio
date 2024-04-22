import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let links = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımda", href: "/about" },
    { name: "Projelerim", href: "/projects" },
    
  ];

  return (
    <header className="bg-[#263238] p-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-white text-2xl mb-4 lg:mb-0 lg:mr-4">
            Mehmet Elifoğlu
          </h1>
          <nav>
            <ul className="flex">
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
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
