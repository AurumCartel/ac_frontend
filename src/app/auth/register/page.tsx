"use client";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Modal from "@/components/Modal";
import StepperAnimation from "@/components/StepperAnimation";
import useTitle from "@/hooks/useTitle";

export default function Register() {
  useTitle("Inscription");
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    confirmPassword: "",
    phone: "",
    city: "",
    payement: "",
    reference: "",
    cardNumber: "",
    amount: "",
  });
  const payements = ["Mvola", "Carte Bancaire", "Cheque"];
  const [passwordCondition, setPasswordCondition] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    isValidLenght: false,
  });
  const [error, setError] = useState(false);

  const steps = ["1", "2", "3"];

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
    if (currentStep === steps.length) setShowModal(true);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      if (name === "password" || name === "confirmPassword") {
        validatePassword(value);
        setError(updatedData.password !== updatedData.confirmPassword);
      }

      return updatedData;
    });
  };
  const validatePassword = (password: string) => {
    setPasswordCondition({
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?;{}<>|]/.test(password),
      isValidLenght: password.length >= 8,
    });
  };
  // const isStepComplete = () => {
  //   if (currentStep === 1)
  //     return (
  //       formData.name &&
  //       formData.email &&
  //       formData.password &&
  //       formData.confirmPassword
  //     );
  //   if (currentStep === 2)
  //     return formData.address && formData.phone && formData.city;
  //   return true;
  // };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-20 mx-96 p-6 rounded-lg border-2 border-[#D4AF37] text-white">
        <div>
          {/* Stepper */}

          <StepperAnimation currentStep={currentStep} steps={steps} />

          {/* Step Content */}
          <div className="mb-6">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Informations personnelles
                </h2>
                <label htmlFor="name">Nom :</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  className=" w-full px-4 mb-4 p-2 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                />
                <label htmlFor="name">Email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className=" w-full px-4 mb-4 p-2 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                />
                <label htmlFor="name">Mot de passe :</label>
                <div className="relative mb-4">
                  <input
                    type={isVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Entrez votre mot de passe"
                    className="w-full px-4 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                    className="absolute inset-y-0 right-3 bottom-40 flex items-center"
                  >
                    {isVisible ? (
                      <AiOutlineEyeInvisible className="text-4xl" />
                    ) : (
                      <AiOutlineEye className="text-[#D4AF37] text-4xl" />
                    )}
                  </button>

                  {/* condition mode de passe  */}
                  <div className="mb-4 mt-4">
                    <p>Votre mot de passe doit contenir :</p>
                    <ul className="text-sm">
                      <li className="flex items-center">
                        {passwordCondition.hasUpperCase ? (
                          <AiFillCheckCircle className="text-2xl mr-2 text-green-500" />
                        ) : (
                          <AiFillCloseCircle className="text-2xl text-red-500 mr-2" />
                        )}
                        Une letttre majuscule
                      </li>
                      <li className="flex items-center">
                        {passwordCondition.hasLowerCase ? (
                          <AiFillCheckCircle className="text-2xl mr-2 text-green-500" />
                        ) : (
                          <AiFillCloseCircle className="text-2xl text-red-500 mr-2" />
                        )}
                        Une letttre minuscule
                      </li>
                      <li className="flex items-center">
                        {passwordCondition.hasSpecialChar ? (
                          <AiFillCheckCircle className="text-2xl mr-2 text-green-500" />
                        ) : (
                          <AiFillCloseCircle className="text-2xl text-red-500 mr-2" />
                        )}
                        Un caractere special
                      </li>
                      <li className="flex items-center">
                        {passwordCondition.hasNumber ? (
                          <AiFillCheckCircle className="text-2xl mr-2 text-green-500" />
                        ) : (
                          <AiFillCloseCircle className="text-2xl text-red-500 mr-2" />
                        )}
                        Un chiffre
                      </li>
                      <li className="flex items-center">
                        {passwordCondition.isValidLenght ? (
                          <AiFillCheckCircle className="text-2xl mr-2 text-green-500" />
                        ) : (
                          <AiFillCloseCircle className="text-2xl text-red-500 mr-2" />
                        )}
                        Au moins 8 caracteres
                      </li>
                    </ul>
                  </div>
                </div>
                <label htmlFor="confirmPassword">
                  Confirmation Mot de passe :
                </label>
                <div className="relative ">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmation Mot de passe"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className=" w-full px-4 p-2  py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                  />
                  {formData.confirmPassword && (
                    <span className="absolute inset-y-0 right-3 flex items-center">
                      {formData.password === formData.confirmPassword ? (
                        <AiFillCheckCircle className="text-3xl text-green-500" />
                      ) : (
                        <AiFillCloseCircle className="text-3xl text-red-500" />
                      )}
                    </span>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Payement</h2>
                <label htmlFor="adresse">Adresse :</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  value={formData.address}
                  onChange={handleChange}
                  className=" w-full px-4 mb-4 p-2 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                />
                <label htmlFor="adresse">Phone :</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className=" w-full px-4 mb-4 p-2 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                />
                <label htmlFor="adresse">Ville :</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Ville"
                  value={formData.city}
                  onChange={handleChange}
                  className=" w-full px-4 p-2 mb-4 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                />
                <label htmlFor="adresse">Mode de Payement :</label>
                <select
                  name="payement"
                  id="payement"
                  value={formData.payement}
                  onChange={handleChange}
                  className=" w-full px-4 text-gray-400 p-2 mb-4 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                >
                  <option value="" disabled>
                    ------ Selectionner la methode ------
                  </option>
                  {payements.map((payer, index) => (
                    <option
                      value={payer}
                      key={index}
                      className="text-gray-400 bg-[#171717] "
                    >
                      {payer}
                    </option>
                  ))}
                </select>
                {/* Option selectionner  */}
                <div className="mt-1">
                  {formData.payement === "Mvola" && (
                    <div>
                      <label
                        htmlFor="reference"
                        className="block text-gray-600 font-bold mb-2"
                      >
                        Reference
                      </label>
                      <input
                        type="text"
                        id="reference"
                        name="reference"
                        placeholder="Entrer le reference "
                        value={formData.reference}
                        onChange={handleChange}
                        className=" w-full px-4 text-gray-400 p-2 mb-4 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                      />
                      <input
                        type="file"
                        id="screenPhoto"
                        name="screenPhoto"
                        onChange={handleChange}
                        className=" w-full px-4 text-gray-400 p-2 mb-4 py-2 bg-transparent  rounded-lg focus:bg-transparent"
                      />
                    </div>
                  )}
                  {formData.payement === "Carte Bancaire" && (
                    <div>
                      <label
                        htmlFor="reference"
                        className="block text-gray-600 font-bold mb-2"
                      >
                        Numero de Carte
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="Entrer le numero "
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className=" w-full px-4 text-gray-400 p-2 mb-4 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                      />
                    </div>
                  )}
                  {formData.payement === "Cheque" && (
                    <div>
                      <label
                        htmlFor=""
                        className="block text-gray-600 font-bold mb-2"
                      >
                        Montant
                      </label>
                      <input
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="Entrer le montant "
                        value={formData.amount}
                        onChange={handleChange}
                        className=" w-full px-4 text-gray-400 p-2 mb-4 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
                <p>Nom : {formData.name}</p>
                <p>Email : {formData.email}</p>
                <p>Adresse : {formData.address}</p>
                <p>Téléphone : {formData.phone}</p>
                <p>Ville : {formData.city}</p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded  ${
                currentStep === 1 ? "bg-gray-300" : "bg-gray-500 text-white"
              }`}
            >
              Précédent
            </button>
            {/* {currentStep < 3 ? (
              <button
                onClick={handleNext}
                disabled={!isStepComplete()}
                className={`px-4 py-2 rounded ${
                  isStepComplete() ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              >
                Suivant
              </button>
            ) : (
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Terminer
              </button>
            )} */}
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {currentStep === steps.length ? "Terminer" : "Suivant"}
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-center font-bold mb-6">
            Rejoignez-nous dans la communaut&eacute; de l&apos;
            <br />
            <span className="text-5xl text-[#D4AF37]">AURUM CARTEL</span>
          </h1>

          <div className="flex justify-center mb-6">
            <Image
              src="/assets/images/Ac2.jpg"
              width={500}
              height={500}
              alt="AurumCartel"
            />
          </div>
          <div className="text-center mt-4">
            <Link
              href="login"
              className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <button className="w-full bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] font-bold py-2 rounded-lg hover:bg-[#D4AF37] hover: transition">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
        {/* Modal */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-bold mb-4">Inscription terminée !</h2>
          <p>Merci de vous être inscrit à notre plateforme.</p>
        </Modal>
      </div>
    </div>
  );
}
