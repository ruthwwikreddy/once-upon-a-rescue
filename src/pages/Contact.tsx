import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Instagram,
  Facebook,
  Twitter,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ✉️",
      description:
        "Thank you for reaching out. We'll get back to you within 24-48 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-background to-accent py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, want to help, or need to report an animal in
              distress? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="rounded-full px-8" size="lg">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <Card className="border-border/50">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">
                        Our Location
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Watford, United Kingdom
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        +44 1923 549026
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        onceuponarescue@outlook.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Emergency */}
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-destructive">
                      Emergency Rescue
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Found an animal in distress? Call our emergency line:
                    </p>
                    <p className="font-bold text-destructive">
                      +44 1923 549026
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="font-heading font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-3 rounded-xl bg-accent hover:bg-primary/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-accent-foreground" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-xl bg-accent hover:bg-primary/10 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-accent-foreground" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-xl bg-accent hover:bg-primary/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-accent-foreground" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-border/50 bg-muted aspect-video flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-30" />
                  <p className="text-sm font-medium">Map Placeholder</p>
                  <p className="text-xs opacity-60">
                    Embed Google Maps here
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
