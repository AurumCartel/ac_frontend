"use client";

<<<<<<< HEAD
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { videos } from "@/data/video";
import useTitle from "@/hooks/useTitle";

export default function Page() {
  useTitle("Analyse");
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const formattedCategory = category?.replace(/ /g, "-");

  // Filtrer les vidéos par catégorie
  const filteredVideos = videos.filter(
    (video) => video.category.toLowerCase() === formattedCategory?.toLowerCase()
  );

  // Gestion de l'index de la vidéo courante
  const [currentIndex, setCurrentIndex] = useState(0);

  // Vidéo courante
  const currentVideo = filteredVideos[currentIndex];

  // Fonction next video
  const handleNext = () => {
    if (currentIndex < filteredVideos.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Fonction prev video
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Fonction pour naviguer directement via une miniature
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <main className="flex-grow text-white mx-10">
      <div className="text-center mt-5 mb-7">
        <h3 className="text-5xl mb-5">
          Cours sur les{" "}
          <span className="text-[#D4AF37] capitalize">{formattedCategory}</span>
        </h3>
        <p className="text-center">
          Retrouvez toutes les vidéos de la catégorie {formattedCategory}.
        </p>
      </div>

      {filteredVideos.length > 0 ? (
        <div className="flex flex-col lg:flex-row">
          {/* Vidéo courante */}
          <div className="lg:w-3/4 mb-5 lg:mb-0">
            <div className="text-center relative">
              <video
                controls
                className="border-[#D4AF37] border-2 rounded-lg mx-auto"
                width="90%"
                height="auto"
                src={currentVideo?.src}
              ></video>
              <h2 className="text-4xl font-semibold my-3">
                {currentVideo?.title}
              </h2>
              <p className="text-gray-500 text-lg my-1">
                {currentVideo?.description}
              </p>
              <p className="text-base text-gray-400">
                Dur&eacute;e : {currentVideo?.duration}
              </p>
              {/* Indicateur de position */}
              <p className=" absolute bottom-20 right-20 mt-2 text-center text-sm font-semibold text-gray-500">
                Vid&eacute;o : {currentIndex + 1} / {filteredVideos.length}
              </p>
            </div>

            {/* Boutons de navigation */}
            <div className="flex justify-center gap-10 my-6">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-4 py-2 text-white ${
                  currentIndex === 0
                    ? "bg-gray-400"
                    : "bg-green-500 hover:bg-green-600"
                } rounded`}
              >
                Pr&eacute;c&eacute;dent
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === filteredVideos.length - 1}
                className={`px-4 py-2 text-white ${
                  currentIndex === filteredVideos.length - 1
                    ? "bg-gray-400"
                    : "bg-blue-500 hover:bg-blue-600"
                } rounded`}
              >
                Suivant
              </button>
            </div>
          </div>

          {/* Videos suivantes */}
          <div className="lg:w-1/4 lg:ml-5">
            <h3 className="text-lg font-semibold mb-2">
              Miniatures des vidéos :
            </h3>
            <div className="flex flex-col space-y-4 overflow-y-auto max-h-[75vh]">
              {filteredVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`cursor-pointer border rounded ${
                    currentIndex === index
                      ? "border-blue-500"
                      : "border-[#D4AF37] hover:border-blue-400"
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <video
                    src={video.src}
                    className="w-full h-32 object-cover"
                    muted
                    loop
                    autoPlay
                  ></video>
                  <p className="text-sm text-center mt-1">{video.title}</p>
                  <p className="text-sm text-gray-400">
                    Durée : {currentVideo?.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">Aucune vidéo trouvée.</p>
      )}
    </main>
  );
}
=======
import React from 'react';
import useTitle from "@/hooks/useTitle";
import CourseDetails from '@/components/CourseDetails';
import { VideoLesson } from '@/utils/types/Video';
import HeroSection from "@/components/HeroSection";

// Ces données devraient idéalement venir d'une API
const videoLessons: VideoLesson[] = [
    {
        id: 1,
        title: "Repérez les points de retournement tendance",
        duration: "30:54",
        description: "L'analyse fondamentale se penche sur les bases économiques et financières qui influencent la valeur d'un actif. En explorant des facteurs tels que les indicateurs macroéconomiques, les performances sectorielles, les rapports financiers des entreprises et les événements mondiaux, cette approche...",
        videoUrl: "/assets/videos/Johane_Aleoko_misintaka.mkv"
    },
    {
        id: 2,
        title: "Analyse des supports et résistances",
        duration: "25:30",
        description: "Suite de l'analyse fondamentale...",
        videoUrl: "/assets/videos/Johane_Aleoko_misintaka.mkv"
    },
    {
        id: 3,
        title: "Identification des niveaux clés",
        duration: "28:15",
        description: "Conclusion de l'analyse fondamentale...",
        videoUrl: "/assets/videos/Johane_Aleoko_misintaka.mkv"
    }
];

export default function Page() {
    useTitle("Analyse Fondamentale");

    return (
        <main className="min-h-screen bg-zinc-900 text-white">
            {/* Header Section */}
            <HeroSection
                title="Analyse"
                highlight="Fondamentale"
                description=" Repérez les points de retournement en identifiant trois interactions clés
                        entre le prix et les niveaux de support ou de résistance."
            />

            {/* Course Details Component */}
            <CourseDetails videoLessons={videoLessons} />
        </main>
    );
}
>>>>>>> cb665ab44885b9f79f890bd9ec19a1cfbbfef5da
