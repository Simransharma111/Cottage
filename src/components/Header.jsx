import { Menu, X } from "lucide-react";
import { useState } from "react";
import { property } from "../data/property";

const links = [
  { label: "Stay", href: "#stay" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

function Header() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${
    property.whatsapp
  }?text=${encodeURIComponent(
    "Hi, I would like to enquire about staying at Royal Cottage Jibhi."
  )}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-4 mt-4 border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-md sm:mx-6 sm:px-6 lg:mx-8">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="text-white"
            onClick={() => setOpen(false)}
          >
            <p className="font-serif text-xl leading-none">
              Royal Cottage
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/65">
              Jibhi · Himachal Pradesh
            </p>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-white/40 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#1f3529]"
            >
              Enquire
            </a>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-white/15 pt-5 pb-3 lg:hidden">
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 bg-white px-5 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f3529]"
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