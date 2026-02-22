import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, PawPrint, ChevronDown, Heart, Info, MessageSquare, BookOpen, Camera, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navGroups = [
    {
      label: "Rescue",
      icon: <Sparkles className="h-4 w-4" />,
      items: [
        { to: "/success-stories", label: "Success Stories", desc: "Heartwarming tales of our rescues.", icon: <Heart className="h-4 w-4 text-pink-500" /> },
        { to: "/gallery", label: "Gallery", desc: "A glimpse into our daily lives.", icon: <Camera className="h-4 w-4 text-blue-500" /> },
        { to: "/blog", label: "Blog", desc: "News, updates and pet care tips.", icon: <BookOpen className="h-4 w-4 text-orange-500" /> },
      ]
    },
    {
      label: "Get Involved",
      icon: <Users className="h-4 w-4" />,
      items: [
        { to: "/volunteer", label: "Volunteer", desc: "Join our team and help animals.", icon: <Users className="h-4 w-4 text-green-500" /> },
        { to: "/donate", label: "Donate", desc: "Support our mission financially.", icon: <Heart className="h-4 w-4 text-red-500" /> },
      ]
    },
    {
      label: "About",
      icon: <Info className="h-4 w-4" />,
      items: [
        { to: "/about", label: "About Us", desc: "Our mission and who we are.", icon: <Info className="h-4 w-4 text-indigo-500" /> },
        { to: "/faq", label: "FAQ", desc: "Frequently asked questions.", icon: <MessageSquare className="h-4 w-4 text-purple-500" /> },
        { to: "/contact", label: "Contact", desc: "Get in touch with our team.", icon: <MessageSquare className="h-4 w-4 text-yellow-500" /> },
      ]
    }
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 flex justify-center",
          isScrolled ? "py-2" : "py-6"
        )}
      >
        <div
          className={cn(
            "w-full max-w-7xl rounded-[2rem] border border-border/40 bg-background/80 backdrop-blur-xl shadow-2xl transition-all duration-500 px-6 h-20 flex items-center justify-between",
            isScrolled ? "max-w-6xl shadow-primary/10 border-primary/10" : "max-w-7xl"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-primary/20">
              <PawPrint className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-black text-foreground leading-none tracking-tight">
                Once Upon
              </span>
              <span className="font-heading text-lg font-bold text-accent-foreground leading-none">
                a Rescue
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-full bg-transparent font-bold",
                      location.pathname === "/" && "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                {navGroups.map((group) => (
                  <NavigationMenuItem key={group.label}>
                    <NavigationMenuTrigger className="rounded-full bg-transparent font-bold">
                      {group.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.to}
                                className="block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group/item"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold leading-none mb-1">{item.label}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-bold shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
              <Link to="/donate">Donate</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="rounded-2xl h-12 w-12 bg-accent/50">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l-0">
                <div className="flex flex-col h-full bg-background overflow-hidden">
                  <div className="p-8 border-b border-border/50 flex flex-col items-center gap-4 bg-accent/10">
                    <div className="h-20 w-20 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/30">
                      <PawPrint className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="text-center">
                      <h2 className="font-heading text-2xl font-black">Once Upon a Rescue</h2>
                      <p className="text-sm text-muted-foreground">Every Paw Has a Tail to Tell</p>
                    </div>
                  </div>

                  <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-2xl text-xl font-bold transition-all",
                        location.pathname === "/" ? "bg-primary text-primary-foreground shadow-xl" : "hover:bg-accent"
                      )}
                    >
                      Home
                    </Link>

                    {navGroups.map((group) => (
                      <div key={group.label} className="space-y-3">
                        <div className="px-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
                          {group.label}
                        </div>
                        <div className="grid gap-2">
                          {group.items.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "flex items-center gap-4 p-4 rounded-2xl transition-all",
                                location.pathname === item.to ? "bg-primary/10 text-primary" : "hover:bg-accent"
                              )}
                            >
                              <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center">
                                {item.icon}
                              </div>
                              <div className="font-bold text-lg">{item.label}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </nav>

                  <div className="p-8 border-t border-border/50 bg-accent/5">
                    <Button asChild className="w-full rounded-[1.5rem] h-16 text-xl font-black shadow-2xl shadow-primary/20">
                      <Link to="/donate" onClick={() => setOpen(false)}>
                        <Heart className="mr-2 h-6 w-6" /> Support Our Cause
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {/* Spacer for non-home pages */}
      {location.pathname !== "/" && <div className="h-24" />}
    </>
  );
};

export default Navbar;
