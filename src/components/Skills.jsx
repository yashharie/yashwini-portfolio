import { motion } from "framer-motion";
import { skillGroups, softSkills, languages } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-panel/40 border-y border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="skills.list" title="What I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <p className="font-mono text-xs text-signal tracking-widest uppercase mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-panel-2 border border-line text-xs text-ink/90 font-mono hover:border-signal hover:text-signal transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-line bg-panel p-5"
          >
            <p className="font-mono text-xs text-beacon tracking-widest uppercase mb-3">
              soft_skills
            </p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-panel-2 border border-line text-xs text-ink/90 font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-line bg-panel p-5"
          >
            <p className="font-mono text-xs text-beacon tracking-widest uppercase mb-4">
              languages
            </p>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs font-mono text-mist mb-1">
                    <span className="text-ink">{lang.name}</span>
                    <span>{lang.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-panel-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-signal"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-xs text-signal tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold">{title}</h2>
    </motion.div>
  );
}
