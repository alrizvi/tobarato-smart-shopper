
import { Check, Smartphone, MapPin, ShoppingCart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Descarga la app",
      description: "Disponible gratis para iOS y Android",
      color: "bg-primary"
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Selecciona tu ubicación",
      description: "Encuentra tiendas cercanas a ti",
      color: "bg-info"
    },
    {
      icon: <Check className="h-8 w-8 text-white" />,
      title: "Busca y compara",
      description: "Encuentra los mejores precios",
      color: "bg-secondary"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      title: "Ahorra en tus compras",
      description: "Compra más inteligente",
      color: "bg-success"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4 font-poppins">
            ¿Cómo <span className="text-primary">funciona</span>?
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto font-inter">
            To' Barato es fácil de usar y te ayuda a ahorrar dinero en cada compra con solo seguir estos simples pasos.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-poppins text-center">{step.title}</h3>
                <p className="text-neutral/70 text-center font-inter">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
