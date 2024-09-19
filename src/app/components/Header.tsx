"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const handleClick = () => {
    window.open("https://chat.whatsapp.com/KgO1mbD0JFWJk6OWjlNQd2", "_blank");
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-0">
          <img src="../assets/icon.png" alt="Logo" className="h-14 w-auto" />
          <span className="text-center sm:text-left sm:border-l sm:border-gray-500 sm:pl-4">
            Comunidade de tecnologia em Fernandópolis
          </span>
        </div>

        <nav>
          <button
            onClick={handleClick}
            className="flex items-center space-x-2 bg-transparent text-white border-2 border-[#4A3D8D] rounded-full px-4 py-2 hover:bg-[#4A3D8D] hover:text-white transition"
          >
            <figure>
            <FontAwesomeIcon icon={faSignIn} className="w-4 h-4" />
            </figure>
            <span className="border-l border-gray-500 pl-4">Participe</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
