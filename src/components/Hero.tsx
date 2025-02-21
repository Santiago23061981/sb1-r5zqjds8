import React from 'react';
import { Shield, Clock, MapPin, ArrowRight, Truck, BarChart2, Users, Smartphone, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Monitoreo GPS en Tiempo Real para tu Vehiculo Particular o Flota
              </h1>
              <p className="text-xl mb-8">
                Mantén el control total de tus vehículos con nuestra plataforma avanzada de rastreo GPS
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src="/plataforma-gps.jpg"
                alt="Plataforma de Monitoreo GPS"
                className="rounded-lg shadow-xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mb-24">
          <div className="bg-white rounded-lg shadow-xl p-8 grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Shield className="h-12 w-12 text-blue-600 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Seguridad Total</h3>
                <p className="text-gray-600">Monitoreo 24/7 y alertas en tiempo real</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-12 w-12 text-blue-600 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Tiempo Real</h3>
                <p className="text-gray-600">Actualización cada 30 segundos</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-12 w-12 text-blue-600 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Cobertura Nacional</h3>
                <p className="text-gray-600">Servicio en toda la República Mexicana</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Características
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para gestionar tu flota de manera eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">App Móvil</h3>
              <p className="text-gray-600">Accede a tu flota desde cualquier dispositivo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alertas Instantáneas</h3>
              <p className="text-gray-600">Notificaciones en tiempo real de eventos importantes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <BarChart2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reportes Detallados</h3>
              <p className="text-gray-600">Análisis completo del desempeño de tu flota</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Historial de Rutas</h3>
              <p className="text-gray-600">Consulta el histórico de recorridos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Geocercas</h3>
              <p className="text-gray-600">Define zonas permitidas y restricciones</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguridad Avanzada</h3>
              <p className="text-gray-600">Protección contra robo y recuperación vehicular</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Control de Combustible</h3>
              <p className="text-gray-600">Monitoreo de consumo y rendimiento</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiusuario</h3>
              <p className="text-gray-600">Diferentes niveles de acceso para tu equipo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Administración para Transportistas Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Administración para Transportistas
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Truck className="h-8 w-8 text-indigo-300 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Gestión Integral de Flotas</h3>
                    <p className="text-indigo-100">Control completo de su flota con herramientas especializadas para el sector transporte.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart2 className="h-8 w-8 text-indigo-300 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Análisis y Reportes</h3>
                    <p className="text-indigo-100">Informes detallados de rendimiento, consumo y eficiencia operativa.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-8 w-8 text-indigo-300 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Control de Personal</h3>
                    <p className="text-indigo-100">Seguimiento de conductores, horarios y asignación de rutas.</p>
                  </div>
                </div>
              </div>
              <Link
                to="/herramientas/ag"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors"
              >
                Ver Administración para Transportistas
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                alt="Administración para Transportistas"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;