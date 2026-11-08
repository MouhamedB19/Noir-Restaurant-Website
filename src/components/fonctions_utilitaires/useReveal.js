import { useEffect, useRef, useState } from "react";

function useReveal() {
    const elementRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.5
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();

    }, []);

    return [elementRef, visible];
}

export default useReveal;