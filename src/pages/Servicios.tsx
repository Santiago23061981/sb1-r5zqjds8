import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Truck, Settings, Smartphone, BarChart2, Clock } from 'lucide-react';

const Servicios = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Dispositivos GPS',
      description: 'Equipos de última generación con tecnología 4G LTE, respaldo de batería y múltiples sensores.',
      features: [
        'Instalación profesional incluida',
        'Garantía de 1 año',
        'Soporte técnico especializado'
      ]
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: 'Gestión de Flotas',
      description: 'Sistema integral para administración y control de vehículos comerciales.',
      features: [
        'Control de combustible',
        'Mantenimiento preventivo',
        'Reportes de rendimiento'
      ]
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: 'Plataforma de Monitoreo',
      description: 'Software avanzado para seguimiento en tiempo real y gestión de alertas.',
      features: [
        'Acceso web y móvil',
        'Geocercas ilimitadas',
        'Historial de recorridos'
      ]
    }
  ];

  const products = [
    {
      image: "https://images.unsplash.com/photo-1592862065010-835c59938214?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS Vehícular 4G LTE",
      description: "Dispositivo de última generación para rastreo vehicular",
      price: "MX$1,450",
      features: [
        "Botón de pánico",
        "Relay incluido",
        "Micrófono integrado",
        "Cable de alimentación incluido",
        "Paro de motor desde la APP"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1611860664473-67f082bc3831?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador Vehicular 4G Portátil",
      description: "Dispositivo Portátil AM301 de última generación con microfono espia",
      price: "MX$2,900",
      features: [
        "Magneto industrial",
        "Batería de litio de larga duración",
        "Alerta por manipulación",
        "IP65 resistente al agua",
        "Memoria de 32 Mb"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS 4G solar",
      description: "Dispositivo Semiautónomo AM303 facil instalacion",
      price: "MX$3,920",
      features: [
        "Panel solar integrado",
        "Batería de litio de larga duración",
        "Alerta por manipulación",
        "IP67 resistente al agua",
        "Alarma de sabotaje audible"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS economico 4G",
      description: "El 4G más económico del mercado AME16",
      price: "MX$950",
      features: [
        "Tecnología 4G",
        "Paro de Motor",
        "Detección de ignición",
        "Alarma de desconexión",
        "Alarma de vibración"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS Vehicular OBD2 4G",
      description: "El Plug&Play AM04 de ultima generacion",
      price: "MX$2,250",
      features: [
        "Alarma por voz",
        "Llamada espía",
        "Alerta por exceso de velocidad",
        "Alerta por vibración",
        "Alerta por corte de energía",
        "Alerta por aceleración brusca"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      title: "Rastreador GPS portátil personal 4G",
      description: "Dispositivo hiperportable, super preciso AM46",
      price: "MX$1,950",
      features: [
        "Tamaño compacto",
        "Botón de Pánico",
        "Llamada 2 vías",
        "Resistente al agua IP65",
        "Duración de batería hasta 7 días"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Products Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Productos y Servicios
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos soluciones integrales de rastreo GPS adaptadas a sus necesidades específicas. 
                Combine nuestros productos y servicios para crear la solución perfecta para su negocio.
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nuestros Productos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dispositivos GPS de última generación con tecnología avanzada y garantía de calidad
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <BarChart2 className="h-5 w-5 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors">
                      Solicitar Información
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluciones completas para el monitoreo y gestión de su flota
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesita una solución personalizada?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarle a diseñar la solución perfecta para sus necesidades específicas.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Contactar un Asesor
              <Smartphone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;