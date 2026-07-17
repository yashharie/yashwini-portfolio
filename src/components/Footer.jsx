import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} {profile.name} 
        </p>
      </div>
    </footer>
  );
}
