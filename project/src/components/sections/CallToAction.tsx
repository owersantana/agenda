import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-600 dark:bg-primary-900 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-500 opacity-20 dark:bg-primary-800 dark:opacity-30"
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-primary-500 opacity-10 dark:bg-primary-800 dark:opacity-20"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 left-1/3 w-40 h-40 rounded-full bg-accent-500 opacity-10 dark:bg-accent-800 dark:opacity-20"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar a gestão do seu negócio?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Junte-se a milhares de empresas que já estão economizando tempo e aumentando a satisfação dos clientes com o AgendaFácil.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Teste grátis por 14 dias
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-white border-white hover:bg-white/10 w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Agendar demonstração
            </Button>
          </div>
          
          <p className="text-primary-200 mt-6 text-sm">
            Não é necessário cartão de crédito. Cancele quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;