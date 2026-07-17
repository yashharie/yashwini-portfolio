import { motion } from "framer-motion";
import { education, certifications } from "../data/content";
import { SectionHeading } from "./Skills";

export default function Education() {
  const maxGpa = 4.0;

  return (
    <section id="education" className="px-6 py-20 bg-panel/40 border-y border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="education.record" title="Academic background" />

        <div className="grid lg:grid-cols-5 gap-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-xl border border-line bg-panel p-6"
          >
            <h3 className="font-display text-xl font-semibold">{education.degree}</h3>
            <p className="text-mist mt-1 text-sm">{education.institution}</p>
            <p className="font-mono text-xs text-mist mt-2">{education.duration}</p>

            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-4xl font-semibold text-signal">
                {education.gpa}
              </span>
              <span className="text-mist text-sm mb-1">/ {education.gpaScale.toFixed(2)} GPA</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-xl border border-line bg-panel p-6"
          >
            <p className="font-mono text-xs text-mist uppercase tracking-widest mb-5">
              semester_progression
            </p>
            <div className="flex items-end justify-between gap-4 h-32">
              {education.semesters.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center gap-2 flex-1">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(s.gpa / maxGpa) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                    className="w-full rounded-t-md bg-gradient-to-t from-signal-dim to-signal relative flex items-start justify-center"
                    style={{ minHeight: "4px" }}
                  >
                    <span className="absolute -top-6 font-mono text-xs text-ink">
                      {s.gpa.toFixed(2)}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3">
              {education.semesters.map((s) => (
                <span key={s.label} className="font-mono text-[10px] text-mist flex-1 text-center">
                  {s.label.replace("Semester ", "S")}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 rounded-xl border border-line bg-panel p-6"
        >
          <p className="font-mono text-xs text-beacon uppercase tracking-widest mb-4">
            certifications
          </p>
          {certifications.map((cert) => (
            <div key={cert.name}>
              <div className="flex flex-wrap items-baseline gap-2">
                <h4 className="font-display text-lg font-medium">{cert.name}</h4>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-panel-2 border border-line text-beacon">
                  {cert.status}
                </span>
              </div>
              <p className="text-mist text-sm mt-1">{cert.issuer}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {cert.modules.map((m) => (
                  <span
                    key={m}
                    className="px-2.5 py-1 rounded-md bg-panel-2 border border-line text-xs font-mono text-ink/80"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
