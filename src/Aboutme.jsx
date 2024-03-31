import IMAGES from './images/IMAGE'

function Aboutme() {
    const sendEmail = () => {
        window.location.href = 'mailto:mancusocommunity@gmail.com';}
  return (
    <section className="w-screen h-auto sm:py-32 py-10 flex " id="aboutme">
    <div className="container mx-auto flex flex-col justify-center items-center gap-10">
      <ul className="space-y-4 sm:px-0 px-28 text-center">
        <li className=" text-xl text-bluemarinol font-bold">Education:</li>
        <li className="text-lg  text-amarillo">University of Palermo (Argentina) - Image and Sound Design</li>
        <li className="text-lg  text-amarillo">CICE Escuela Profesional de Nuevas Tecnologías (Spain) - Expert UX/UI</li>
        <li className="text-lg  text-amarillo">CodeAcademy, Udemy, FreeCampCode (Online) - Frontend</li>
      </ul>
      <ul className="text-lg w-full text-center sm:space-y-10 space-y-3  flex justify-center items-center flex-col">
        <li className="text-bluemarinol text-xl font-bold ">Languages:</li>
        <div className="flex flex-row pt-5 gap-10">
          <img src={IMAGES.image7} alt="Spanish flag" className="h-8"></img>
          <img src={IMAGES.image8} alt="USA flag" className="h-8"></img>
        </div>
        <button
        className="align-middle select-none font-sans font-bold uppercase text-sm py-3 px-6 rounded-sm bg-transparent border border-bluemarinol text-bluemarinol"
        type="button"
        onClick={sendEmail}
      >
        Send me an email
      </button>
        <div>
          <video src={IMAGES.videomio} className='md:h-[400px] md:[w-300px] sm:border sm:border-bluemarinol botder-none p-5' controls></video>
        </div>
      </ul>
      
    </div>
  </section>
  )
}

export default Aboutme