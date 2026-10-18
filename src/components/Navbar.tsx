import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#decors", label: "Декоры" },
  { href: "#specs", label: "Характеристики" },
  { href: "#applications", label: "Применение" },
  { href: "#contacts", label: "Контакты" },
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0b09]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 bg-gradient-to-br from-amber-400/20 to-amber-700/10">
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
          </span>
          <span className="font-serif text-2xl tracking-[0.18em] text-stone-50">
            LAMARTY
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm uppercase tracking-wider text-stone-300 transition-colors hover:text-amber-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden rounded-full border border-amber-400/60 px-6 py-2.5 text-sm uppercase tracking-wider text-amber-300 transition-all duration-300 hover:bg-amber-400 hover:text-stone-950 lg:inline-block"
        >
          Где купить
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Меню"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-stone-100 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-stone-100 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-stone-100 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 bg-[#0d0b09]/97 px-6 pb-6 pt-2 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm uppercase tracking-wider text-stone-300 hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
