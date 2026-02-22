import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  PawPrint,
  Heart,
  ClipboardCheck,
  Home as HomeIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimalCard from "@/components/AnimalCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { animals, Animal } from "@/data/animals";

const speciesFilters = ["All", "Dog", "Cat"];
const genderFilters = ["All", "Male", "Female"];
const sizeFilters = ["All", "Small", "Medium", "Large"];

const adoptionSteps = [
  {
    icon: Search,
    title: "Browse",
    description: "Browse our gallery of animals available for adoption.",
  },
  {
    icon: Heart,
    title: "Connect",
    description: "Fill out an inquiry form for the animal you love.",
  },
  {
    icon: ClipboardCheck,
    title: "Meet & Greet",
    description: "Visit us and spend time with your potential companion.",
  },
  {
    icon: HomeIcon,
    title: "Welcome Home",
    description: "Complete the adoption and give them a forever home!",
  },
];

const Adopt = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [sizeFilter, setSizeFilter] = useState("All");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);
  const { toast } = useToast();

  const filteredAnimals = animals.filter((animal) => {
    const matchesSearch =
      animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecies =
      speciesFilter === "All" || animal.species === speciesFilter.toLowerCase();
    const matchesGender =
      genderFilter === "All" || animal.gender === genderFilter;
    const matchesSize = sizeFilter === "All" || animal.size === sizeFilter;
    return matchesSearch && matchesSpecies && matchesGender && matchesSize;
  });

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted! 🎉",
      description: `Thank you for your interest in adopting ${selectedAnimal?.name}! We'll get back to you within 24-48 hours.`,
    });
    setShowInquiry(false);
    setSelectedAnimal(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-background to-secondary py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
              Find Your Perfect{" "}
              <span className="text-primary">Companion</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Every animal in our care is looking for a loving forever home.
              Browse our gallery and find the friend who&apos;s been waiting for
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="py-12 border-b border-border/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {adoptionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center mb-3">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-sm mb-1">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or breed..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Species:</span>
                {speciesFilters.map((f) => (
                  <Badge
                    key={f}
                    variant={speciesFilter === f ? "default" : "outline"}
                    className="cursor-pointer rounded-full"
                    onClick={() => setSpeciesFilter(f)}
                  >
                    {f}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium">Gender:</span>
                {genderFilters.map((f) => (
                  <Badge
                    key={f}
                    variant={genderFilter === f ? "default" : "outline"}
                    className="cursor-pointer rounded-full"
                    onClick={() => setGenderFilter(f)}
                  >
                    {f}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium">Size:</span>
                {sizeFilters.map((f) => (
                  <Badge
                    key={f}
                    variant={sizeFilter === f ? "default" : "outline"}
                    className="cursor-pointer rounded-full"
                    onClick={() => setSizeFilter(f)}
                  >
                    {f}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery */}
          {filteredAnimals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAnimals.map((animal, index) => (
                <motion.div
                  key={animal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AnimalCard
                    animal={animal}
                    onLearnMore={setSelectedAnimal}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <PawPrint className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">
                No animals found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Animal Detail Dialog */}
      <Dialog
        open={!!selectedAnimal && !showInquiry}
        onOpenChange={(open) => !open && setSelectedAnimal(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedAnimal && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">
                  Meet {selectedAnimal.name}
                </DialogTitle>
                <DialogDescription>
                  {selectedAnimal.breed} • {selectedAnimal.age} •{" "}
                  {selectedAnimal.gender}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src={selectedAnimal.image}
                    alt={`${selectedAnimal.name} - ${selectedAnimal.breed}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-2">About</h4>
                  <p className="text-muted-foreground">
                    {selectedAnimal.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Size:</span>{" "}
                    <span className="text-muted-foreground">
                      {selectedAnimal.size}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Health:</span>{" "}
                    <span className="text-muted-foreground">
                      {selectedAnimal.healthStatus}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-2">Temperament</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAnimal.temperament.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-2">
                    Adoption Requirements
                  </h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {selectedAnimal.adoptionRequirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={() => setShowInquiry(true)}
                  className="w-full rounded-full"
                  size="lg"
                >
                  <Heart className="mr-2 h-5 w-5" /> I Want to Adopt{" "}
                  {selectedAnimal.name}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Inquiry Form Dialog */}
      <Dialog open={showInquiry} onOpenChange={setShowInquiry}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-heading">
              Adoption Inquiry for {selectedAnimal?.name}
            </DialogTitle>
            <DialogDescription>
              Fill out this form and we&apos;ll get back to you soon!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleInquirySubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="inquiry-name">Your Name</Label>
              <Input
                id="inquiry-name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inquiry-email">Email</Label>
              <Input
                id="inquiry-email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inquiry-phone">Phone Number</Label>
              <Input
                id="inquiry-phone"
                type="tel"
                placeholder="+44 20 7946 0000"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inquiry-message">
                Why do you want to adopt {selectedAnimal?.name}?
              </Label>
              <Textarea
                id="inquiry-message"
                placeholder="Tell us about yourself and your home..."
                required
              />
            </div>
            <Button type="submit" className="w-full rounded-full">
              Submit Inquiry
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Adopt;
