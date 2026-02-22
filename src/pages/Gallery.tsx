import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dynamically import all images from the gallery folder
const galleryImages = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp,JPG}", { eager: true });
const imageUrls = Object.values(galleryImages).map((mod: any) => mod.default);

const Gallery = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
                            Our <span className="text-primary">Photo Gallery</span>
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                            A comprehensive collection of our rescued animals, happy moments, and behind-the-scenes at Once Upon a Rescue.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {imageUrls.map((url, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 10) * 0.05 }}
                                className="group relative aspect-square overflow-hidden rounded-3xl bg-muted shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <img
                                    src={url}
                                    alt={`Gallery image ${index + 1}`}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Gallery;
