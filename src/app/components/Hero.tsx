import Image from "next/image";
import logo from "../assets/logo.png";

export default function Hero() {
  
  return (
    <section
      id="home"
      className="bg-black text-white flex flex-col justify-center items-center "
    >
      <Image
        src={logo}
        alt="Logo da Comunidade Coding Ferpa"
        width={700}
        height={700}
        priority
      />
    </section>
  );
}
