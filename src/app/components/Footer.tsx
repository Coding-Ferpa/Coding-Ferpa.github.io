"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; 2024 Coding Ferpa. Todos os direitos reservados.</p>
      <p>
        Desenvolvido com <FontAwesomeIcon icon={faHeart}/> da comunidade para a comunidade.
      </p>
    </footer>
  );
}
