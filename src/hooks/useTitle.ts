import { useEffect } from 'react';

const useTitle = (title: string) => {
    useEffect(() => {
        const defaultTitle = 'Aurum Cartel';
        document.title = title ? `${title} - ${defaultTitle}` : defaultTitle;
    }, [title]);
};

export default useTitle;