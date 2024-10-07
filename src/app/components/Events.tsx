import Image from "next/image";
import icon from "../assets/icon.png";

export default function Events() {
  return (
    <section id="events" className="bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 text-left order-2 md:order-1">
          <h2 className="text-4xl font-bold text-white mb-4 uppercase">
            Nossos Encontros
          </h2>
          <p className="text-lg text-white mb-4">
            Participe dos nossos encontros e faça parte da nossa comunidade!
            Venha trocar experiências, aprender e evoluir junto a outros
            apaixonados por tecnologia.
          </p>
          <p className="text-lg text-white mb-4">
            Os encontros acontecem no auditório da{" "}
            <a
              href="https://maps.app.goo.gl/2Evi2eEPt1t386kWA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#51cf91] underline"
            >
              FEF
            </a>
            . Fique ligado nos nossos eventos mensais e venha construir o futuro
            com a gente!
          </p>

          <p className="text-lg text-white">
            Para se manter informado sobre os eventos,{" "}
            <span className="font-bold text-[#51cf91]">
              {" "}
              entre no nosso grupo do WhatsApp!
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image
            src={icon}
            alt="Encontro da Comunidade"
            className="rounded-lg shadow-lg"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
