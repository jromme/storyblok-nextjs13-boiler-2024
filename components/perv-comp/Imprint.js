import { useState } from "react";

export default function Imprint(imprint) {
  const data = imprint.imprint;

  const [toggleViewMode, setToggleViewMode] = useState(false);

  return (
    <section className="grid grid-cols-1 items-center w-screen">
      <h4
        onClick={() => setToggleViewMode(!toggleViewMode)}
        className="p-s md:p-lg uppercase font-black justify-self-center cursor-pointer"
      >
        {data.title}
      </h4>
      <div
        className={`justify-self-right fixed z-10 w-screen p-l lg:p-xl bg-white text-xl md:text-2xl xl:text-6xl ${
          toggleViewMode ? "bottom-0" : "bottom-hide"
        }`}
        onClick={() => setToggleViewMode(!toggleViewMode)}
      >
        <div className="grid grid-cols-2 pb-5 md:pb-10">
          <h1 className="uppercase font-black">{data.title}</h1>
          <h1 className="uppercase font-black text-right">X</h1>
        </div>
        <h1 className="uppercase font-black">{data.text}</h1>
      </div>
    </section>
  );
}
