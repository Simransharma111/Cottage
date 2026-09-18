import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { property } from "../data/property";

const navigation = [
  { label: "Stay", href: "#stay" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#18271f]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-10">
        <a
          href="#home"
          className="flex flex-col leading-none"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-serif text-xl font-semibold tracking-[0.08em] text-white sm:text-2xl">
            ROYAL COTTAGE
          </span>

          <span className="mt-1 text-[9px] uppercase tracking-[0.45em] text-white/70">
            Jibhi
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-white/85 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href={`https://wa.me/${property.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="border border-white/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#18271f]"
          >
            Reserve Your Stay
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={25} strokeWidth={1.5} />
          ) : (
            <Menu size={25} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="bg-[#18271f] px-6 pb-7 pt-2 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-white/10 py-4 text-xs uppercase tracking-[0.2em] text-white/80"
            >
              {item.label}
            </a>
          ))}

          <a
            href={`https://wa.me/${property.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-5 block border border-white/50 px-5 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
          >
            Reserve Your Stay
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;