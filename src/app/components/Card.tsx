import React from "react";

interface TalkCardProps {
  title: string;
  speaker: string;
  desc: string;
}

const Card: React.FC<TalkCardProps> = ({ title, speaker, desc }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-main-100 shadow-md rounded-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="card-title p-4 bg-main-100">
          <h1 className="text-xl md:text-2xl font-bold mb-2 text-center text-white">
            {title}
          </h1>
        </div>
        <div className="card-content p-4 flex-grow">
          <p className="mb-2 text-gray-200">
            <strong>Palestrante:</strong> {speaker}
          </p>
          <hr className="mb-2 border-gray-400" />
          <p className="text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
