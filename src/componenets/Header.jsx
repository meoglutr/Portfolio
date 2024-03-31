import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let links = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımda", href: "/about" },
    { name: "Projelerim", href: "/projects" },
    { name: "Cv İndir", href: "" },
  ];

  return (
    <div className="bg-blue p-5">
      <div className="flex justify-between">
        <h1 className="text-white">Mehmet Elifoğlu</h1>
        <ul className="flex">
          {links.map((link, index) => (
            <Link key={index} to={link.href}>
              <li className="text-white m-1">{link.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
