"use client";
import { tr } from "framer-motion/client";
import { useRef } from "react";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <main className=" flex-grow ">
        <div className="text-center mb-8">
          <h3 className="text-5xl mb-3">Analyse fondamentale</h3>
          <p className="text-xs">
            Rep&eacute;rez les points de retournement en identifiant trois
            interactions cl&eacute;s entre le prix et les niveaux de support ou
            de r&eacute;sistance. Une m&eacute;thode id&eacute;ale pour
            anticiper les changements de tendance.
          </p>
        </div>
        <div>
          <video
            ref={videoRef}
            controls={true}
            className="flex justify-center items-center text-center"
            width={500}
            height={500}
            src="/assets/videos/Johane_Aleoko_misintaka.mp4"
          >
            test
          </video>
        </div>
        <div className="flex space-x-4 ">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handlePlay}
          >
            Play
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handlePause}
          >
            Pause
          </button>
        </div>
      </main>
    </>
  );
}
