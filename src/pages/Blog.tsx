import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-primary py-24 text-primary-foreground">
                <div className="container px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-heading font-extrabold mb-6"
                    >
                        Our <span className="text-secondary">Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl opacity-90 max-w-2xl mx-auto"
                    >
                        Heartwarming updates and useful tips from Once Upon a Rescue.
                    </motion.p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {blogPosts.slice().reverse().map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card
                                        className="h-full overflow-hidden border-border/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-card flex flex-col"
                                        onClick={() => navigate(`/blog/${post.id}`)}
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground bg-primary px-3 py-1 rounded-full shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <CardContent className="p-8 flex flex-col flex-1">
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                                                <Calendar className="h-3 w-3" />
                                                {post.date}
                                            </div>
                                            <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                                {post.title}
                                            </h2>
                                            <p className="text-muted-foreground mb-8 line-clamp-3 text-sm leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-8 w-8 rounded-full bg-accent/50 flex items-center justify-center">
                                                        <User className="h-4 w-4 text-muted-foreground" />
                                                    </div>
                                                    <span className="text-sm font-semibold">{post.author}</span>
                                                </div>
                                                <Button variant="link" className="p-0 text-primary font-bold group/btn">
                                                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
