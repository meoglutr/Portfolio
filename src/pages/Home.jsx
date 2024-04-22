import React, { useState } from "react";
import pdfUrl from "../Mehmet_Elifoglu_Cv.pdf";

function Home() {
  return (
    <>
      <div className="flex items-center justify-center  m-10">
        <div className="w-[595px] h-[842px] flex items-center justify-center bg-white m-3">
        <iframe width="100%" height="100%" src={pdfUrl}></iframe>
        </div>
      </div>
    </>
  );
}

export default Home;
