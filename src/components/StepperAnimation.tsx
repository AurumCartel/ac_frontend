import { motion } from "framer-motion";

type StepperProps = {
  currentStep: number;
  steps: string[];
};

export default function StepperAnimation({ currentStep, steps }: StepperProps) {
  return (
    <div className="flex items-center justify-between w-full relative">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center w-full">
          {/* Étape */}
          <div className="relative w-10 h-10">
            {/* Conteneur circulaire */}
            <div
              className={`w-10 h-10 rounded-full border-2 ${
                currentStep > index ? "border-[#D4AF37]" : "border-gray-300"
              } flex items-center justify-center relative`}
            >
              {/* Remplissage animé */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-full rounded-full ${
                  currentStep > index ? "bg-[#D4AF37]" : "bg-transparent"
                }`}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{
                  clipPath:
                    currentStep > index
                      ? "inset(0% 0 0 0)"
                      : "inset(100% 0 0 0)",
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.div>
              {/* Texte de l'étape */}
              <span className="z-10 text-white font-bold">{step}</span>
            </div>
          </div>

          {/* Ligne entre les étapes */}
          {index < steps.length - 1 && (
            <motion.div
              className={`h-1 flex-1 ${
                currentStep > index ? "bg-[#D4AF37]" : "bg-gray-300"
              }`}
              initial={{ width: "0%" }}
              animate={{
                width: currentStep > index ? "100%" : "0%",
              }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
