import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqs } from "@/data/faqs";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const FAQ = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [openId, setOpenId] = useState<string | null>(null);

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-primary py-20 text-primary-foreground">
                <div className="container text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-extrabold mb-8"
                    >
                        Frequently Asked <span className="text-secondary">Questions</span>
                    </motion.h1>

                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search for questions..."
                            className="pl-12 h-14 rounded-full bg-white text-foreground border-none shadow-lg text-lg"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-20 container max-w-3xl">
                <div className="space-y-4">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="border border-border/50 rounded-2xl overflow-hidden bg-card"
                            >
                                <button
                                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                                            {faq.category}
                                        </span>
                                        <span className="font-heading font-semibold text-lg">{faq.question}</span>
                                    </div>
                                    <ChevronDown className={cn(
                                        "h-5 w-5 text-muted-foreground transition-transform duration-300",
                                        openId === faq.id && "rotate-180"
                                    )} />
                                </button>
                                <div className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openId === faq.id ? "max-h-[500px]" : "max-h-0"
                                )}>
                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">No questions found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-20 bg-secondary/30">
                <div className="container text-center">
                    <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                        <MessageCircle className="h-8 w-8 text-primary-foreground -rotate-3" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Still have questions?</h2>
                    <p className="text-muted-foreground mb-8">
                        Can't find the answer you're looking for? Please chat to our friendly team.
                    </p>
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
                        Get in Touch
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FAQ;
