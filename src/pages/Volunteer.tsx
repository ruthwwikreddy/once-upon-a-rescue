import { motion } from "framer-motion";
import { Heart, PawPrint, Users, Calendar, ClipboardCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Volunteer = () => {
    const roles = [
        {
            title: "Animal Care Assistant",
            description: "Help with feeding, grooming, and walking our rescues. Ideal for those who love hands-on interaction.",
            icon: PawPrint,
        },
        {
            title: "Event Coordinator",
            description: "Assist in organizing adoption drives, fundraising events, and community outreach programs.",
            icon: Calendar,
        },
        {
            title: "Digital Outreach",
            description: "Help manage our social media, take photos of animals, and write content for our blog.",
            icon: Users,
        },
        {
            title: "Administrative Support",
            description: "Assist with adoption paperwork, database management, and general office tasks.",
            icon: ClipboardCheck,
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-primary py-20 text-primary-foreground">
                <div className="container text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-extrabold mb-4"
                    >
                        Become a <span className="text-secondary">Volunteer</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg opacity-90 max-w-2xl mx-auto"
                    >
                        Your time and talent can save lives. Join our community of dedicated animal lovers today.
                    </motion.p>
                </div>
            </section>

            {/* Why Volunteer */}
            <section className="py-20 text-center container">
                <h2 className="text-3xl font-heading font-bold mb-12">How You Can Help</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                                <CardContent className="pt-6">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <role.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-bold text-lg mb-2">{role.title}</h3>
                                    <p className="text-sm text-muted-foreground">{role.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Registration Form */}
            <section className="py-20 bg-secondary/30">
                <div className="container max-w-4xl">
                    <Card className="p-8 md:p-12">
                        <div className="text-center mb-10">
                            <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h2 className="text-3xl font-heading font-bold">Volunteer Registration</h2>
                            <p className="text-muted-foreground mt-2">Fill out the form below to start your journey with us.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <Input placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <Input type="email" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone Number</label>
                                    <Input placeholder="+44 1923 549026" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Area of Interest</label>
                                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option>Animal Care</option>
                                        <option>Events</option>
                                        <option>Digital/Marketing</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Why do you want to volunteer with us?</label>
                                <Textarea placeholder="Share your motivation..." className="min-h-[120px]" />
                            </div>
                            <Button className="w-full rounded-full h-12 text-lg">Submit Application</Button>
                        </form>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Volunteer;
