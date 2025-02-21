import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos aquí para ayudarte. Contáctanos para obtener más información sobre nuestros servicios.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Teléfono</h3>
                  <p className="text-gray-600">+52 33 3012 4111</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Correo Electrónico</h3>
                  <p className="text-gray-600">contacto@activemoongps.com.mx</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Dirección</h3>
                  <p className="text-gray-600">
                    Av. Americas 320<br />
                    Fraccionamiento Altamira, C.P. 45160<br />
                    Zapopan, Jal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nombre Completo
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="text"
                  id="name"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="email"
                  id="email"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="tel"
                  id="phone"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  id="message"
                  rows={4}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;