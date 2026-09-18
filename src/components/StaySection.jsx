import { ArrowUpRight } from "lucide-react";
import { property } from "../data/property";

function StaySection() {
  const whatsappUrl = `https://wa.me/${
    property.whatsapp
  }?text=${encodeURIComponent(
    "Hi, I’m interested in staying at Royal Cottage Jibhi. Please share the available rooms, rates and amenities."
  )}`;

  return (
    <section
      id="stay"
      className="bg-[#f5f2eb] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-[#ddd8cc]">
              <img
                src="/images/cottage.jpeg"
                alt="Royal Cottage Jibhi"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 hidden h-28 w-28 rounded-full border border-[#806b4d]/40 bg-[#f5f2eb] sm:flex sm:items-center sm:justify-center lg:-right-7">
              <span className="text-center font-serif text-sm italic leading-5 text-[#806b4d]">
                Stay
                <br />
                slow
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#806b4d]">
              The Stay
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.95] text-[#1f3529] sm:text-6xl lg:text-7xl">
              Your quiet corner
              <span className="block italic">in the Himalayas.</span>
            </h2>

            <div className="mt-8 h-px w-16 bg-[#806b4d]/50" />

            <p className="mt-8 max-w-xl text-sm leading-8 text-[#626961] sm:text-base">
              Royal Cottage Jibhi is a peaceful retreat in the heart of
              Tirthan Valley, surrounded by mountain landscapes, forest air
              and the unhurried rhythm of village life.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[#626961] sm:text-base">
              Wake up to the mountains, spend your day exploring Jibhi and
              return to a warm, comfortable space designed for slowing down.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-y-8 border-y border-[#1f3529]/10 py-7 sm:grid-cols-4">
              <div>
                <p className="font-serif text-2xl text-[#1f3529]">01</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#737970]">
                  Peaceful
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#1f3529]">02</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#737970]">
                  Private
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#1f3529]">03</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#737970]">
                  Scenic
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#1f3529]">04</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#737970]">
                  Local
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f3529]"
            >
              Enquire About Your Stay

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1f3529]/30 transition-all duration-300 group-hover:bg-[#1f3529] group-hover:text-white">
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StaySection;