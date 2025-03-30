
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="To' Barato Logo" className="h-10 w-auto" />
          <span className="ml-2 text-2xl font-bold text-primary font-poppins">To' Barato</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#como-funciona" className="text-neutral font-medium hover:text-primary transition-colors">
            Cómo funciona
          </a>
          <a href="#beneficios" className="text-neutral font-medium hover:text-primary transition-colors">
            Beneficios
          </a>
          <a href="#testimonios" className="text-neutral font-medium hover:text-primary transition-colors">
            Testimonios
          </a>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            Descargar App
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#como-funciona" className="text-neutral font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Cómo funciona
            </a>
            <a href="#beneficios" className="text-neutral font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Beneficios
            </a>
            <a href="#testimonios" className="text-neutral font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Testimonios
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 text-white w-full">
              Descargar App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
