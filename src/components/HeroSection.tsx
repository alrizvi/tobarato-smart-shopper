import { Button } from "@/components/ui/button";
import { ShoppingBag, Tag, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-br from-primary/10 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral mb-4 font-poppins leading-tight">
              Compra más <span className="text-primary">inteligente</span>,
              <br /> ahorra más <span className="text-secondary">dinero</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral/80 mb-8 max-w-lg font-inter">
              To' Barato te ayuda a encontrar los mejores precios en
              supermercados, ferreterías y farmacias de República Dominicana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium text-lg px-8 py-6">
                Descargar App
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 font-medium text-lg px-8 py-6"
              >
                Más información
              </Button>
            </div>
            <div className="flex items-center mt-10 space-x-6">
              <div className="flex items-center">
                <div className="bg-success/10 rounded-full p-2">
                  <Tag className="h-5 w-5 text-success" />
                </div>
                <span className="ml-2 text-sm font-medium">
                  Precios actualizados
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-info/10 rounded-full p-2">
                  <ShoppingBag className="h-5 w-5 text-info" />
                </div>
                <span className="ml-2 text-sm font-medium">+50 tiendas</span>
              </div>
              <div className="flex items-center">
                <div className="bg-warning/10 rounded-full p-2">
                  <TrendingUp className="h-5 w-5 text-warning" />
                </div>
                <span className="ml-2 text-sm font-medium">
                  Ahorra hasta 30%
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <img
              src="/phone-mockup.png"
              alt="App To' Barato"
              className="w-[280px] md:w-[320px] z-10 relative animate-float"
            />
            <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 right-[10%] top-[20%]"></div>
            <div className="absolute w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10 left-[10%] bottom-[20%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
