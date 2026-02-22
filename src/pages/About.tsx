import { motion } from "framer-motion";
import { Heart, Target, Eye, Star, PawPrint, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { team } from "@/data/team";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Every animal deserves kindness, care, and a chance at a better life.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "We maintain complete transparency in our operations, finances, and adoption processes.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We strive for the highest standards of animal care and welfare in everything we do.",
  },
  {
    icon: PawPrint,
    title: "Community",
    description:
      "Building a network of caring individuals united by their love for animals.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-background to-accent py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
              About <span className="text-primary">Once Upon a Rescue</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a passionate team of animal lovers dedicated to rescuing,
              rehabilitating, and rehoming animals in need across the UK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every Paw Has a Tail to Tell began with a simple belief — that
                  every animal, no matter how broken or abandoned, deserves a
                  chance at love and happiness.
                </p>
                <p>
                  Founded by Megan Sciorio, our journey started with a deep-seated passion for animal welfare. What began as individual rescue efforts has since grown into Once Upon a Rescue — a thriving community of rescuers, volunteers, and adopters dedicated to giving every animal a second chance.
                </p>
                <p>
                  Today, we have rescued over 200 animals, facilitated more than
                  150 successful adoptions, and built a network of 50+ dedicated
                  volunteers who share our vision of a world where no animal
                  suffers alone.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary rounded-3xl p-8 md:p-12"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "200+", label: "Animals Rescued" },
                  { value: "150+", label: "Adoptions" },
                  { value: "50+", label: "Volunteers" },
                  { value: "3+", label: "Years of Service" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-heading font-extrabold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To facilitate transparent adoptions, encourage volunteering,
                    and drive donations through a compassionate, community-driven
                    approach — ensuring every rescued animal receives the care,
                    love, and home they deserve.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-border/50">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <Eye className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every rescued animal finds a safe and loving
                    home, and where communities are united by compassion and
                    respect for all living beings.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-2xl bg-accent mx-auto flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate individuals behind Once Upon a Rescue's mission.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/60 mx-auto flex items-center justify-center mb-4 relative group/avatar">
                      <span className="text-2xl font-heading font-bold text-primary-foreground">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    {member.social && (
                      <div className="flex justify-center gap-2">
                        {member.social.facebook && (
                          <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-accent hover:bg-primary hover:text-white transition-all text-muted-foreground" aria-label="Facebook">
                            <Facebook className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-accent hover:bg-primary hover:text-white transition-all text-muted-foreground" aria-label="Instagram">
                            <Instagram className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
