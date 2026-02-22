import { motion } from "framer-motion";
import { Quote, Calendar, User, ArrowRight, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { successStories } from "@/data/success-stories";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SuccessStories = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
                <div className="container relative text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6 text-primary font-medium text-sm"
                    >
                        <Heart className="h-4 w-4 fill-current" />
                        <span>Every Rescue is a Second Chance</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight"
                    >
                        Happy <span className="text-primary italic">Tails</span>, <br className="md:hidden" />
                        Happy <span className="text-secondary italic">Tales</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Celebrating the beautiful journeys of our rescues and the wonderful families who opened their hearts and homes.
                    </motion.p>
                </div>
            </section>

            {/* Stories Gallery */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {successStories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <Card className="group overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-500 border-none bg-background/60 backdrop-blur-sm">
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="grid grid-cols-2 h-full">
                                            <div className="relative">
                                                <img
                                                    src={story.beforeImage}
                                                    alt={`${story.name} before`}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute bottom-4 left-4">
                                                    <span className="bg-black/60 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Before</span>
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <img
                                                    src={story.afterImage}
                                                    alt={`${story.name} after`}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute bottom-4 left-4">
                                                    <span className="bg-primary/80 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2 py-1 rounded">After</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                    </div>
                                    <CardContent className="p-8 flex-1 flex flex-col relative">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-2xl font-heading font-bold">{story.name}</h3>
                                            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-secondary text-secondary-foreground rounded-full shadow-sm">
                                                {story.species}
                                            </span>
                                        </div>

                                        <div className="relative mb-8">
                                            <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/10 -z-0" />
                                            <p className="text-muted-foreground leading-relaxed italic relative z-10">
                                                "{story.story}"
                                            </p>
                                        </div>

                                        <div className="mt-auto space-y-4 pt-6 border-t border-border/50">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                                                    <User className="h-5 w-5 text-accent-foreground" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Adopter</p>
                                                    <p className="font-semibold">{story.adopterName}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground pl-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{story.date}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Share Your Story CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-background rounded-[3rem] p-12 md:p-20 shadow-xl border border-primary/10 relative"
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-lg transform rotate-12">
                            <Heart className="h-10 w-10 text-white fill-current" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 mt-4">Have a Success Story?</h2>
                        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            We love hearing how our former residents are doing in their new homes.
                            Your story could be the inspiration someone needs to choose adoption.
                        </p>
                        <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold group shadow-lg shadow-primary/20">
                            Submit Your Story <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SuccessStories;
