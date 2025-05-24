import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock, Clock1, Check } from 'lucide-react';

// Mock data - this would come from your API in a real application
const mockProfessional = {
  name: "Dra. Ana Silva",
  specialty: "Dentista",
  location: "São Paulo, SP",
  photo: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=300",
  rating: 4.8,
  reviewCount: 127,
  services: [
    {
      id: 1,
      name: "Limpeza Dental",
      duration: "1h",
      price: 150.00,
      description: "Limpeza profissional completa com remoção de tártaro e polimento."
    },
    {
      id: 2,
      name: "Clareamento Dental",
      duration: "1h30",
      price: 350.00,
      description: "Clareamento dental profissional com gel de alta potência."
    },
    {
      id: 3,
      name: "Restauração",
      duration: "45min",
      price: 200.00,
      description: "Restauração dentária com resina fotopolimerizável."
    },
    {
      id: 4,
      name: "Avaliação Inicial",
      duration: "30min",
      price: 100.00,
      description: "Consulta inicial com avaliação completa e plano de tratamento."
    }
  ]
};

const SchedulingPage: React.FC = () => {
  const { uuid } = useParams();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            {/* Professional Photo */}
            <img 
              src={mockProfessional.photo} 
              alt={mockProfessional.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md"
            />
            
            {/* Professional Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {mockProfessional.name}
              </h1>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {mockProfessional.specialty}
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{mockProfessional.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Atende de Seg. à Sex.</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="hidden sm:block text-right">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {mockProfessional.rating}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {mockProfessional.reviewCount} avaliações
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Services Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Escolha o Serviço
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockProfessional.services.map((service) => (
                <div
                  key={service.id}
                  className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedService === service.id
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  {selectedService === service.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock1 className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      R$ {service.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Escolha uma Data e Horário
            </h2>
            {selectedService ? (
              <p className="text-gray-600 dark:text-gray-400">
                Calendário será implementado aqui
              </p>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                Selecione um serviço para ver os horários disponíveis
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulingPage;