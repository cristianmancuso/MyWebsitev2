import IMAGES from "./images/IMAGE"

function Skill() {
  return (
    
<section
      className="w-screen h-auto py-20 flex sm:flex-row flex-col  justify-center items-center gap-10"
      id="skill"
    >
      <div className="flex flex-col w-full h-auto  gap-7">
        
        <div className="flex justify-center items-center text-bluemarinol">
            <h3 className="text-center sm:text-2xl text-xl font-bold">My Skills</h3>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 grid-rows-1">
        <div className="flex flex-col justify-center items-center">
        <ul className="text-bluemarinol  text-lg sm:flex  sm:flex-col  sm:justify-center sm:items-center grid grid-cols-1 place-items-center gap-2">
          <li className="transition-transform transform hover:scale-110">
            Adobe After Effects
          </li>
          <li className="transition-transform transform hover:scale-110">
            Adobe Premiere
          </li>
          <li className="transition-transform transform hover:scale-110">
            Adobe XD
          </li>
          <li className="transition-transform transform hover:scale-110">
            Adobe Audition
          </li>
          <li className="transition-transform transform hover:scale-110">
            Adobe Photoshop
          </li>
          <li className="transition-transform transform hover:scale-110">
            Adobe Illustraitor
          </li>
          <li className="transition-transform transform hover:scale-110">
            Sketch
          </li>
          <li className="transition-transform transform hover:scale-110">
            Figma
          </li>
        </ul>
        </div>
  
        <div className="flex justify-center items-center">
        <img
          src={IMAGES.image3}
          alt="imagencode"
          className="sm:h-full  sm:w-full w-38 h-38  sm:px-0 px-10 animate-wiggle animate-infinite animate-duration-[5000ms] animate-ease-in"
        ></img>
        </div>
   
        <div className="flex flex-col justify-center items-center">
        <ul className="text-bluemarinol text-lg sm:flex sm:flex-col sm:justify-center sm:items-center grid grid-cols-1 place-items-center gap-2">
          <li className="transition-transform transform hover:scale-110">
            Wordpress
          </li>
          <li className="transition-transform transform hover:scale-110">
            HTML
          </li>
          <li className="transition-transform transform hover:scale-110">
            CSS/Tailwindcss
          </li>
          <li className="transition-transform transform hover:scale-110">
            Javascript
          </li>
          <li className="transition-transform transform hover:scale-110">
            ReactJS
          </li>
          <li className="transition-transform transform hover:scale-110">
            Astro
          </li>
          <li className="transition-transform transform hover:scale-110">
            Python
          </li>
          <li className="transition-transform transform hover:scale-110">
            SQLite
          </li>
        </ul>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Skill