import {
  ArrowUpRight,
  Phone,
} from "lucide-react";

import {
  property,
  whatsappLink,
} from "../data/property";

function Footer() {
  return (
    <footer className="bg-[#17271e] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Main footer */}
        <div className="grid gap-14 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">

          {/* Brand */}
          <div>
            <p className="font-serif text-4xl font-normal sm:text-5xl">
              Royal Cottage
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/45">
              Jibhi · Tirthan Valley · Himachal Pradesh
            </p>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              {property.description}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#c5b18d]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-4">
              <a
                href="#stay"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                The Stay
              </a>

              <a
                href="#experience"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Experience
              </a>

              <a
                href="#gallery"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Gallery
              </a>

              <a
                href="#location"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Location
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#c5b18d]">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-4">

              {/* Phone */}
              <a
                href={`tel:${property.phone}`}
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone
                  size={14}
                  strokeWidth={1.5}
                />

                <span>
                  {property.phone}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span>
                  WhatsApp
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Instagram */}
               {property.socialLinks.instagram && (
                <a
                  href={property.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Instagram
                    size={14}
                    strokeWidth={1.5}
                  />

                  <span>
                    Instagram
                  </span>
                </a>
              )} 

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-7 text-[9px] uppercase tracking-[0.15em] text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Royal Cottage Jibhi.
            All rights reserved.
          </p>

          <p>
            Jibhi · Himachal Pradesh
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
