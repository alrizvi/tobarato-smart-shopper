import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CtaSection = () => {
  const benefits = [
    "Ahorra dinero en cada compra",
    "Compara precios fácilmente",
    "Encuentra ofertas exclusivas",
    "Organiza tus listas de compra",
  ];

  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-neutral mb-4 font-poppins">
                ¡Únete a la comunidad de compradores inteligentes!
              </h2>
              <p className="text-lg text-neutral/70 mb-6 font-inter">
                Descarga la app ahora y comienza a ahorrar en tus compras
                diarias.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-success/10 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-neutral/80 font-inter">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium text-lg px-8 py-6">
                  Descargar App
                </Button>
                <div className="flex space-x-4">
                  <img
                    src="https://www.citypng.com/public/uploads/preview/free-available-on-the-app-store-apple-button-png-11639742555i7lifwrl0p.png"
                    alt="App Store"
                    className="h-10"
                  />
                  <img
                    src="https://cdn.afterdawn.fi/v3/news/original/get-it-on-google-play.png"
                    alt="Google Play"
                    className="h-10"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-1/3 flex justify-center">
              <img
                src="/phone-screen.png"
                alt="To' Barato en acción"
                className="w-56 rounded-[40px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
