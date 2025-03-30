import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo-white.svg"
                alt="To' Barato Logo"
                className="h-10 w-auto"
              />
              {/* <span className="ml-2 text-2xl font-bold text-white font-poppins">
                To' Barato
              </span> */}
            </div>
            <p className="text-gray-400 mb-4 font-inter">
              La mejor app para ahorrar dinero en tus compras en la República
              Dominicana.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 font-inter">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">
              Recursos
            </h3>
            <ul className="space-y-2 font-inter">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">
              Contáctanos
            </h3>
            <ul className="space-y-2 font-inter text-gray-400">
              <li>Santo Domingo, República Dominicana</li>
              <li>info@tobarato.do</li>
              <li>+1 (809) 555-1234</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 font-inter">
            &copy; {new Date().getFullYear()} To' Barato. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-8 font-inter">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
