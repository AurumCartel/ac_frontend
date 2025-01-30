"use client";

import React, {useState} from 'react';
import {Play, Clock, ChevronRight, BookOpen, PlayCircle} from "lucide-react";
import {CourseDetailsProps} from "@/utils/types/Course";

export default function CourseDetails({videoLessons, defaultVideoId = 1}: CourseDetailsProps) {
    const [selectedVideo, setSelectedVideo] = useState(
        videoLessons.find(video => video.id === defaultVideoId) || videoLessons[0]
    );
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Video Section */}
                <div className="lg:col-span-2 bg-zinc-800 rounded-lg border border-zinc-700">
                    <div className="aspect-video relative rounded-t-lg overflow-hidden">
                        <video
                            key={selectedVideo.id}
                            controls
                            className="w-full h-full object-cover"
                            src={selectedVideo.videoUrl}
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="text-xl font-medium mb-4 flex items-center gap-3">
                            <PlayCircle className="text-[#D4AF37] w-6 h-6"/>
                            {selectedVideo.title}
                        </h2>
                        <p className={`text-zinc-300 text-sm ${!isDescriptionExpanded && 'line-clamp-3'}`}>
                            {selectedVideo.description}
                        </p>
                        <button
                            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                            className="text-[#D4AF37] hover:underline hover:underline-offset-8 mt-4 text-sm flex items-center gap-1 transition-colors"
                        >
                            {isDescriptionExpanded ? 'Voir moins' : 'Voir plus'}
                            <ChevronRight className="w-4 h-4"/>
                        </button>
                    </div>
                </div>

                {/* Playlist Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center gap-2 px-2">
                        <BookOpen className="text-[#D4AF37]"/>
                        Playlist du cours
                    </h3>
                    <div className="space-y-2">
                        {videoLessons.map((lesson, index) => (
                            <div
                                key={lesson.id}
                                onClick={() => setSelectedVideo(lesson)}
                                className={`p-4 rounded-lg cursor-pointer transition-colors
                  ${selectedVideo.id === lesson.id
                                    ? 'bg-[#D4AF37] text-white'
                                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
                                }`}
                            >
                                <div className="flex gap-4">
                                    <div className="relative w-32 h-20 rounded-md overflow-hidden flex-shrink-0">
                                        <div className="absolute inset-0 bg-black/50">
                                            <Play className={`w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        ${selectedVideo.id === lesson.id ? 'text-white' : 'text-[#D4AF37]'}`}
                                            />
                                        </div>
                                        <video
                                            className="w-full h-full object-cover"
                                            src={lesson.videoUrl}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-sm mb-2">
                                            {index + 1}. {lesson.title}
                                        </p>
                                        <div className="flex items-center text-xs">
                                            <Clock className="w-4 h-4 mr-1"/>
                                            {lesson.duration}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}