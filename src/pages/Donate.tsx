import { motion } from "framer-motion";
import {
  Heart,
  Stethoscope,
  UtensilsCrossed,
  Home,
  Shield,
  QrCode,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const donationImpact = [
  {
    amount: "£5",
    description: "Provides a day's meals for 5 rescued animals",
    icon: UtensilsCrossed,
  },
  {
    amount: "£10",
    description: "Feeds a dog for an entire week",
    icon: Heart,
  },
  {
    amount: "£25",
    description: "Covers basic vaccination for one animal",
    icon: Shield,
  },
  {
    amount: "£50",
    description: "Funds emergency medical treatment",
    icon: Stethoscope,
  },
  {
    amount: "£100",
    description: "Sponsors one month of shelter care",
    icon: Home,
  },
  {
    amount: "£250",
    description: "Supports a full rescue and rehabilitation",
    icon: Heart,
  },
];

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-accent via-background to-secondary py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
              Support Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your generosity helps us rescue, rehabilitate, and rehome animals
              in need. Every pound makes a difference in an animal's life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* UPI QR Code */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 overflow-hidden h-full">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center mb-6">
                    <QrCode className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-2">
                    Donate via Bank Transfer
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Scan the QR code below for instant local donations
                  </p>

                  <div className="bg-muted rounded-2xl p-6 mx-auto max-w-[240px] aspect-square flex items-center justify-center mb-6 border-2 border-dashed border-border group hover:border-primary transition-colors">
                    <div className="text-center">
                      <QrCode className="h-12 w-12 text-muted-foreground/40 mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        UPI QR Code
                      </p>
                      <p className="text-[10px] text-muted-foreground/60 mt-1">
                        (Scan to pay)
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-sm text-muted-foreground">
                      Account Name:{" "}
                      <span className="font-semibold text-foreground">
                        Once Upon a Rescue
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sort Code:{" "}
                      <span className="font-semibold text-foreground">
                        12-34-56
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Account No:{" "}
                      <span className="font-semibold text-foreground">
                        98765432
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* PayPal Donation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 overflow-hidden h-full">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <div className="h-14 w-14 rounded-2xl bg-[#003087]/10 mx-auto flex items-center justify-center mb-6">
                    <img
                      src="https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg"
                      alt="PayPal"
                      className="h-7 w-7"
                    />
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-2">
                    Global Donations
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Safe & secure payments through PayPal
                  </p>

                  <div className="bg-white rounded-2xl p-4 mx-auto max-w-[240px] aspect-square flex items-center justify-center mb-6 shadow-sm border border-border group hover:shadow-md transition-all">
                    <a
                      href="https://www.paypal.com/paypalme/onceuponarescuex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block"
                    >
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://www.paypal.com/paypalme/onceuponarescuex"
                        alt="PayPal QR Code"
                        className="w-full h-full rounded-lg"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    </a>
                  </div>

                  <div className="mt-auto space-y-4">
                    <p className="text-sm text-muted-foreground">
                      PayPal Me:{" "}
                      <a
                        href="https://www.paypal.com/paypalme/onceuponarescuex"
                        className="font-semibold text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @onceuponarescuex
                      </a>
                    </p>
                    <a
                      href="https://www.paypal.com/paypalme/onceuponarescuex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#0070ba] text-white font-bold py-3 px-8 rounded-full hover:bg-[#005ea6] transition-colors w-full shadow-lg shadow-blue-500/20"
                    >
                      Donate with PayPal
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Where Your Money <span className="text-primary">Goes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every donation directly supports the care and well-being of
              rescued animals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationImpact.map((item, index) => (
              <motion.div
                key={item.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-extrabold text-primary">
                        {item.amount}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Donations Are Used */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              How We Use <span className="text-primary">Donations</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  label: "Medical Care & Vaccinations",
                  percentage: "40%",
                },
                { label: "Food & Nutrition", percentage: "25%" },
                {
                  label: "Shelter & Infrastructure",
                  percentage: "20%",
                },
                { label: "Rescue Operations", percentage: "15%" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="text-3xl font-heading font-extrabold text-primary w-16">
                    {item.percentage}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
