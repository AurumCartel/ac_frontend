import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Scrolls to top on route change
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Ce composant ne rend rien
};

export default useScrollToTop;
