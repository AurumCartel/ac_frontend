"use client";
import useTitle from "@/hooks/useTitle";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";

export default function Page() {
  useTitle("Accueil");
  return (
    <>
      <main className=" flex-grow ">
        <div className="text-center mb-8">
          <h3 className="text-3xl mb-3">
            Bienvenu(e) sur <br />
            le site officiel de la team <br />
            <span className="text-[#D4AF37] text-5xl font-semibold ">
              AURUM CARTEL
            </span>
          </h3>
          <p className="text-xs">
            La team où on s&apos;entraide pour atteindre le sommet ensemble,
            ensemble pour un objectif commun !!!
          </p>
        </div>
        <div className="grid grid-cols-2 text-center mb-12">
          <div className="flex items-center justify-center gap-4">
            <FaUsers className="w-10 h-10" />
            <span className="h-20 w-1 bg-white "></span>
            <span className="text-start text-xl font-semibold">
              +300 <br />
              Membres
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <ImStatsDots className="w-10 h-10" />
            <span className="h-20 w-1 bg-white "></span>
            <span className="text-start text-xl font-semibold">
              03 <br />
              Analyses
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center mx-[500px] ">
          <Image
            className="rounded-3xl"
            src="/assets/images/sandro1.jpg"
            width={300}
            height={300}
            alt="AurumCartel"
          />
          <div className="mb-2">
            <span className="font-semibold text-2xl ">Sandro Lu</span>
            <p className="text-xs mt-3">
              Un jeune entrepreneur malgache passionné par l&apos;indépendance
              financière et la liberté géographique. <br /> Fondateur de la team
              AURUM Cartel, il est également formateur en trading, partageant
              son expertise avec ceux qui aspirent à réussir dans le domaine du
              trading professionnel. Ambitieux et visionnaire, Sandro incarne un
              modèle de réussite basé sur l&apos;autonomie et l&apos;innovation.{" "}
              <br />
              Il accompagne ses élèves dans leur parcours vers la liberté
              financière, leur offrant les clés pour maîtriser le marché et
              transformer leur vie. Grâce à son approche pragmatique et
              inspirante, il aide ceux qui souhaitent s&apos;affranchir des
              contraintes géographiques et financières, en leur ouvrant les
              portes d&apos;une nouvelle réalité.{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
