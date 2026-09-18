import { ArrowUpRight, Instagram, Phone } from "lucide-react";
import { property } from "../data/property";

function Footer() {
  const whatsappUrl = `https://wa.me/${
    property.whatsapp
  }?text=${encodeURIComponent(
    "Hi, I would like to enquire about staying at Royal Cottage Jibhi."
  )}`;

  return (
    <footer className="bg-[#17271e] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div>
            <p className="font-serif text-4xl sm:text-5xl">
              Royal Cottage
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/45">
              Jibhi · Tirthan Valley · Himachal Pradesh
            </p>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              A quiet Himalayan stay surrounded by the forests and landscapes
              of Tirthan Valley.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c5b18d]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#stay"
                className="text-sm text-white/60 transition hover:text-white"
              >
                The Stay
              </a>

              <a
                href="#experience"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Experience
              </a>

              <a
                href="#gallery"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Gallery
              </a>

              <a
                href="#location"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Location
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#c5b18d]">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href={`tel:${property.phone}`}
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Phone size={14} strokeWidth={1.5} />

                {property.phone}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                WhatsApp

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Instagram size={14} strokeWidth={1.5} />

                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-7 text-[9px] uppercase tracking-[0.15em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Royal Cottage Jibhi. All rights
            reserved.
          </p>

          <p>
            Jibhi · Himachal Pradesh
          </p>
        </div>

        {/* Image credits */}
        <div className="mt-8 border-t border-white/5 pt-6">
          <p className="text-[8px] leading-5 text-white/25">
            Destination photography: Jibhi Waterfall — Rohan Pinto /
            Wikimedia Commons / CC BY-SA 4.0 · Tirthan Valley —
            Debashritaiitmandi / Wikimedia Commons / CC BY-SA 4.0 · Jalori
            Pass — Manish57335 / Wikimedia Commons / CC BY-SA 4.0 · Serolsar
            Lake — Sukhjiwan Singh / Wikimedia Commons / CC BY-SA 4.0
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;