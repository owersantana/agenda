import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 dark:border-gray-700"
    >
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        ) : (
          <Plus className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-gray-600 dark:text-gray-400">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona o período de teste grátis?",
      answer: "Você tem acesso a todas as funcionalidades do sistema por 14 dias, sem compromisso. Não é necessário cartão de crédito para começar. Ao final do período, você pode escolher um de nossos planos para continuar usando."
    },
    {
      question: "Preciso instalar algum software?",
      answer: "Não! O AgendaFácil é 100% online, funciona direto no navegador. Apenas para uso mobile, recomendamos instalar nosso aplicativo disponível para Android e iPhone."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim! Não há fidelidade. Você pode cancelar sua assinatura quando quiser, sem multa ou burocracia."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte por email, chat e WhatsApp em horário comercial. Clientes do plano Profissional e Empresarial têm acesso a suporte prioritário."
    },
    {
      question: "É possível personalizar o sistema com minha marca?",
      answer: "Sim! Você pode personalizar cores, logotipo e elementos visuais para combinar com sua identidade visual. Essa função está disponível em todos os planos."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Tire suas dúvidas sobre o AgendaFácil
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;