import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { path: "~/profile", href: "#profile" },
  { path: "~/skills", href: "#skills" },
  { path: "~/projects", href: "#projects" },
  { path: "~/education", href: "#education" },
  { path: "~/contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-signal flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
          yaswini@portfolio
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {LINKS.map((link) => (
            <li key={link.path}>
              <a
                href={link.href}
                className="px-3 py-1.5 rounded text-mist hover:text-ink hover:bg-panel-2 transition-colors"
              >
                {link.path}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-sm text-mist border border-line rounded px-3 py-1.5"
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm bg-void/95 border-b border-line">
          {LINKS.map((link) => (
            <li key={link.path}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded text-mist hover:text-ink hover:bg-panel-2 transition-colors"
              >
                {link.path}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  );
}
