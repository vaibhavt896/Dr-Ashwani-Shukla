"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";

const CLINICS = [
  { label: "Rambagh Clinic", number: "919918601012", sub: "Primary – P Road" },
  { label: "Barra Clinic", number: "919918601013", sub: "Branch – Barra-2" },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-[200] flex flex-col items-end gap-3">
      {/* Clinic options popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2 mb-1"
          >
            {CLINICS.map((c) => (
              <a
                key={c.number}
                href={`https://wa.me/${c.number}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20${encodeURIComponent(c.label)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-2xl pl-3 pr-5 py-3 shadow-2xl border border-midnight/8 hover:shadow-xl hover:-translate-y-0.5 transition-all group min-w-[210px]"
              >
                {/* WhatsApp icon */}
                <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                    <path d="M16.002 3C9.374 3 4 8.373 4 15c0 2.385.678 4.61 1.853 6.497L4 29l7.733-1.832A11.94 11.94 0 0 0 16.002 28C22.63 28 28 22.627 28 16S22.63 3 16.002 3Zm0 21.818a9.878 9.878 0 0 1-5.04-1.38l-.36-.214-3.73.883.913-3.638-.234-.37A9.819 9.819 0 0 1 6.18 16c0-5.418 4.41-9.818 9.822-9.818 5.412 0 9.82 4.4 9.82 9.818 0 5.418-4.408 9.818-9.82 9.818Zm5.389-7.356c-.295-.148-1.747-.861-2.018-.96-.27-.098-.467-.148-.663.149-.196.296-.76.96-.932 1.157-.173.197-.345.222-.64.074-.296-.148-1.248-.46-2.376-1.467-.878-.782-1.47-1.748-1.642-2.044-.172-.296-.018-.456.13-.604.133-.132.295-.345.443-.518.148-.172.197-.296.296-.493.099-.197.05-.37-.025-.518-.075-.148-.663-1.601-.908-2.191-.24-.577-.482-.498-.663-.508l-.566-.01a1.086 1.086 0 0 0-.788.37c-.27.297-1.033 1.01-1.033 2.462s1.058 2.855 1.206 3.053c.148.197 2.082 3.178 5.044 4.458.705.304 1.255.485 1.684.622.707.225 1.351.193 1.86.117.567-.085 1.747-.714 1.994-1.403.246-.689.246-1.28.172-1.403-.074-.123-.27-.197-.566-.345Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-midnight truncate">{c.label}</p>
                  <p className="text-[10px] text-slate">{c.sub}</p>
                </div>
                <Phone className="w-3.5 h-3.5 text-slate/50 shrink-0" />
              </a>
            ))}

            {/* Label */}
            <p className="text-[10px] text-slate/60 text-center font-medium tracking-wide">Chat on WhatsApp</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <div className="relative">
        {/* Pulse rings — only when closed */}
        {!open && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25D366]"
              animate={{ scale: [1, 1.7], opacity: [0.35, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25D366]"
              animate={{ scale: [1, 1.4], opacity: [0.25, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            />
          </>
        )}

        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40 flex items-center justify-center text-white focus:outline-none"
          aria-label="Chat on WhatsApp"
          style={{ boxShadow: "0 8px 30px -4px rgba(37,211,102,0.55)" }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
                  <path d="M16.002 3C9.374 3 4 8.373 4 15c0 2.385.678 4.61 1.853 6.497L4 29l7.733-1.832A11.94 11.94 0 0 0 16.002 28C22.63 28 28 22.627 28 16S22.63 3 16.002 3Zm0 21.818a9.878 9.878 0 0 1-5.04-1.38l-.36-.214-3.73.883.913-3.638-.234-.37A9.819 9.819 0 0 1 6.18 16c0-5.418 4.41-9.818 9.822-9.818 5.412 0 9.82 4.4 9.82 9.818 0 5.418-4.408 9.818-9.82 9.818Zm5.389-7.356c-.295-.148-1.747-.861-2.018-.96-.27-.098-.467-.148-.663.149-.196.296-.76.96-.932 1.157-.173.197-.345.222-.64.074-.296-.148-1.248-.46-2.376-1.467-.878-.782-1.47-1.748-1.642-2.044-.172-.296-.018-.456.13-.604.133-.132.295-.345.443-.518.148-.172.197-.296.296-.493.099-.197.05-.37-.025-.518-.075-.148-.663-1.601-.908-2.191-.24-.577-.482-.498-.663-.508l-.566-.01a1.086 1.086 0 0 0-.788.37c-.27.297-1.033 1.01-1.033 2.462s1.058 2.855 1.206 3.053c.148.197 2.082 3.178 5.044 4.458.705.304 1.255.485 1.684.622.707.225 1.351.193 1.86.117.567-.085 1.747-.714 1.994-1.403.246-.689.246-1.28.172-1.403-.074-.123-.27-.197-.566-.345Z" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
