import logo from "../assets/tropa.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 pb-0 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Imagem ocupa 50% da largura */}
        <div className="md:w-1/2 w-full">
          <Image
            src={logo}
            alt="Comunidade Coding Ferpa"
            className="w-full rounded-lg shadow-lg"
            layout="responsive"
            width={500} 
            height={500}
          />
        </div>
        
        {/* Texto ocupa 50% da largura */}
        <div className="md:w-1/2 w-full md:pl-12 mt-8 md:mt-0 text-left ml-4 md:ml-0">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase">
            Quem Somos
          </h2>
          <p className="text-lg text-white mb-4">
            Nossa missão é criar um ambiente onde profissionais e estudantes da
            região possam se conectar com a tecnologia de maneira inovadora.
          </p>
          <p className="text-lg text-white">
            Valorizamos o poder das comunidades e acreditamos que, juntos,
            podemos ir mais longe.
            <span className="font-bold text-main-50">
              {" "} Cada pessoa tem algo a oferecer e a ganhar, e essa troca é o que
              nos move.
            </span>
          </p>
          <p className="text-lg text-white mb-4">
            Trabalhamos para democratizar o conhecimento, abrindo portas para
            quem busca aprender e crescer.
          </p>
        </div>
      </div>
    </section>
  );
}
