"use client";
import useTitle from "@/hooks/useTitle";

export default function Page() {
    useTitle('Accueil');
    return (
        <>
            <div>
                <h1>Home</h1>
            </div>
        </>
    );
}