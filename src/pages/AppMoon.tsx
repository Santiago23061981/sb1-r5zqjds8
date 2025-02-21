import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppMoon = () => {
  const features = [
    {
      title: "Históricos",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      details: [
        "Listado de viajes en un rango de tiempo",
        "Listado de eventos en un rango de tiempo",
        "Conteos finales de la lista de viajes",
        "Reproducción individual o global de los historial"
      ]
    },
    {
      title: "Dispositivos",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      details: [
        "Barra de tabs para hacer más sencilla la navegación",
        "Monitoreo de unidades en el mapa",
        "Personalización del tooltip de las unidades, capacidad para colocarle una información adicional",
        "Agrupación de vehículos según su cercanía",
        "Panel de detalles de la unidad organizados",
        "Compartir ubicación actual del vehículo mediante un link",
        "Vista de calles de la posición actual del vehículo",
        "Selección de varios vehículos al mismo tiempo",
        "Orden de lista de vehículos por estado o por grupos"
      ]
    },
    {
      title: "Alertas y Notificaciones",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
      details: [
        "Notificaciones Push de los vehículos",
        "Listado de notificaciones recibidas filtradas por fecha",
        "Marcar notificaciones como vistas",
        "Seleccionar notificación y ver detalles en el mapa",
        "Lista de estados de los vehículos",
        "Página de chat con el vehículo donde se pueden enviar comandos y recibir notificaciones por vehículo"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="App-Moon Interface"
              className="w-full rounded-lg shadow-xl mb-16"
            />
          </div>
        </section>

        {/* Mobile Monitoring Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Monitoreo desde tu móvil</h2>
                <p className="text-gray-600 text-lg mb-6">
                  App-Moon es la solución para el monitoreo de vehículos y recibir notificaciones así mismo es amigable, intuitiva, rápida y se adapta mejor a las necesidades de los usuarios.
                </p>
                <p className="text-gray-600 text-lg">
                  Posee herramientas únicas y útiles capaces de brindar la información completa sobre las unidades; Nuestros desarrolladores se enfocaron en una solución segura, fácil y versátil, de esta manera se creo una herramienta indispensable para el rastreo GPS.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="Mobile Monitoring"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Principales Características</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="[perspective:2000px]"
                >
                  <div className="relative [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)] w-full duration-1000 h-[600px]">
                    <div className="absolute [backface-visibility:hidden] w-full h-full">
                      <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                          <p className="text-gray-600">Pasa el mouse o toca para ver más detalles</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute [transform:rotateY(180deg)] [backface-visibility:hidden] w-full h-full">
                      <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                          <ul className="space-y-2">
                            {feature.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="h-2 w-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">¡Una aplicación hecha especialmente para ti!</h2>
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="App Features"
              className="w-full rounded-lg shadow-xl mb-16"
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-3 text-gray-600">
                  <li>Dashboard con información general de la cuenta y de la aplicación</li>
                  <li>Detección de idioma del teléfono</li>
                  <li>Detección automática del tema del teléfono (Tema claro o tema oscuro)</li>
                  <li>Cambio de tema claro y oscuro</li>
                  <li>Cambio de idioma</li>
                  <li>Cambio de formato de fecha</li>
                  <li>Inicio de sesión con un ID único registrado para ingresar con un solo clic</li>
                  <li>Inicio de sesión clásico con cuenta, usuario y contraseña</li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3 text-gray-600">
                  <li>Cambio de zona horaria</li>
                  <li>Múltiples capas de mapas (OSM, Mapbox, Google, Satelital, Tránsito)</li>
                  <li>Mapas según el idioma seleccionado</li>
                  <li>Habilitar vibración y sonido para las notificaciones</li>
                  <li>Cambio de contraseña</li>
                  <li>Cambio de unidades métricas</li>
                  <li>Ayuda y acerca de la aplicación</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compatibility Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img 
                src="https://images.unsplash.com/photo-1551650992-ee4fd47df41f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                alt="App Compatibility"
                className="rounded-lg shadow-xl"
              />
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Android:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Android 5.1.1 y 6.0 – 6.0.1</li>
                    <li>Android 7.0 – 7.1.2, 8.0 – 8.1, 9.0, 10.0 y 11.0 (Recomendado)</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">iOS:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>iOS 11.0 – 11.4.1</li>
                    <li>iOS 12.0 – 12.5.3, y 13.0 – 13.1.3 (Recomendado)</li>
                  </ul>
                </div>
                
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  ¡Descarga la APP hoy!
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppMoon;