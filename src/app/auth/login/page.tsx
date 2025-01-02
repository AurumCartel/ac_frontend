"use client";
import useTitle from "@/hooks/useTitle";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { LoginShimmer } from "@/components/Shimmer";

export default function Login() {
  useTitle("Login");
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleRegister = () => {
    router.push(`/auth/register`);
  };
  return (
    <main className=" flex justify-center items-center min-h-screen ">
      {isLoading ? (
        <>
          <div className="space-y-4 mb-16">
            <LoginShimmer />
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-20 p-6 rounded-lg  border-2 border-[#D4AF37] text-white">
            <div>
              <h1 className="text-2xl text-center font-bold mb-6">
                Ravi de vous revoir sur le site de la communaut&eacute;
                <br />
                <span className="text-5xl text-[#D4AF37] ">AURUM CARTEL </span>
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
                <button
                  onClick={handleRegister}
                  className="w-full duration-300 bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] font-bold py-2 rounded-lg hover:bg-[#D4AF37] hover:text-black transition"
                >
                  S&apos;inscrire
                </button>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xl mb-1">
                    Adresse e-mail
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Entrez votre adresse e-mail"
                      className="w-full px-4 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center">
                      <CgMail className="text-[#D4AF37] text-4xl " />
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-xl mb-1">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={isVisible ? "text" : "password"}
                      id="password"
                      placeholder="Entrez votre mot de passe"
                      className="w-full px-4 py-2 bg-transparent border-2 border-[#D4AF37] rounded-lg focus:bg-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setIsVisible(!isVisible)}
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      {isVisible ? (
                        <AiOutlineEyeInvisible className="text-4xl" />
                      ) : (
                        <AiOutlineEye className="text-[#D4AF37] text-4xl" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-xl text-right mt-2">
                  <a
                    href="#"
                    className="text-[#D4AF37] hover:underline text-right"
                  >
                    Mot de passe oubli&eacute; ?
                  </a>
                </div>
                <Link
                  href="/home"
                  className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:transition hover:text-white text-black font-bold py-2 rounded-lg mt-4 hover:bg-yellow-500 transition"
                  >
                    Se connecter
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
