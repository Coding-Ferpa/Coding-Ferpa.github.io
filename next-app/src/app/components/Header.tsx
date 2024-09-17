"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const handleClick = () => {
    window.open("https://wa.me/GRUPODOZAP", "_blank");
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="" alt="Logo" className="h-10 w-auto" />
          <span className="border-l border-gray-500 pl-4">
            Além do Código...
          </span>
        </div>

        <nav>
          <button
            onClick={handleClick}
            className="flex items-center space-x-2 bg-transparent text-white border-2 border-purple-500 rounded-full px-4 py-2 hover:bg-purple-500 hover:text-black transition"
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
