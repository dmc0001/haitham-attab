import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import Resume from "../assets/resume-haitham.pdf";
import { icons } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    document.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-shell container">
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Haitham Attab, home"
        >
          <span className="wordmark">
            ha<span>.</span>
          </span>
          <span className="brand-name">
            {profile.name}
            <span>{profile.role}</span>
          </span>
        </a>
        <button
          id="menu-toggle"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="site-nav"
          className={`site-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <a
            className="nav-resume"
            href={Resume}
            download="Haitham-Attab-Resume.pdf"
          >
            Résumé {icons.diagonal}
          </a>
        </nav>
      </div>
    </header>
  );
}
