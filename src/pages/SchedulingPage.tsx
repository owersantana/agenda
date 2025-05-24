import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const SchedulingPage: React.FC = () => {
  const { uuid } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          <h1 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
            Agendar Horário
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Professional Info Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Informações do Profissional
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              ID do profissional: {uuid}
            </p>
          </div>

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