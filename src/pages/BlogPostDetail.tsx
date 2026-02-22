import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const BlogPostDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <article className="pt-32 pb-24">
                <div className="container max-w-3xl px-4">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12"
                    >
                        <Link to="/blog">
                            <Button variant="ghost" className="gap-2 group text-muted-foreground hover:text-primary transition-colors pl-0">
                                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to all stories
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Post Header */}
                    <header className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-4 mb-6 text-sm text-primary font-bold uppercase tracking-widest"
                        >
                            {post.category}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 leading-tight"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-6 text-muted-foreground"
                        >
                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-accent/50 flex items-center justify-center">
                                    <User className="h-5 w-5" />
                                </div>
                                <span className="font-semibold text-foreground">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4" />
                                {post.date}
                            </div>
                        </motion.div>
                    </header>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Post Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="prose prose-lg dark:prose-invert max-w-none
                            prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground/90
                            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                            prose-p:leading-relaxed prose-p:mb-8
                            prose-img:rounded-2xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Footer CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-24 pt-12 border-t border-border"
                    >
                        <div className="bg-secondary/30 p-10 rounded-[2rem] text-center border border-border/50">
                            <h3 className="text-3xl font-heading font-bold mb-4">Want to help?</h3>
                            <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg">
                                Your support helps us give more animals like the ones in this story a second chance at life.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/donate">
                                    <Button size="lg" className="px-10 py-6 text-lg rounded-full">Donate Now</Button>
                                </Link>
                                <Link to="/volunteer">
                                    <Button size="lg" variant="outline" className="px-10 py-6 text-lg rounded-full">Volunteer</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPostDetail;
