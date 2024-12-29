import { FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900/80 backdrop-blur-sm text-white mt-auto">
      {/* Golden Line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/assets/images/Ac2.jpg"
              width={120}
              height={120}
              alt="AurumCartel"
              className="rounded-lg"
            />
            <p className="text-sm text-zinc-300">
              Rejoignez la communauté Aurum Cartel et développez vos compétences
              en trading avec des experts passionnés.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pages/home"
                  className="text-zinc-300 hover:text-[#D4AF37] transition"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/cours"
                  className="text-zinc-300 hover:text-[#D4AF37] transition"
                >
                  Nos Cours
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/messagerie"
                  className="text-zinc-300 hover:text-[#D4AF37] transition"
                >
                  Messagerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-zinc-300">
                <MdEmail className="text-[#D4AF37]" />
                <span>contact@aurumcartel.com</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <MdPhone className="text-[#D4AF37]" />
                <span>+261 34 00 000 00</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-300">
                <MdLocationOn className="text-[#D4AF37]" />
                <span>Antananarivo, Madagascar</span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              Rejoignez-nous
            </h3>
            <p className="text-sm text-zinc-300 mb-4">
              Ensemble pour atteindre nos objectifs
            </p>
            <button className="w-full bg-transparent text-white border-2 border-[#D4AF37] font-semibold py-2 px-6 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 mb-6">
              Contactez-nous
            </button>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <CiFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <FiInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-zinc-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <FaTelegramPlane className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <p className="text-center text-sm text-zinc-400">
            © {currentYear} Aurum Cartel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
