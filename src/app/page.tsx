"use client";

import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import { Sparkles, Truck, Crown, Diamond, Gift, Instagram } from "lucide-react";
import Image from "next/image";

const benefits = [
  { icon: Sparkles, text: "30% OFF Royal Access" },
  { icon: Truck, text: "FREE VVIP Shipping" },
  { icon: Crown, text: "Early Access to Royal Collections" },
  { icon: Diamond, text: "Waitlist-Only Personal Styling" },
  { icon: Gift, text: "Legacy Perks for Lifetime" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-luxury-green selection:bg-luxury-gold/30 selection:text-white">
      {/* Dynamic Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-luxury-gold/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-luxury-gold/10 rounded-full blur-[150px] animate-pulse" />

        {/* Animated Particles/Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold/40 rounded-full"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo / Brand Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <Image
                src="/logo.png"
                alt="QASR Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-luxury-red/30 bg-luxury-red/10 mb-6">
              <span className="w-2 h-2 bg-luxury-red rounded-full animate-ping" />
              <span className="text-[10px] md:text-xs font-bold text-luxury-red uppercase tracking-widest">
                Urgent: Only 47 Royal Slots Remaining
              </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-playfair mb-8 leading-none">
              THE <span className="text-luxury-gold italic">ROYAL</span> ENTRANCE
            </h2>

            <div className="relative inline-block mb-8">
              <span className="text-3xl md:text-5xl font-playfair text-white/90">
                Unlock <span className="text-luxury-gold underline decoration-luxury-gold/30 underline-offset-8">30% OFF</span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-opensans leading-relaxed">
              Don&apos;t just wear fashion. Command it. Join the elite who define Pakistani elegance. Your throne awaits.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 w-full max-w-5xl"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -8, borderColor: "rgba(214, 171, 85, 0.4)", backgroundColor: "rgba(3, 49, 32, 0.4)" }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 group"
              >
                <div className="bg-luxury-gold/10 p-3 rounded-xl group-hover:bg-luxury-gold/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-luxury-gold" />
                </div>
                <span className="text-sm md:text-base text-white/80 text-left font-medium tracking-wide">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Section */}
          <div className="w-full max-w-md mx-auto mb-32 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-luxury-gold/20 to-transparent blur-2xl rounded-[2rem] -z-10" />
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 bg-black/60 backdrop-blur-2xl">
        <div className="container mx-auto px-6 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-24 h-12 mb-2">
              <Image
                src="/logo.png"
                alt="QASR Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/40 text-sm text-center max-w-xs leading-relaxed">
              Crafting legends in threads. Where heritage meets contemporary royalty.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com/qasr.threads"
              target="_blank"
              className="flex items-center gap-3 text-white/50 hover:text-luxury-gold transition-all group"
            >
              <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium tracking-widest">INSTAGRAM</span>
            </a>
          </div>

          <div className="text-white/10 text-[10px] tracking-[0.5em] uppercase text-center">
            &copy; {new Date().getFullYear()} QASR CLOTHING PIE. LTD. | DESIGNED FOR ROYALTY
          </div>
        </div>
      </footer>
    </main>
  );
}

