import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PenTool as Tool, Settings, Map, Bell, Clock, Shield, Users, BarChart2 } from 'lucide-react';

const Herramientas = () => {
  const tools = [
    {
      icon: <Map className="h-12 w-12 text-blue-600" />,
      title: "Monitoreo en Tiempo Real",
      description: "Visualiza la ubicación exacta de tus vehículos en tiempo real con actualizaciones cada 30 segundos."
    },
    {
      icon: <Bell className="h-12 w-12 text-blue-600" />,
      title: "Sistema de Alertas",
      description: "Recibe notificaciones instantáneas sobre eventos importantes como excesos de velocidad, entradas/salidas de geocercas."
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Historial de Recorridos",
      description: "Consulta el histórico detallado de rutas y paradas de tus vehículos con reportes personalizables."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Control de Seguridad",
      description: "Implementa medidas de seguridad como bloqueo de motor y botón de pánico para proteger tus vehículos."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Gestión de Conductores",
      description: "Administra perfiles de conductores, asignaciones de vehículos y evaluación de desempeño."
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-blue-600" />,
      title: "Reportes y Análisis",
      description: "Genera informes detallados sobre consumo de combustible, tiempos de uso y eficiencia operativa."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Herramientas Avanzadas de Gestión GPS
              </h1>
              <p className="text-xl mb-8">
                Descubre nuestro conjunto completo de herramientas diseñadas para optimizar el control y seguimiento de tu flota vehicular.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Características Principales
              </h2>
              <p className="text-xl text-gray-600">
                Nuestras herramientas están diseñadas para brindarte el máximo control y eficiencia en la gestión de tu flota.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                alt="Dashboard Interface"
                className="rounded-lg shadow-xl"
              />
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Interfaz Intuitiva</h3>
                  <p className="text-gray-600">
                    Diseñada para facilitar la navegación y el acceso rápido a todas las funcionalidades.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalización Avanzada</h3>
                  <p className="text-gray-600">
                    Adapta las herramientas según tus necesidades específicas y preferencias.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Integración Total</h3>
                  <p className="text-gray-600">
                    Todas las herramientas están perfectamente integradas para ofrecer una experiencia fluida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para optimizar tu flota?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza a utilizar nuestras herramientas avanzadas hoy mismo
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Solicitar Demo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Herramientas;