import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      price: '299',
      features: [
        'Monitoreo en tiempo real',
        'App móvil incluida',
        'Alertas básicas',
        'Reportes mensuales',
        'Soporte por correo',
      ],
      recommended: false
    },
    {
      name: 'Profesional',
      price: '499',
      features: [
        'Todo lo del plan Básico',
        'Geocercas ilimitadas',
        'Control de combustible',
        'Reportes avanzados',
        'Soporte prioritario 24/7',
      ],
      recommended: true
    },
    {
      name: 'Empresarial',
      price: '799',
      features: [
        'Todo lo del plan Profesional',
        'API personalizada',
        'Dashboard personalizado',
        'Capacitación presencial',
        'Gerente de cuenta dedicado',
      ],
      recommended: false
    }
  ];

  return (
    <section id="planes" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600">
            Selecciona el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
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
                <div className="mb-6">
                  <span className="text-4xl font-bold">MX${plan.price}</span>
                  <span className="text-gray-600">/mes</span>
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
          <p>Compromiso mínimo de 12 meses</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;