export default function About() {
    return (
      <section id="about" className="py-16 bg-black-600 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Sobre</h2>
        <p className="text-xl text-white mb-8">Conheça um pouco mais sobre a nossa história e missão</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl font-bold text-white mb-2">Missão</h3>
            <p className="text-white">Conectar jovens talentos com o mundo da tecnologia em Fernandópolis</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl font-bold text-white mb-2">Visão</h3>
            <p className="text-white">Ser referência em tecnologia e inovação no interior de São Paulo</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl font-bold text-white mb-2">Valores</h3>
            <p className="text-white">Inovação, diversidade, inclusão e respeito</p>
          </div>
        </div>
      </section>
    )
  }
  