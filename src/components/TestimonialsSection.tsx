
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María Rodríguez",
      location: "Santo Domingo",
      quote: "Gracias a To' Barato he ahorrado más de RD$2,000 mensuales en mis compras del supermercado. ¡Increíble!",
      stars: 5,
      image: "/testimonial-1.jpg"
    },
    {
      name: "José Pérez",
      location: "Santiago",
      quote: "La app es súper fácil de usar y me ayuda a encontrar las mejores ofertas en ferreterías cerca de mi casa.",
      stars: 5,
      image: "/testimonial-2.jpg"
    },
    {
      name: "Luisa Méndez",
      location: "La Romana",
      quote: "Ahora puedo comparar precios de medicamentos en distintas farmacias sin tener que ir de un lado a otro.",
      stars: 4,
      image: "/testimonial-3.jpg"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4 font-poppins">
            Lo que dicen nuestros <span className="text-primary">usuarios</span>
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto font-inter">
            Más de 10,000 dominicanos ya están ahorrando con To' Barato. Conoce sus experiencias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image || `https://ui-avatars.com/api/?name=${testimonial.name}&background=random`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=random`;
                  }}
                />
                <div>
                  <h4 className="font-semibold font-poppins">{testimonial.name}</h4>
                  <p className="text-sm text-neutral/60 font-inter">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.stars ? "text-warning fill-warning" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-neutral/80 italic font-inter">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
