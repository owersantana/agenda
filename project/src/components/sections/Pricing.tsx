import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

const PricingTable: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Básico",
      description: "Ideal para profissionais autônomos",
      price: isAnnual ? 39 : 49,
      period: isAnnual ? "/mês, cobrado anualmente" : "/mês",
      highlighted: false,
      features: [
        "1 Profissional",
        "Agendamentos ilimitados",
        "Lembretes automáticos",
        "Página de agendamento personalizada",
        "Aplicativo móvel",
        "Suporte via email"
      ],
      cta: "Começar agora"
    },
    {
      name: "Profissional",
      description: "Perfeito para pequenos negócios",
      price: isAnnual ? 89 : 109,
      period: isAnnual ? "/mês, cobrado anualmente" : "/mês",
      highlighted: true,
      features: [
        "Até 5 profissionais",
        "Agendamentos ilimitados",
        "Lembretes automáticos",
        "Página personalizada",
        "Aplicativo móvel",
        "Sistema de fidelidade",
        "Relatórios avançados",
        "Integrações (WhatsApp, Google)",
        "Suporte prioritário"
      ],
      cta: "Escolher plano"
    },
    {
      name: "Empresarial",
      description: "Para negócios em crescimento",
      price: isAnnual ? 179 : 219,
      period: isAnnual ? "/mês, cobrado anualmente" : "/mês",
      highlighted: false,
      features: [
        "Até 15 profissionais",
        "Agendamentos ilimitados",
        "Lembretes automáticos",
        "Página de multi-localidade",
        "Aplicativo móvel",
        "Sistema de fidelidade avançado",
        "Relatórios personalizados",
        "API e integrações avançadas",
        "Gestor de conta dedicado",
        "Treinamento da equipe"
      ],
      cta: "Fale conosco"
    }
  ];

  return (
    <section id="precos" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Planos para todos os tamanhos de negócio
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Escolha o plano que melhor se adapta às necessidades da sua empresa.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 text-sm ${isAnnual ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Faturamento anual
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                value="" 
                className="sr-only peer" 
                checked={!isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
            </label>
            <span className={`ml-3 text-sm ${!isAnnual ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Faturamento mensal
            </span>
          </div>
          
          <div className="inline-flex items-center bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
            <span className="mr-2">💰</span>
            Economize até 20% com pagamento anual
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden border ${
                plan.highlighted 
                  ? 'border-primary-500 dark:border-primary-500 shadow-lg relative' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-center py-1 text-sm font-medium">
                  Mais Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.highlighted ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1 mb-4">
                  {plan.description}
                </p>
                
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    R$ {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">
                    {plan.period}
                  </span>
                </div>
                
                <Button 
                  variant={plan.highlighted ? "primary" : "outline"} 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <p className="font-medium text-gray-900 dark:text-white mb-4">
                  O que está incluso:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Free Trial Banner */}
        <motion.div 
          className="mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Não tem certeza? Teste grátis por 14 dias
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Experimente todos os recursos sem compromisso. Não é necessário cartão de crédito.
            </p>
          </div>
          <Button 
            variant="primary" 
            size="lg"
            className="mt-4 md:mt-0"
          >
            Começar teste grátis
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;