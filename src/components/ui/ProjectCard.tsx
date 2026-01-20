import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface Props {
    image: string;
    title: string;
    category: string;
    href: string;
    className?: string;
    delay?: number;
}

export const ProjectCard = ({
    image,
    title,
    category,
    href,
    className = "",
    delay = 0,
}: Props) => {
    const ref = useRef(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [imageLoaded, setImageLoaded] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);

    // Check if image is already loaded (cached) on mount
    useEffect(() => {
        if (imgRef.current?.complete && imgRef.current?.naturalHeight !== 0) {
            setImageLoaded(true);
        }
    }, []);

    // Trigger animation with delay when both conditions are met
    useEffect(() => {
        if (isInView && imageLoaded) {
            const timer = setTimeout(() => {
                setShouldShow(true);
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [isInView, imageLoaded, delay]);

    return (
        <div
            ref={ref}
            className={`group relative h-full min-h-[24rem] overflow-hidden rounded-sm cursor-pointer ${className}`}
        >
            <a href={href} className="block w-full h-full">
                {/* Skeleton placeholder */}
                <div
                    className={`absolute inset-0 bg-gray-200 transition-opacity duration-700 ${
                        shouldShow ? "opacity-0" : "opacity-100"
                    }`}
                />

                {/* Image - always rendered for loading, but visually hidden until ready */}
                <img
                    ref={imgRef}
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setImageLoaded(true)}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                        shouldShow
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                    }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Text content */}
                <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs uppercase tracking-wider text-accent mb-1 block">
                        {category}
                    </span>
                    <h3 className="text-2xl font-serif text-white">{title}</h3>
                </div>
            </a>
        </div>
    );
};
