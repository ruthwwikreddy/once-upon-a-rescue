import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, PawPrint, Camera, Users, Info } from "lucide-react";

const Footer = () => {
  const footerGroups = [
    {
      label: "Rescue",
      items: [
        { to: "/success-stories", label: "Success Stories" },
        { to: "/gallery", label: "Gallery" },
        { to: "/blog", label: "Blog" },
      ]
    },
    {
      label: "Help Us",
      items: [
        { to: "/volunteer", label: "Volunteer" },
        { to: "/donate", label: "Donate" },
      ]
    },
    {
      label: "Information",
      items: [
        { to: "/about", label: "About Us" },
        { to: "/faq", label: "FAQ" },
        { to: "/contact", label: "Contact" },
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-primary-foreground border-t border-primary/10">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-xl shadow-primary/20">
                <PawPrint className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-black leading-none tracking-tight">Once Upon</span>
                <span className="font-heading text-xl font-bold text-primary leading-none">a Rescue</span>
              </div>
            </Link>
            <p className="text-lg opacity-80 leading-relaxed max-w-md">
              Every Paw Has a Tail to Tell. We rescue, rehabilitate, and rehome
              animals in need, giving them a second chance at a happy life in Watford and beyond.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram className="h-6 w-6" />, label: "Instagram" },
                { icon: <Facebook className="h-6 w-6" />, label: "Facebook", href: "https://www.facebook.com/megan.sciorio?rdid=Be8vLeltj7u7VGsA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CCtvxfXCL%2F#" },
                { icon: <Twitter className="h-6 w-6" />, label: "Twitter" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Groups */}
          {footerGroups.map((group) => (
            <div key={group.label} className="space-y-6">
              <h3 className="font-heading font-black text-xl uppercase tracking-widest text-primary/80">{group.label}</h3>
              <nav className="flex flex-col gap-4">
                {group.items.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-lg opacity-70 hover:opacity-100 hover:text-primary transition-all hover:translate-x-1 w-fit flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="mt-20 pt-12 border-t border-primary-foreground/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
              <MapPin className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest opacity-50">Location</div>
              <div className="font-bold">Watford, United Kingdom</div>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest opacity-50">Call Us</div>
              <div className="font-bold underline">+44 1923 549026</div>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest opacity-50">Email</div>
              <div className="font-bold underline text-sm">onceuponarescue@outlook.com</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm opacity-40">
          <p>© 2024 Once Upon a Rescue. All rights reserved. Charity No. 123456789. Made with ❤️ for animals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
