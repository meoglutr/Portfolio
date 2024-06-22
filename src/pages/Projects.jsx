import React from "react";

function Projects() {
  return (
    <div class="flex justify-center flex-wrap">
      <div class="flex flex-col items-center m-3">
      <div class="w-full sm:w-11/12 lg:w-[800px] h-[400px] sm:h-[890px] bg-zinc-500 m-3">
          <iframe
            class="w-full h-[900px]"
            src="https://imdatogullarigida.com/"
          ></iframe>
        </div>
        <div class="w-full sm:w-11/12 lg:w-[800px] h-[300px] sm:h-[500px]">
          <iframe
            class="w-full h-full"
            src="https://mini-login-panel.vercel.app/"
          ></iframe>
        </div>
        <div class="w-full sm:w-11/12 lg:w-[800px] h-[250px] sm:h-[400px] bg-zinc-500 m-3">
          <iframe
            class="w-full h-full"
            src="https://exchange-rate-pi.vercel.app/"
          ></iframe>
        </div>
        <div class="w-full sm:w-11/12 lg:w-[800px] h-[400px] sm:h-[890px] bg-zinc-500 m-3">
          <iframe
            class="w-full h-full"
            src="https://user-form-pink.vercel.app/"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Projects;
