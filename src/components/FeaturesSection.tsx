
import { Scan, Search, Percent, Receipt } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Busca productos",
      description: "Encuentra rápidamente lo que necesitas en nuestra base de datos actualizada."
    },
    {
      icon: <Scan className="h-8 w-8 text-info" />,
      title: "Compara precios",
      description: "Visualiza el mismo producto en diferentes tiendas para encontrar la mejor oferta."
    },
    {
      icon: <Percent className="h-8 w-8 text-secondary" />,
      title: "Detecta ofertas",
      description: "Recibe notificaciones sobre descuentos y promociones en tus productos favoritos."
    },
    {
      icon: <Receipt className="h-8 w-8 text-success" />,
      title: "Crea listas de compra",
      description: "Organiza tus compras y calcula el presupuesto antes de ir a la tienda."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4 font-poppins">
            Beneficios que te <span className="text-primary">encantarán</span>
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto font-inter">
            Descubre todas las ventajas que To' Barato tiene para ofrecerte y cómo puede transformar tu experiencia de compra.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="bg-gray-50 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">{feature.title}</h3>
              <p className="text-neutral/70 font-inter">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
