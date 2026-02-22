import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dynamically import all images from the gallery folder
const galleryImages = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp,JPG}", { eager: true });
const imageUrls = Object.values(galleryImages).map((mod: any) => mod.default);

const GalleryCarousel = () => {
    // Use a subset for the carousel to keep it performant, but more than before
    const displayImages = imageUrls.slice(0, 20);
    const repeatedImages = [...displayImages, ...displayImages];

    return (
        <section className="py-24 bg-accent/30 overflow-hidden">
            <div className="container mb-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4">
                            Our <span className="text-primary">Life in Frames</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            A glimpse into the daily lives of our rescued friends. Every photo tells a story of a second chance.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="rounded-full px-8 hover:bg-primary hover:text-white transition-all">
                        <Link to="/gallery">
                            View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="relative flex w-full">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {repeatedImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative h-[280px] w-[220px] md:h-[380px] md:w-[320px] flex-shrink-0 overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-300 hover:scale-[1.03] group"
                        >
                            <img
                                src={img}
                                alt={`Pet ${idx}`}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GalleryCarousel;
