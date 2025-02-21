import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BarChart2 } from 'lucide-react';
import ActionButtons from '../../components/ActionButtons';

const Productos = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 'plan-datos-mensual',
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Plan de Datos Mensual",
      description: "Conectividad confiable para tu dispositivo GPS con cobertura mundial",
      price: 75,
      features: [
        "Capacidad de 10 MB",
        "Disponible en 3 tamaños de SIM",
        "Compatible con Telcel, Movistar y AT&T",
        "SIM Global con cobertura mundial",
        "Activación inmediata",
        "Soporte técnico incluido"
      ]
    },
    {
      id: 'mensualidad-app-moon',
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Mensualidad EasyTracking y Web",
      description: "Acceso mensual a nuestra plataforma de monitoreo",
      price: 160,
      features: [
        "Integración de dispositivo",
        "Acceso a EasyTracking",
        "Acceso a Plataforma Active Moon",
        "Almacenamiento en servidores hasta por 6 meses",
        "Acceso a todas las características mencionadas",
        "Puedes Agregar más de 1,000 modelos de GPS",
        "Puedes Monitorear Celulares",
        "Precio por unidad",
        "**No incluye plan de datos**"
      ]
    },
    {
      id: 'anualidad-app-moon',
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Anualidad EasyTracking y Web",
      description: "Acceso anual a nuestra plataforma de monitoreo",
      price: 1600,
      features: [
        "Integración de dispositivo",
        "Acceso a EasyTracking",
        "Acceso a Plataforma Active Moon",
        "Almacenamiento en servidores hasta por 6 meses",
        "Acceso a todas las características mencionadas",
        "Puedes Agregar más de 1,000 modelos de GPS",
        "Puedes Monitorear Celulares",
        "Precio por unidad",
        "**No incluye plan de datos**"
      ]
    },
    {
      id: 'gps-vehicular-4g-lte',
      image: "https://images.unsplash.com/photo-1592862065010-835c59938214?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS Vehícular 4G LTE",
      description: "Dispositivo AM103 de última generación para rastreo vehicular",
      price: 1450,
      features: [
        "Botón de pánico",
        "Relay incluido",
        "Micrófono integrado",
        "Cable de alimentación incluido",
        "Paro de motor desde la APP"
      ]
    },
    {
      id: 'gps-vehicular-4g-portatil',
      image: "https://images.unsplash.com/photo-1611860664473-67f082bc3831?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador Vehicular 4G Portátil",
      description: "Dispositivo Portátil AM301 de última generación con microfono espia",
      price: 2900,
      features: [
        "Magneto industrial",
        "Batería de litio de larga duración",
        "Alerta por manipulación",
        "IP65 resistente al agua",
        "Memoria de 32 Mb"
      ]
    },
    {
      id: 'gps-4g-solar',
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS 4G solar",
      description: "Dispositivo Semiautónomo AM303 facil instalacion",
      price: 3920,
      features: [
        "Panel solar integrado",
        "Batería de litio de larga duración",
        "Alerta por manipulación",
        "IP67 resistente al agua",
        "Alarma de sabotaje audible"
      ]
    },
    {
      id: 'gps-economico-4g',
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS economico 4G",
      description: "El 4G más económico del mercado AME16",
      price: 950,
      features: [
        "Tecnología 4G",
        "Paro de Motor",
        "Detección de ignición",
        "Alarma de desconexión",
        "Alarma de vibración"
      ]
    },
    {
      id: 'gps-vehicular-obdii-4g',
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS Vehicular OBDII 4G",
      description: "El AM04 es fácil de instalar Plug&Play",
      price: 2250,
      features: [
        "Precisión de kilometraje ≥ 98%",
        "Micrófono espía",
        "Alerta de voz",
        "Análisis de comportamiento de conducción"
      ]
    },
    {
      id: 'gps-personal-4g-ammq',
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS Personal 4G AMMQ",
      description: "Ideal para Adultos Mayores, Niños y Personas Vulnerables",
      price: 1950,
      features: [
        "Batería de hasta 7 días de duración",
        "Resistente al agua IP65",
        "Alarma Sonora",
        "Botón SOS",
        "Valla de Seguridad"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Productos GPS
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dispositivos GPS de última generación con tecnología avanzada y garantía de calidad
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</p>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <BarChart2 className="h-5 w-5 text-blue-600 mr-2" />
                          <span className={feature.startsWith('**') ? 'font-bold' : ''}>
                            {feature.replace(/\*\*/g, '')}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Contratar Ahora
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 text-gray-600">
              <p>Todos los precios son en Pesos Mexicanos (MXN) + IVA</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedProduct && (
        <ActionButtons
          item={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Productos;