import React from "react";

function Header() {
  let links = [
    { name: "Anasayfa" },
    { name: "Hakkımda" },
    { name: "Cv İndir" },
  ];
  return (
    <div className="bg-blue p-5 text-white">
      <div className="flex justify-between">
        <h1>Mehmet Elifoğlu</h1>
        <ul className="flex">
          {links.map((link, key) => {
            <li key={key}>{link.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
