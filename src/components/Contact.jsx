import { motion } from "framer-motion";
import { Mail, Code2, Link as LinkIcon } from "lucide-react";
import { profile } from "../data/content";
import { SectionHeading } from "./Skills";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="contact.connect" title="Let's build something" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-line bg-panel overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-line bg-panel-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-beacon" />
            <span className="w-2.5 h-2.5 rounded-full bg-signal" />
            <span className="ml-3 font-mono text-xs text-mist">contact.json</span>
          </div>

          <div className="p-6 sm:p-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-start gap-3 rounded-lg border border-line bg-panel-2 p-4 hover:border-signal transition-colors max-w-sm"
            >
              <Mail size={18} className="text-signal mt-0.5 shrink-0" />
              <div>
                <p className="font-mono text-[11px] text-mist uppercase tracking-widest">
                  email
                </p>
                <p className="text-sm text-ink mt-0.5 break-all">{profile.email}</p>
              </div>
            </a>
          </div>

          <div className="px-6 sm:px-8 pb-8 flex gap-3">
            <a
              href={profile.github}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-line text-ink font-medium text-sm hover:border-signal hover:text-signal transition-colors"
            >
              <Code2 size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-signal text-void font-medium text-sm hover:bg-signal-dim transition-colors"
            >
              <LinkIcon size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
