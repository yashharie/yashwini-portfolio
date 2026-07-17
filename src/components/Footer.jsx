import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} {profile.name} — built with React &amp; Tailwind
        </p>
        <p className="font-mono text-xs text-mist flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
          status: online
        </p>
      </div>
    </footer>
  );
}
