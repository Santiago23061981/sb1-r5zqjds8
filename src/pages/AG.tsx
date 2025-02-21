import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, ChevronDown } from 'lucide-react';

const AG = () => {
  const [activeTab, setActiveTab] = React.useState<'control' | 'ahorro' | 'decisiones'>('control');

  const handleDemoClick = () => {
    const phoneNumber = '5213320878718';
    const message = encodeURIComponent('Hola, me interesa obtener una demostración de la Administración para Transportistas.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const tabContent = {
    control: {
      title: 'Mayor control',
      items: [
        'Control de pagos a los operadores, liquidaciones',
        'Mejor control de las unidades, Almacén y personal',
        'Control de anticipos y combustible',
        'Alertas en vencimientos de operadores, unidades y mantenimiento',
        'Organizar estados de cuenta por cliente'
      ]
    },
    ahorro: {
      title: 'Más ahorro',
      items: [
        'Eficiencia en el rendimiento y consumo de diésel',
        'Ahorro en los principales gastos de operación',
        'Controlar tus cuentas por cobrar',
        'Realiza proyecciones de cobranza y Cuentas por pagar',
        'Reducir gastos administrativos y operativos'
      ]
    },
    decisiones: {
      title: 'Toma de decisiones',
      items: [
        'Medición y análisis de la rentabilidad del negocio',
        'Integración con cualquier GPS y sistemas de contabilidad',
        'Información unificada para toma de decisiones',
        'Productividad por operador o unidad (liquidación)'
      ]
    }
  };

  const serviceTypes = [
    {
      title: "Carga Pesada",
      features: [
        "Cartas porte",
        "Depósitos",
        "Combustible a crédito",
        "Casetas electrónicas",
        "Maniobras extras",
        "Liquidaciones",
        "Facturación electrónica",
        "Complementos de pago",
        "Cobranza",
        "Pagos a operadores",
        "Compras y Almacén",
        "Mantenimientos a unidades",
        "Bancos",
        "Monitoreo a unidades"
      ],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
    },
    {
      title: "Paqueteria",
      features: [
        "Guías",
        "Almacén para guías",
        "Manifiestos",
        "Traspaleos",
        "Liquidaciones",
        "Facturación electrónica",
        "Complementos de pago",
        "Cobranza",
        "Pago a operadores",
        "Compras",
        "Mantenimientos a Unidades"
      ],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
    },
    {
      title: "Logistica",
      features: [
        "Carta Instrucción",
        "Anticipos a permisionarios",
        "Maniobras extras",
        "Cruces fronterizos",
        "Cierre de viajes",
        "Compras administrativas",
        "Facturación electrónica",
        "Complementos de pago",
        "Cobranza"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  ¿Quieres tener control total de la operación en tu empresa transportista?
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6">
                  Software para Transporte de Carga y Logística
                </h2>
                <p className="text-xl mb-8">
                  Monitorea el rendimiento instantáneamente, optimiza tus procesos y lleva a tu empresa al siguiente nivel, con un sistema especialmente creado para este sector.
                </p>
                <button 
                  onClick={handleDemoClick}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Solicita una demostración sin compromiso
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="Control de Transportes"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Software Description Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Software para Transportistas de todo tamaño
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Centraliza toda la información para mejorar tus procesos, controlando tus ingresos y tus gastos. Con nuestra herramienta AG System y la experiencia que tenemos en el ramo de transportes te apoyaremos con un servicio de soporte y programación de calidad.
                </p>
                <p className="text-xl text-gray-600 mb-6">
                  Ideal para transportistas de carga pesada (unidades propias), paquetería (carga consolidada) y/o logística (permisionarios).
                </p>
                <p className="text-xl text-gray-600">
                  Gestión, optimización y control, para empresas con flotillas u hombre camión.
                  Contamos con equipo de desarrollo, para atender requerimientos especiales.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="Software para Transportistas"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Control de Transporte Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Control de Transporte</h2>
              <p className="text-xl text-gray-600">
                ERP Especializado en Empresas de Transporte
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Con nuestro software obtendrás información real y precisa para la toma de decisiones y
                tendrás mejores resultados económicos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="Control de Transporte"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <div className="space-y-4">
                  {Object.keys(tabContent).map((tab) => (
                    <div key={tab} className="border rounded-lg overflow-hidden">
                      <button
                        className={`w-full px-6 py-4 text-left font-semibold flex items-center justify-between ${
                          activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                        }`}
                        onClick={() => setActiveTab(tab as 'control' | 'ahorro' | 'decisiones')}
                      >
                        {tabContent[tab as keyof typeof tabContent].title}
                        <ChevronDown className={`h-5 w-5 transform transition-transform ${
                          activeTab === tab ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeTab === tab && (
                        <div className="px-6 py-4 bg-gray-50">
                          <ul className="space-y-2">
                            {tabContent[tab as keyof typeof tabContent].items.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="h-2 w-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Updates Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Plataforma actualizada constantemente
                </h2>
                <p className="text-xl text-gray-600">
                  Sabemos que las necesidades van evolucionando, así que estamos en mejora continua añadiendo funcionalidades, así como respondiendo a los requerimientos fiscales, recientemente con el CFDI 4.0 y Carta Porte.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="Plataforma Actualizada"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {serviceTypes.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="h-2 w-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AG;