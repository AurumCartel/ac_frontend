"use client";

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