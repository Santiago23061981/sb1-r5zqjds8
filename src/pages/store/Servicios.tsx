import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Wrench, PenTool as Tool, HelpCircle, Clock } from 'lucide-react';
import ActionButtons from '../../components/ActionButtons';

const Servicios = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: 'instalacion-profesional',
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: 'Instalación Profesional',
      description: 'Servicio de instalación profesional de dispositivos GPS',
      price: 750,
      features: [
        'A nivel Nacional',
        'Instalación en sitio',
        'Configuración inicial',
        'Pruebas de funcionamiento',
        '1 hora es el Tiempo estimado de servicio'
      ]
    },
    {
      id: 'asistencia-tecnica',
      icon: <Tool className="h-12 w-12 text-blue-600" />,
      title: 'Asistencia técnica',
      description: 'Servicio de revisión, desinstalación y cambio de SIM',
      price: 700,
      features: [
        'A nivel nacional',
        'Servicio en Sitio',
        'Corrección de falla',
        'Limpieza en el trabajo',
        'Pruebas de funcionamiento'
      ]
    },
    {
      id: 'soporte-tecnico',
      icon: <HelpCircle className="h-12 w-12 text-blue-600" />,
      title: 'Soporte Técnico',
      description: 'Soporte técnico especializado para todos nuestros clientes.',
      price: 0,
      features: [
        'Atención telefónica',
        'Soporte remoto',
        'Mantenimiento preventivo',
        'Actualizaciones de software'
      ]
    }
  ];

  const moreServicesInfo = {
    id: 'more-services',
    title: 'Más Servicios',
    price: 0,
    description: 'Consulta por servicios adicionales y personalizados'
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Servicios
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contamos con personal altamente competitivo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-xl font-bold text-blue-600 mb-4">
                    {service.price === 0 ? 'GRATIS' : `MX$${service.price.toLocaleString('es-MX')}`}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Contratar Ahora
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-8">Todos los precios son en Pesos Mexicanos (MXN) + IVA</p>
              <button
                onClick={() => setSelectedService(moreServicesInfo)}
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Pregunta por más servicios
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedService && (
        <ActionButtons
          item={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Servicios;