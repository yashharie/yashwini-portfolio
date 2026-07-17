import { motion } from "framer-motion";
import { ExternalLink, Code2, Truck, Warehouse, Users, Radar, HeartPulse } from "lucide-react";
import { projects } from "../data/content";
import { SectionHeading } from "./Skills";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="projects.featured" title="Case study" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-2xl border border-line bg-panel overflow-hidden"
        >
          {/* browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-line bg-panel-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-beacon" />
            <span className="w-2.5 h-2.5 rounded-full bg-signal" />
            <span className="ml-3 font-mono text-xs text-mist truncate">
              gashub.app/dashboard
            </span>
            <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-signal">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              {featured.status}
            </span>
          </div>

          <div className="p-6 sm:p-8 grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-mist uppercase tracking-widest mb-2">
                {featured.type}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold">
                {featured.name}
                <span className="text-mist font-body font-normal text-lg">
                  {" "}
                  — {featured.tagline}
                </span>
              </h3>
              <p className="text-mist mt-4 leading-relaxed">{featured.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-panel-2 border border-line text-xs font-mono text-signal"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={featured.links.repo}
                  className="inline-flex items-center gap-2 text-sm font-mono text-ink hover:text-signal transition-colors"
                >
                  <Code2 size={16} /> repository
                </a>
                
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="font-mono text-xs text-mist uppercase tracking-widest mb-3">
                changelog
              </p>
              <ul className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {featured.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex gap-2.5 text-sm text-ink/90"
                  >
                    <span className="text-beacon font-mono text-xs mt-0.5 shrink-0">
                      +
                    </span>
                    <span>{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-line">
            {[
              { icon: Truck, label: "Delivery tracking" },
              { icon: Warehouse, label: "Warehouse mgmt" },
              { icon: Users, label: "5 user roles" },
              { icon: Radar, label: "AI demand forecast" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 py-5 text-center border-r border-line last:border-r-0 hover:bg-panel-2/50 transition-colors"
              >
                <Icon size={18} className="text-signal" />
                <span className="text-xs text-mist font-mono">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* secondary projects */}
        {others.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            {others.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-line bg-panel p-6 hover:border-signal/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <HeartPulse size={18} className="text-beacon shrink-0" />
                    <div>
                      <p className="font-mono text-[11px] text-mist uppercase tracking-widest">
                        {p.type}
                      </p>
                      <h4 className="font-display text-lg font-semibold">{p.name}</h4>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-panel-2 border border-line text-mist shrink-0">
                    {p.status}
                  </span>
                </div>

                <p className="text-mist text-sm mt-3 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-panel-2 border border-line text-[11px] font-mono text-signal"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs text-ink/80">
                      <span className="text-beacon font-mono">+</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-4">
                  <a
                    href={p.links.repo}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-ink hover:text-signal transition-colors"
                  >
                    <Code2 size={14} /> repository
                  </a>
               
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
