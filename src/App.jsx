import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { links } from "./data/data";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  const barOpen = useRef(null);

  // Define style changes based on show state
  const styleChange = {
    height: show ? `${barOpen.current?.getBoundingClientRect().height}px` : "0px",
    overflow: "hidden",
    
  };

  return (
    <main>
      <header className="p-4">
        <section className="flex justify-between max-w-4xl mx-auto">
          <h1 className="font-bold text-lg">LOGO</h1>
          <div className="sm:hidden">
            <FontAwesomeIcon
              onClick={() => setShow(!show)}
              icon={faBars}
              className={`transition duration-500 cursor-pointer hover:rotate-90 ${show ? "rotate-90" : ""}`}
            />
          </div>
        </section>
        <div style={styleChange} className="sm:hidden transition-all duration-500">
          <div ref={barOpen} className="">
            {links.map((link, index) => (
              <p key={index} className="hover:indent-4 cursor-pointer transition-all duration-300 hover:bg-blue-300">{link.text}</p>
            ))}
          </div>
        </div>
      </header>
    </main>
  );
};

export default App;
