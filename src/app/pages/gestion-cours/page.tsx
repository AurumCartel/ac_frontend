"use client";

import React from "react";
import useTitle from "@/hooks/useTitle";

export default function Page() {
    useTitle("Gestion Cours");

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
            <h1 className="text-white">Gestion Cours</h1>
        </main>
    );
}