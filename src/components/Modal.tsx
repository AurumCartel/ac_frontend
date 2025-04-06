import { motion } from "framer-motion";
import Link from "next/link";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* Animation pour le modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6  rounded-lg text-black max-w-md w-full"
      >
        {children}
        <Link href={"login"} className="flex items-center justify-center">
          <button
            onClick={onClose}
            className="mt-4 px-4  py-2 bg-red-500 text-white rounded"
          >
            Fermer
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
