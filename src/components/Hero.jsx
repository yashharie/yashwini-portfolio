import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/content";
import avatar from "../assets/avatar.jpeg";

const ROLES = ["Full Stack Developer Intern", "Java Developer", "Laravel + React Builder", "REST API Developer"];

function TypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 35 : 55;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-signal">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-signal ml-1 align-middle animate-pulse" />
    </span>
  );
}

function PhotoPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative w-full max-w-sm sm:max-w-md"
    >
      <div className="relative rounded-2xl border border-line bg-panel p-2 shadow-2xl shadow-black/40">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-signal/30 via-transparent to-beacon/20 -z-10 blur-xl opacity-60" />
        <img
          src={avatar}
          alt={profile.name}
          className="w-full aspect-[3/4] object-cover rounded-xl"
        />
        <span className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-void/80 backdrop-blur border border-line font-mono text-[10px] text-signal">
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          online
        </span>
      </div>
    </motion.div>
  );
}

function RoutePing() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        id="route"
        d="M -50 500 C 200 500, 250 200, 480 220 S 750 420, 1050 120"
        fill="none"
        stroke="#232C40"
        strokeWidth="2"
        strokeDasharray="6 8"
      />
      <circle r="5" fill="#2DD4BF">
        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
          <mpath href="#route" />
        </animateMotion>
      </circle>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="profile" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-fade" />
      <RoutePing />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-beacon tracking-widest uppercase mb-4"
          >
            status: available for internship
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-glow"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm text-mist"
          >
            <span className="text-ink">{profile.role}</span>
            {profile.stack.map((s) => (
              <span key={s} className="flex items-center gap-2">
                <span className="text-line">|</span>
                <span className="text-signal">{s}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl h-8"
          >
            <TypedRole />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-mist max-w-md leading-relaxed"
          >
            Building role-based dashboards, REST APIs, and data-driven features —
            currently shipping <span className="text-ink">{profile.stack.join(", ")}</span>{" "}
            in production-style projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-signal text-void font-medium text-sm hover:bg-signal-dim transition-colors"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-line text-ink font-medium text-sm hover:border-signal hover:text-signal transition-colors"
            >
              <Mail size={16} /> Get in touch
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <PhotoPanel />
        </div>
      </div>
    </section>
  );
}
