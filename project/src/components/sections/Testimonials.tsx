import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  content, author, role, avatar, rating, index 
}) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${
              i < rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300 dark:text-gray-600'
            }`} 
          />
        ))}
      </div>
      
      <div className="relative">
        <Quote className="w-8 h-8 text-gray-200 dark:text-gray-700 absolute -top-1 -left-2 transform -scale-x-100" />
        <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10 pl-4">
          {content}
        </p>
      </div>
      
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{author}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "O AgendaFácil transformou meu salão de beleza. Reduzi faltas em 80% com as confirmações automáticas e aumentei minha clientela. Recomendo fortemente!",
      author: "Ana Silva",
      role: "Proprietária de Salão",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=120",
      rating: 5
    },
    {
      content: "Como dentista, precisava de um sistema confiável que não desse dor de cabeça. O AgendaFácil é intuitivo, meus pacientes adoram e posso me concentrar nos atendimentos.",
      author: "Dr. Carlos Mendes",
      role: "Dentista",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
      rating: 5
    },
    {
      content: "Gerencio uma clínica com 8 profissionais e o AgendaFácil simplificou tudo. Os relatórios me ajudam a entender o negócio e tomar decisões melhores.",
      author: "Patrícia Oliveira",
      role: "Gerente de Clínica",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120",
      rating: 4
    },
    {
      content: "O app mobile é sensacional! Consigo gerenciar meu estúdio de tatuagem mesmo durante viagens. O sistema de fidelidade trouxe muitos clientes de volta.",
      author: "Rodrigo Alves",
      role: "Tatuador",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120",
      rating: 5
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
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Mais de 2.500 negócios já transformaram sua gestão com o AgendaFácil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;