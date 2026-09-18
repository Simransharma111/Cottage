import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { property } from "../data/property";

function LocationSection() {
  const whatsappUrl = `https://wa.me/${
    property.whatsapp
  }?text=${encodeURIComponent(
    "Hi, I would like to enquire about staying at Royal Cottage Jibhi."
  )}`;

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    property.address
  )}`;

  return (
    <section
      id="location"
      className="bg-[#e9e4d8] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#806b4d]">
              Find Us
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.95] text-[#1f3529] sm:text-6xl lg:text-7xl">
              Come a little
              <span className="block italic">closer to nature.</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-8 text-[#626961] sm:text-base">
              Set in Jibhi, Tirthan Valley, Royal Cottage is a peaceful base
              from which to discover the forests, villages and mountains of
              Himachal Pradesh.
            </p>

            {/* Address */}
            <div className="mt-12 flex gap-5 border-t border-[#1f3529]/15 pt-7">
              <MapPin
                size={19}
                strokeWidth={1.4}
                className="mt-1 shrink-0 text-[#806b4d]"
              />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f3529]">
                  Location
                </p>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[#626961]">
                  {property.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-8 flex gap-5">
              <Phone
                size={19}
                strokeWidth={1.4}
                className="mt-1 shrink-0 text-[#806b4d]"
              />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f3529]">
                  Enquiries
                </p>

                <a
                  href={`tel:${property.phone}`}
                  className="mt-3 block text-sm text-[#626961] transition hover:text-[#1f3529]"
                >
                  {property.phone}
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-[#1f3529] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#294633]"
              >
                Enquire on WhatsApp

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 border border-[#1f3529]/30 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f3529] transition hover:bg-[#1f3529] hover:text-white"
              >
                Open Maps

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-end">
            <div className="w-full">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d2c4] sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src="/images/tirthan-valley.jpg"
                  alt="Tirthan Valley near Royal Cottage Jibhi"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17271e]/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/80">
                    Jibhi · Tirthan Valley
                  </p>

                  <p className="mt-2 font-serif text-2xl italic text-white">
                    Himachal Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;