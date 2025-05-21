import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, Apple, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';

const MobileApp: React.FC = () => {
  const features = [
    "Gerencie agendamentos em movimento",
    "Notificações em tempo real",
    "Visualização da agenda diária",
    "Acesse relatórios e análises",
    "Comunique-se com clientes",
    "Controle total do seu negócio"
  ];

  return (
    <section id="app" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Mobile Images */}
          <motion.div 
            className="flex-1 relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] max-w-md mx-auto">
              {/* Phone 1 */}
              <motion.div
                className="absolute left-0 top-12 z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <img 
                  src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="App móvel - Tela inicial" 
                  className="w-48 rounded-3xl shadow-2xl border-8 border-gray-800 dark:border-black"
                />
              </motion.div>
              
              {/* Phone 2 */}
              <motion.div
                className="absolute right-0 z-20"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              >
                <img 
                  src="https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="App móvel - Tela de agendamento" 
                  className="w-56 rounded-3xl shadow-2xl border-8 border-gray-800 dark:border-black"
                />
              </motion.div>
              
              {/* Phone 3 */}
              <motion.div
                className="absolute left-20 bottom-0 z-30"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="App móvel - Tela de cliente" 
                  className="w-52 rounded-3xl shadow-2xl border-8 border-gray-800 dark:border-black"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="flex-1 max-w-xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-2">
              <Smartphone className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2" />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                Aplicativo Mobile
              </h3>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Gerencie seu negócio de qualquer lugar
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              O AgendaFácil na palma da sua mão. Com nossos aplicativos para Android e iPhone, você tem controle total do seu negócio onde quer que esteja.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="flex items-center justify-center bg-black text-white border-0 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                icon={<Apple className="w-5 h-5" />}
              >
                App Store
              </Button>
              
              <Button 
                variant="outline"
                className="flex items-center justify-center bg-black text-white border-0 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                icon={<ShoppingBag className="w-5 h-5" />}
              >
                Google Play
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;