import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

// Mock data - this would come from your API in a real application
const mockProfessional = {
  name: "Dra. Ana Silva",
  specialty: "Dentista",
  location: "São Paulo, SP",
  photo: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=300",
  rating: 4.8,
  reviewCount: 127
};

const SchedulingPage: React.FC = () => {
  const { uuid } = useParams();

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
          {/* Calendar Section Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Escolha uma Data e Horário
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Calendário será implementado aqui
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulingPage;