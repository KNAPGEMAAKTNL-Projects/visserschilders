import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectGalleryProps {
    projects: Project[];
}

const categories = ["Alles", "Binnen", "Buiten", "Restauratie"];

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
    const [activeCategory, setActiveCategory] = useState("Alles");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "Alles") return projects;

        // Map simplified categories to data categories
        const categoryMap: Record<string, string> = {
            "Binnen": "Binnenschilderwerk",
            "Buiten": "Buitenschilderwerk",
            "Restauratie": "Restauratie"
        };

        const targetCategory = categoryMap[activeCategory];
        return projects.filter(project => project.category === targetCategory);
    }, [activeCategory, projects]);

    return (
        <div className="w-full">
            {/* Filter Buttons */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white text-text-muted border-gray-100 hover:border-primary/30 hover:text-primary"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.a
                                key={project.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                href={`/portfolio/${project.slug}`}
                                className={`group relative overflow-hidden rounded-sm cursor-pointer block h-full ${project.size || "col-span-1 row-span-1"}`}
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.title} - ${project.category} project door Schildersbedrijf Visser`}
                                    loading="eager"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <span className="text-xs uppercase tracking-wider text-accent mb-1 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white font-serif text-2xl">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
