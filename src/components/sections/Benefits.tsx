import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, List, Users, Heart, BarChart2, Palette, MessageCircle 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Agendamentos Inteligentes",
      description: "Sistema intuitivo que permite agendamentos múltiplos com confirmação automática."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horários e Disponibilidade",
      description: "Configure horários personalizados, bloqueios e intervalos entre atendimentos."
    },
    {
      icon: <List className="w-6 h-6" />,
      title: "Catálogo de Serviços",
      description: "Crie e organize seu catálogo com preços, duração e detalhes de cada serviço."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestão de Clientes",
      description: "Base de dados completa com histórico, preferências e informações de contato."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Sistema de Fidelidade",
      description: "Fidelize clientes com programas de pontos, descontos e campanhas especiais."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Relatórios e Análises",
      description: "Dashboard com métricas importantes para tomar decisões baseadas em dados."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Customização Visual",
      description: "Personalize cores, logotipo e elementos visuais para combinar com sua marca."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Integração WhatsApp",
      description: "Envie lembretes, confirmações e comunicados diretamente pelo WhatsApp."
    }
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recursos completos para seu negócio crescer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Tudo o que você precisa para gerenciar agendamentos, clientes e impulsionar seu negócio em uma única plataforma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;