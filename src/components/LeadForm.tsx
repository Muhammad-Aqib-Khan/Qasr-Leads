"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function LeadForm() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, email, whatsapp }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage("Welcome to the Royal Court 👑");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setMessage("Failed to connect to the Royal Court.");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-luxury-green/20 border border-luxury-gold/30 rounded-2xl backdrop-blur-md shadow-[0_0_50px_rgba(3,49,32,0.3)]"
            >
                <CheckCircle2 className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-2xl font-playfair text-luxury-gold mb-2">Thank You, My Queen</h3>
                <p className="text-white/80">{message}</p>
            </motion.div>
        );
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 w-full max-w-md mx-auto"
        >
            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <label htmlFor="firstName" className="block text-sm font-medium text-luxury-gold mb-2 uppercase tracking-widest">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-luxury-green/10 border border-white/10 rounded-lg focus:outline-none focus:border-luxury-gold/50 transition-colors text-white placeholder:text-white/20"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <label htmlFor="email" className="block text-sm font-medium text-luxury-gold mb-2 uppercase tracking-widest">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="queen@royalty.com"
                        className="w-full px-4 py-3 bg-luxury-green/10 border border-white/10 rounded-lg focus:outline-none focus:border-luxury-gold/50 transition-colors text-white placeholder:text-white/20"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-luxury-gold mb-2 uppercase tracking-widest">
                        WhatsApp Number (Optional)
                    </label>
                    <input
                        id="whatsapp"
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 bg-luxury-green/10 border border-white/10 rounded-lg focus:outline-none focus:border-luxury-gold/50 transition-colors text-white placeholder:text-white/20"
                    />
                </motion.div>
            </div>

            {status === "error" && (
                <p className="text-luxury-red text-sm text-center font-medium animate-pulse">{message}</p>
            )}

            <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02, backgroundColor: "#033120" }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "w-full py-4 bg-luxury-gold text-white font-bold rounded-lg transition-all duration-300 shadow-xl shadow-luxury-gold/20 flex items-center justify-center gap-2 uppercase tracking-widest",
                    status === "loading" && "opacity-70 cursor-not-allowed"
                )}
            >
                {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    "CLAIM MY THRONE 👑"
                )}
            </motion.button>
            <p className="text-[10px] text-white/30 text-center uppercase tracking-tighter">
                Secure & Royal Access Guaranteed
            </p>
        </motion.form>
    );
}
