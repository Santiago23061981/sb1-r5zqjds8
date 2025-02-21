import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Check } from 'lucide-react';
import ActionButtons from '../../components/ActionButtons';

const Paquetes = () => {
  const [activeCategory, setActiveCategory] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const monthlyPlans = [
    {
      id: 'plan-basico',
      name: 'Plan Básico',
      initialFee: '1,500',
      price: 198,
      description: 'Sin plazos forzosos',
      features: [
        'Rastreador GPS 4G económico',
        'Plan de datos mensual',
        'Acceso Mensual a EasyTracking',
        'Acceso Mensual a Plataforma Active Moon',
        'Almacenamiento en servidores hasta por 6 meses',
        'Atención por WhatsApp',
        'Instalación básica',
        'Garantía en equipos de 1 año por defectos de fabrica'
      ],
      recommended: false
    },
    {
      id: 'plan-comodato',
      name: 'Plan Comodato',
      initialFee: '960',
      price: 198,
      description: 'Equipo en comodato con contrato a 3 años',
      features: [
        'Rastreador GPS 4G económico en COMODATO',
        'Plan de datos mensual',
        'Acceso Mensual a EasyTracking',
        'Acceso Mensual a Plataforma Active Moon',
        'Almacenamiento en servidores hasta por 6 meses',
        'Atención por WhatsApp',
        'Instalación básica',
        'Contrato por 3 años'
      ],
      recommended: true
    },
    {
      id: 'plan-integracion',
      name: 'Plan Integración',
      initialFee: '100',
      price: 198,
      description: 'Integra tus GPS y celulares existentes',
      features: [
        'Integración de dispositivos GPS existentes',
        'Plan de datos mensual',
        'Acceso Mensual a EasyTracking',
        'Acceso Mensual a Plataforma Active Moon',
        'Almacenamiento en servidores hasta por 6 meses',
        'Atención por WhatsApp',
        'Soporte para más de 1,000 modelos de GPS',
        'Monitoreo de celulares'
      ],
      recommended: false
    }
  ];

  const annualPlans = [
    {
      id: 'plan-basico-anual',
      name: 'Plan Básico Anual',
      initialFee: '1,500',
      price: 1980,
      description: 'Sin plazos forzosos, pago anual',
      features: [
        'Rastreador GPS 4G económico',
        'Plan de datos por 12 meses',
        'Acceso Anual a EasyTracking',
        'Acceso Anual a Plataforma Active Moon',
        'Almacenamiento en servidores hasta por 6 meses',
        'Atención por WhatsApp',
        'Instalación básica',
        'Garantía en equipos de 1 año por defectos de fabrica',
        '2 meses gratis'
      ],
      recommended: false
    },
    {
      id: 'plan-comodato-anual',
      name: 'Plan Comodato Anual',
      initialFee: '960',
      price: 1980,
      description: 'Equipo en comodato con contrato a 3 años, pago anual',
      features: [
        'Rastreador GPS 4G económico en COMODATO',
        'Plan de datos por 12 meses',
        'Acceso Anual a EasyTracking',
        'Acceso Anual a Plataforma Active Moon',
        'Almacenamiento en servidores hasta por 6 meses',
        'Atención por WhatsApp',
        'Instalación básica',
        'Contrato por 3 años',
        '2 meses gratis'
      ],
      recommended: true
    },
    {
      id: 'plan-integracion-anual',
      name: 'Plan Integración Anual',
      initialFee: '100',
      price: 1980,
      description: 'Integra tus GPS y celulares existentes, pago anual',
      features: [
        'Integración de dispositivos GPS existentes',
        'Plan de datos por 12 meses',
        'Acceso Anual a EasyTracking',
        'Acceso Anual a Plataforma Active Moon',
        'Almacenamiento en servidores hasta por 6 meses',
        'Atención por WhatsApp',
        'Soporte para más de 1,000 modelos de GPS',
        'Monitoreo de celulares',
        '2 meses gratis'
      ],
      recommended: false
    }
  ];

  const activePlans = activeCategory === 'monthly' ? monthlyPlans : annualPlans;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Planes Integrales
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Soluciones completas que incluyen dispositivo, instalación y servicio
              </p>

              <div className="inline-flex rounded-lg border border-gray-200 bg-white p-2 mb-8">
                <button
                  onClick={() => setActiveCategory('monthly')}
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm ${
                    activeCategory === 'monthly'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Planes Mensuales
                </button>
                <button
                  onClick={() => setActiveCategory('annual')}
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm ${
                    activeCategory === 'annual'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Planes Anuales
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {activePlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    plan.recommended ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  {plan.recommended && (
                    <div className="bg-blue-600 text-white text-center py-2">
                      Más Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <div className="mb-2">
                        <span className="text-lg font-semibold">Inscripción: </span>
                        <span className="text-xl font-bold">MX${plan.initialFee}</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">MX${plan.price.toLocaleString('es-MX')}</span>
                        <span className="text-gray-600 ml-2">/{activeCategory === 'monthly' ? 'mes' : 'año'}</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-blue-600 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setSelectedPlan(plan)}
                      className={`w-full py-3 px-6 rounded-full font-medium ${
                        plan.recommended
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      } transition-colors`}
                    >
                      Contratar Ahora
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 text-gray-600">
              <p>Todos los precios son en Pesos Mexicanos (MXN) + IVA</p>
              {activeCategory === 'annual' && (
                <p className="text-blue-600 font-semibold mt-2">
                  ¡Ahorra hasta 2 meses al contratar un plan anual!
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {selectedPlan && (
        <ActionButtons
          item={selectedPlan}
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
};

export default Paquetes;