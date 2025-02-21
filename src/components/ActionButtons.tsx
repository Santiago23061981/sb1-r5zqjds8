import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

interface ActionButtonsProps {
  item: {
    id: string;
    title: string;
    price: number;
    description: string;
    image?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ item, isOpen, onClose }) => {
  const phoneNumber = '523330124111';

  const sendEmail = () => {
    window.location.href = `mailto:contacto@activemoongps.com.mx?subject=Interés en ${item.title}&body=Hola, estoy interesado en obtener más información sobre ${item.title}.`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hola, estoy interesado en obtener más información sobre ${item.title}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <h3 className="text-xl font-bold mb-4">¿Cómo deseas proceder?</h3>
        <div className="space-y-4">
          <button
            onClick={openWhatsApp}
            className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Contactar a un Asesor
          </button>
          
          <button
            onClick={sendEmail}
            className="w-full bg-gray-600 text-white py-3 rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="h-5 w-5" />
            Enviar Correo
          </button>
        </div>
        
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;