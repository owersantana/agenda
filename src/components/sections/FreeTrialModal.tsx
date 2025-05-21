import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Comece seu teste grátis"
    >
      <div className="text-center mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Experimente o AgendaFácil gratuitamente por 14 dias.
          Não é necessário cartão de crédito.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email profissional
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              id="password"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Mínimo 8 caracteres"
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          size="lg"
        >
          Criar conta grátis
        </Button>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
          Ao criar uma conta, você concorda com nossos{' '}
          <a href="#" className="text-primary-600 hover:underline">Termos de Serviço</a>{' '}
          e{' '}
          <a href="#" className="text-primary-600 hover:underline">Política de Privacidade</a>.
        </p>
      </form>
    </Modal>
  );
};

export default FreeTrialModal;