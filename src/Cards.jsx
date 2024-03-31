import PropTypes from "prop-types";

function Cards({ imagenurl, alt, titulo, texto, vinculo, boton}) {
  return (
    <div className="flex flex-col mt-6 text-white bg-black bg-opacity-20 shadow-md bg-clip-border rounded-xl w-96 z-20">
      <div className="h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl">
        <img src={imagenurl} alt={alt} />
      </div>
      <div className="p-6">
        <h5 className="mb-2 font-sans text-lg text-bluemarinol sm:text-left text-center antialiased font-semibold leading-snug tracking-normal">
          {titulo}
        </h5>
        <p className="block font-sans text-md text-amarillo antialiased font-light  text-center sm:text-left">
          {texto}
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-center sm:justify-start items-center">
        <button
          className="align-middle select-none font-sans font-bold uppercase text-sm py-3 px-6 rounded-sm bg-transparent border border-amarillo  text-amarillo focus:opacity-[0.85] focus:shadow-none hover:text-teal-400 hover:border-teal-400"
          type="button"
        ><a href={vinculo} target="_blank">
          {boton}</a>
        </button>
      </div>
    </div>
  );
}

Cards.propTypes = {
  imagenurl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  vinculo: PropTypes.string.isRequired,
  boton: PropTypes.string.isRequired,
};

export default Cards;
