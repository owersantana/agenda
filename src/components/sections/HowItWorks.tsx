import React from 'react';
import { motion } from 'framer-motion';
import { Building, Clock, Calendar } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  index: number;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description, index }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Connector Line */}
      {index < 2 && (
        <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary-200 dark:bg-primary-800 z-0"></div>
      )}
      
      {/* Step Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        
        <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
          {number}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Building className="w-8 h-8" />,
      number: 1,
      title: "Cadastre sua empresa",
      description: "Crie uma conta, adicione informações do seu negócio e personalize sua página de agendamentos."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: 2,
      title: "Configure horários e serviços",
      description: "Defina sua disponibilidade, crie um catálogo de serviços com preços e duração."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: 3,
      title: "Comece a receber agendamentos",
      description: "Compartilhe seu link de agendamento e permita que clientes marquem horários 24/7."
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Começar com o AgendaFácil é simples e você pode estar operando em minutos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;