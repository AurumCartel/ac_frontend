"use client";
import useTitle from "@/hooks/useTitle";
import { useRef } from "react";

export default function Page() {
  useTitle("Analyse");

  return (
    <>
      <main className=" flex-grow text-white">
        <div className="text-center mt-5 mb-7">
          <h3 className="text-5xl mb-5">Analyse fondamentale</h3>
          <p className="text-center">
            Rep&eacute;rez les points de retournement en identifiant trois
            interactions cl&eacute;s entre le prix et les niveaux de support ou
            de r&eacute;sistance. <br /> Une m&eacute;thode id&eacute;ale pour
            anticiper les changements de tendance.
          </p>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="mx-28 ">
            <video
              controls={true}
              className="border-[#D4AF37] border-2 flex justify-center items-center text-center rounded-lg mb-3"
              width={1000}
              height={1000}
              src="/assets/videos/Johane_Aleoko_misintaka.mp4"
            >
              test
            </video>

            <span className="text-2xl">
              1 - Rep&eacute;rez les points de retournement tendance...
            </span>
            <p className="text-sm mt-4 mb-4">
              L&apos;analyse fondamentale se penche sur les bases
              &eacute;conomiques et financi&egrave;res qui influencent la valeur
              d&apos;un actif. En explorant des facteurs tels que les
              indicateurs macro&eacute;conomiques, les performances
              sectorielles, les rapports financiers des entreprises et les
              &eacute;v&eacute;nements mondiaux, cette approche…
            </p>
            <button
              type="button"
              className="text-[#D4AF37] hover:border-b-2 border-[#D4AF37] "
            >
              Voir plus
            </button>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <video
                controls={true}
                className="border-[#D4AF37] border-2 flex justify-center items-center text-center rounded-lg mb-3"
                width={250}
                height={250}
                src="/assets/videos/Johane_Aleoko_misintaka.mp4"
              >
                test
              </video>
              <div className="text-xl">
                <span className="text-sm">
                  1 - L&apos;analyse fondamentale se penche sur...
                </span>
                <p className="text-sm mt-4 mb-4">30:54</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <video
                controls={true}
                className="border-[#D4AF37] border-2 flex justify-center items-center text-center rounded-lg mb-3"
                width={250}
                height={250}
                src="/assets/videos/Johane_Aleoko_misintaka.mp4"
              >
                test
              </video>
              <div className="text-xl">
                <span className="text-sm">
                  1 - L&apos;analyse fondamentale se penche sur...
                </span>
                <p className="text-sm mt-4 mb-4">30:54</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <video
                controls={true}
                className="border-[#D4AF37] border-2 flex justify-center items-center text-center rounded-lg mb-3"
                width={250}
                height={250}
                src="/assets/videos/Johane_Aleoko_misintaka.mp4"
              >
                test
              </video>
              <div className="text-xl">
                <span className="text-sm">
                  1 - L&apos;analyse fondamentale se penche sur...
                </span>
                <p className="text-sm mt-4 mb-4">30:54</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
