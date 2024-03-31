import IMAGES from "./images/IMAGE"
import Cards from "./Cards.jsx"


function Projects() {
  return (
    <section
      className="w-screen h-auto py-20 flex flex-col justify-center items-center gap-10"
      id="projects"
    >
    <div className="w-full h-auto py-5 flex justify-center items-center">
    <h3 className="text-2xl text-bluemarinol font-bold">Projects:</h3>
    </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 grid-cols-1 gap-5">
        <Cards
          imagenurl={IMAGES.image5}
          alt="Plagamix Website"
          titulo="Plagamix Website"
          texto="Fumigation company from Argentina, this was a project that started from scratch. The logo, webpage, and flyers were created. Photoshop and Wordpress were used for this project."
          boton="Visit Webpage"
          vinculo="https://www.fumigacionesplagamix.com"
        />
        <Cards
          imagenurl={IMAGES.image6}
          alt="Sam's Happy Tails Website"
          titulo="Sam's Happy Tails Website"
          texto="Dog care company from the United States, this was also a project that started from scratch. The logo and webpage were created. Photoshop and Wordpress were used for this project"
          boton="Visit Webpage"
          vinculo="https://samshappytails.com"
        />
        <Cards
          imagenurl={IMAGES.image2}
          alt="GYM Design Website"
          titulo="GYM Design Website"
          texto="Remodeling company in Argentina, this was a project that started from scratch. The logo and webpage were created, Photoshop, HTML, TailwindCSS, and ReactJS were used for this project."
          boton="Visit Webpage"
          vinculo="https://gymdesignreformas.com"
        />
        <Cards
          imagenurl={IMAGES.image9}
          alt="Walter Gallo Memorial Website"
          titulo="Walter Gallo Memorial Website"
          texto="Webpage in memory of Walter Gallo. This project started from scratch and Astro and TailwindCSS were used."
          boton="Visit Webpage"
          vinculo="https://waltergallomemorial.netlify.app"
        />
       
      </div>
    </section>
  )
}

export default Projects