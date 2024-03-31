import { useState, useEffect } from "react";
import classNames from "classnames";


function Header() {
  const textos = ["Frontend","Image and Sound Design","Expert UX/UI"]; //create my diferents degree
  const [indiceTexto, setIndiceTexto] = useState(0); //create a usestate to change the text
  const [showJumpInEffect, setShowJumpInEffect] = useState(true); // active or desactive effect h1

  useEffect(() => {
    const intervalo = setInterval(() => {
      setShowJumpInEffect(false); // Desactive effect
      setTimeout(() => {
        setShowJumpInEffect(true); //active effect
        setIndiceTexto((indiceTexto + 1) % textos.length); // change words
      }, 1000); //duration
    }, 2000);

    return () => clearInterval(intervalo);
  }, [indiceTexto, textos.length]); //clear intervalo

  const h1Classes = classNames(
    "text-5xl",
    "lg:text-7xl",
    "text-teal-400",
    "font-bold",
    "text-center",
    "text-bluemarinol",
    {
      "animate-fade-up  animate-ease-in": showJumpInEffect, //create h1classes, this is to give same effect each word.
    }
  );

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center gap-32"  id="inicio">
    
          <div className="flex justify-center items-center px-5 w-full h-auto">
            <h1 className={h1Classes}>{textos[indiceTexto]}</h1>
          </div>  
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
          >
            <path
              fill="#77ACA2"
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
            />
          </svg>
        </div>
    </section>
  );
}

export default Header;