import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ExternalLink, Key } from 'lucide-react';
import ActionButtons from '../components/ActionButtons';

const Software = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);

  const demoInfo = {
    id: 'demo-info',
    title: 'Plataforma de Monitoreo',
    price: 0,
    description: 'Solicita más información sobre nuestra plataforma de monitoreo GPS'
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Contamos con más de 100 herramientas poderosas así como amigables al usar para el control y la administración de unidades GPS
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Prueba nuestra plataforma con las siguientes credenciales:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Key className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold">Credenciales de acceso:</span>
                  </div>
                  <p className="mb-1"><span className="font-medium">Usuario:</span> demo</p>
                  <p><span className="font-medium">Contraseña:</span> demo</p>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://monitoring.activemoongps.com.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    Demo <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setShowContactOptions(true)}
                    className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
                  >
                    Click para más Información
                  </button>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3" 
                  alt="Control Panel"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map Visualization Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Visualización del Mapa</h2>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Map Visualization"
              className="w-full rounded-lg shadow-xl mb-16"
            />
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Multi Monitoreo</h3>
                <p className="text-gray-600 mb-4">
                  Con esta opción tiene acceso a la selección completa de una o varias unidades en tiempo real.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Información general</li>
                  <li>Detalles</li>
                  <li>Localización</li>
                  <li>Conductores</li>
                  <li>Sensores</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Dispositivos GPS</h3>
                <p className="text-gray-600 mb-4">
                  Puedes gestionar tus unidades GPS de forma ordenada, clasificándolas por grupos y destacando las más relevantes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Estado de la unidad: Activo/inactivo</li>
                  <li>Cheque de favoritos</li>
                  <li>Envió de comandos</li>
                  <li>Historiales</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Multi Pantalla</h3>
                <p className="text-gray-600 mb-4">
                  Podrás visualizar más de un vehículo al mismo tiempo en el mapa, corroborar su ubicación y estado.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Diferentes tipos de visualización</li>
                  <li>Selección de las unidades a monitorear</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Capas</h3>
                <p className="text-gray-600 mb-4">
                  Diferentes tipos de mapas para mejorar la visualización de los puntos, control de tráfico y kilómetros del país.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Centrado automático</li>
                  <li>Clics de acceso rápido</li>
                  <li>Mapa de calles</li>
                  <li>Mapa de tráfico</li>
                  <li>Mapa Satelital</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Históricos</h2>
            <img 
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Historical Data"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Personalized Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Personalice su solución de seguridad a la medida</h2>
              <p className="text-xl text-gray-600 mb-8">
                Lo que nos distingue es nuestra flexibilidad: Usted puede crear paquetes personalizados añadiendo únicamente los servicios que necesita. Esto le permite optimizar costos al aprovechar el equipo que ya posee.
              </p>
              <Link 
                to="/tienda/paquetes"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-block"
              >
                Planes integrales
              </Link>
            </div>
          </div>
        </section>

        {/* Control and Security Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Características Principales</h2>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Control and Security"
              className="w-full rounded-lg shadow-xl mb-16"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Notificaciones</h3>
                <p className="text-gray-600 mb-4">
                  Diferentes tipos de notificaciones y alertas en tiempo real sobre los diferentes estados de la unidad.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Encendidos / apagados</li>
                  <li>Geocercas / rutas</li>
                  <li>Vinculación de conductores</li>
                  <li>Excesos de velocidad</li>
                  <li>Entre otros</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Rutas</h3>
                <p className="text-gray-600 mb-4">
                  Puedes crear tramos de recorrido de un punto a otro, arrastrar el tramo en el camino que deseas que recorran tus vehículos y controlar cuando entran y salen de los mismos.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Punto inicial/final</li>
                  <li>Asignación de grupos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Geocercas</h3>
                <p className="text-gray-600 mb-4">
                  Puedes crear perímetros virtuales, para tener control de las unidades cuando entran o salen de tu área determinada.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Circulares</li>
                  <li>Poligonales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
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

        {/* Monitoring Center Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Centro de Monitoreo</h2>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Monitoring Center"
              className="w-full rounded-lg shadow-xl mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Detalles</h3>
                <p className="text-gray-600">
                  Puedes monitorear todas tus unidades GPS simultáneamente, consultar su estado, su ubicación entre otros en tiempo real y de forma ordenada.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Eventos</h3>
                <p className="text-gray-600">
                  Te permite la visualización de todos los eventos en lista, donde puedes filtrar, ordenar y tener un recuento de las acciones que se realizan en cada unidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Management Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Gestión de flotas vehiculares</h2>
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Fleet Management"
              className="w-full rounded-lg shadow-xl mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Conductores</h3>
                <p className="text-gray-600">
                  Registra a los conductores responsables de tus unidades. Puedes vincularlos mediante un código QR y nuestra aplicación.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Mantenimientos</h3>
                <p className="text-gray-600">
                  Gestiona los servicios automotrices para tus unidades, optimiza tus rendimientos en cuanto al funcionamiento y manejo de tus vehículos. Servicios correctivos, preventivos y recurrente.
                </p>
                <ul className="space-y-2 text-gray-600 mt-4">
                  <li>Recordatorios programados</li>
                  <li>Añade talleres</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis and Optimization Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Análisis y optimización</h2>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Analysis and Optimization"
              className="w-full rounded-lg shadow-xl mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Reportes</h3>
                <p className="text-gray-600 mb-4">
                  Una amplia gama de informes sobre el comportamiento de tus unidades.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Programa reportes</li>
                  <li>Calendariza fechas de entrega</li>
                  <li>Reportes recurrentes</li>
                  <li>Plantillas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Gráficas</h3>
                <p className="text-gray-600 mb-4">
                  Genera estadísticas y gráficas sobre los eventos de las unidades.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>PDF</li>
                  <li>Hoja de cálculo</li>
                  <li>KML</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Access and Permissions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Acceso y permisos</h2>
            <img 
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Access and Permissions"
              className="w-full rounded-lg shadow-xl mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Usuarios</h3>
                <p className="text-gray-600">
                  Gestiona los accesos a tu cuenta de manera eficaz mediante usuarios. Cada usuario representa una persona con acceso a las herramientas de la plataforma.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Roles</h3>
                <p className="text-gray-600">
                  Controla los permisos a tu cuenta de manera eficaz mediante roles. Delimita el acceso a las herramientas y secciones de la plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Ayuda</h2>
            <img 
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Help and Support"
              className="w-full rounded-lg shadow-xl mb-16"
            />
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Preguntas</h3>
                <p className="text-gray-600">
                  Preguntas frecuentes de nuestros clientes, con accesos rápidos a palabras y sugerencias.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Manual de usuario</h3>
                <p className="text-gray-600">
                  Manual completo que te brinda información detallada de cada herramienta y su funcionamiento.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Vídeos de asesoría</h3>
                <p className="text-gray-600">
                  Guía paso a paso sobre la plataforma en formato audio visual, simplifica tu experiencia.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Tour por plataforma</h3>
                <p className="text-gray-600">
                  Asistente virtual dentro de plataforma, comienza a aprender de los aspectos generales hasta los específicos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {showContactOptions && (
        <ActionButtons
          item={demoInfo}
          isOpen={showContactOptions}
          onClose={() => setShowContactOptions(false)}
        />
      )}
    </div>
  );
};

export default Software;