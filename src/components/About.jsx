import { motion } from "framer-motion";
import { profile, highlights } from "../data/content";

export default function About() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <p className="font-mono text-xs text-signal tracking-widest uppercase mb-3">
            profile.summary
          </p>
          <p className="text-mist leading-relaxed text-base sm:text-lg">
            {profile.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2 rounded-xl border border-line bg-panel p-6"
        >
          <p className="font-mono text-xs text-mist tracking-widest uppercase mb-4">
            technical_highlights
          </p>
          <ul className="space-y-2.5">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink/90">
                <span className="text-signal mt-0.5">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
