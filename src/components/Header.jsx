import { Menu, X } from "lucide-react";
import { useState } from "react";
import { whatsappLink } from "../data/property";

const links = [
  { label: "Stay", href: "#stay" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="w-full px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12 lg:pt-8">
        <div className="flex w-full items-center justify-between">

          {/* Logo */}
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          >
            <p className="font-serif text-[28px] font-semibold leading-none tracking-[-0.02em] sm:text-[32px]">
              Royal Cottage
            </p>

            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/85">
              Jibhi · Himachal Pradesh
            </p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white drop-shadow-[0_2px_7px_rgba(0,0,0,0.45)] transition-all duration-300 hover:text-white/75"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Enquire */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 border-2 border-white/80 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-white hover:text-[#18271f]"
            >
              Enquire
            </a>
          </nav>

          {/* Mobile menu */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] lg:hidden"
          >
            {open ? (
              <X size={25} strokeWidth={2} />
            ) : (
              <Menu size={25} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {open && (
          <nav className="mt-6 lg:hidden">
            <div className="ml-auto max-w-sm bg-black/45 p-5 backdrop-blur-md">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/15 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
                >
                  <span>{link.label}</span>

                  <span className="text-white/60">↗</span>
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-5 flex min-h-[52px] items-center justify-center bg-white px-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#18271f]"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
