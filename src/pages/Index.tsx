import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, PawPrint, Home, Users, ArrowRight, Quote, Star, ClipboardCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimalCard from "@/components/AnimalCard";
import GalleryCarousel from "@/components/GalleryCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { animals } from "@/data/animals";
import { testimonials } from "@/data/testimonials";
import founderHero from "@/assets/gallery/image.png";

const featuredAnimals = animals.filter((a) => a.featured);

const stats = [
  { icon: PawPrint, value: "100+", label: "Animals Rescued" },
  { icon: Home, value: "50+", label: "Happy Adoptions" },
  { icon: Users, value: "10+", label: "Active Volunteers" },
  { icon: Heart, value: "£30k+", label: "Donations Received" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Redesigned Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-white">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-8 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  Every Paw Has a Tail to Tell
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] mb-8 text-foreground drop-shadow-sm">
                Where Every Rescue <br />
                Begins a <span className="text-primary italic">Story</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                We're a dedicated team in Watford giving stray and abandoned animals the loving second chance they truly deserve.
              </p>
              <div className="flex flex-wrap gap-5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full text-lg px-10 h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black shadow-[0_10px_40px_-10px_hsl(var(--primary))] transition-all hover:-translate-y-1 active:scale-95"
                >
                  <Link to="/donate">
                    <Heart className="mr-2 h-6 w-6" /> Donate & Support
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="rounded-full text-lg px-8 h-16 font-bold hover:bg-accent/50 group"
                >
                  <Link to="/about" className="flex items-center gap-2">
                    Our Mission <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl -z-10 transform translate-x-4 translate-y-4" />
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl shadow-primary/20 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <img
                  src={founderHero}
                  alt="Founder with a rescued dog"
                  className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-full -z-0" />
      </section>

      {/* Impact Stats */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-heading font-extrabold">
                  {stat.value}
                </div>
                <div className="text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Animals - Hidden for now */}
      {/* <section className="py-16 md:py-24">
        ...
      </section> */}

      <GalleryCarousel />

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Happy Tails,{" "}
              <span className="text-primary">Happy Tales</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from families who found their perfect companion through Once
              Upon a Rescue.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Adopted {testimonial.animalName} •{" "}
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-primary-foreground"
          >
            <PawPrint className="h-12 w-12 mx-auto mb-6 hover:scale-110 transition-transform" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Whether you adopt, donate, or volunteer — every action saves a
              life. Join us in creating a world where no animal is left behind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full text-base px-8"
              >
                <Link to="/adopt">Adopt a Pet</Link>
              </Button> */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/donate">Support Our Cause</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
