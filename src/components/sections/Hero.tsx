import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 z-10 relative">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              variants={itemVariants}
            >
              Transforme sua rotina com o melhor sistema de agendamentos
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              Agendamentos fáceis, fidelização automática e controle total em um único lugar.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button size="lg" variant="primary">
                Teste grátis agora
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
                icon={<Play className="w-4 h-4" />}
              >
                Ver demonstração
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center gap-3"
              variants={itemVariants}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900" 
                    src={`https://images.pexels.com/photos/${1000000 + i * 10}/pexels-photo-${1000000 + i * 10}.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2`}
                    alt={`Usuário ${i}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Mais de 2.500 empresas</span> já estão usando
              </p>
            </motion.div>
          </div>
          
          {/* Image */}
          <motion.div 
            className="flex-1 relative"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.img
                className="w-full max-w-lg mx-auto rounded-lg shadow-xl z-20 relative"
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dashboard do sistema de agendamentos"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute -bottom-10 -right-10 md:-right-20 z-10 w-48 md:w-64"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <img 
                  className="w-full h-auto rounded-lg shadow-lg"
                  src="https://images.pexels.com/photos/6160086/pexels-photo-6160086.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Aplicativo mobile"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white dark:fill-gray-900"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;