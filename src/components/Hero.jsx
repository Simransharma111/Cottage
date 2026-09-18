import {
  ArrowDown,
  ArrowUpRight,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState } from "react";
import { property } from "../data/property";

function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  const whatsappUrl = `https://wa.me/${
    property.whatsapp
  }?text=${encodeURIComponent(
    "Hi, I’m interested in staying at Royal Cottage Jibhi. Could you please share the availability and rates?"
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#18271f] text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-poster.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/5" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,transparent_0%,transparent_35%,rgba(0,0,0,0.28)_100%)]" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end">
        <div className="mx-auto w-full max-w-[1500px] px-5 pb-28 pt-36 sm:px-8 sm:pb-32 lg:px-12 lg:pb-36">
          <div className="max-w-3xl">
            {/* Location */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/60" />

              <p className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/75 sm:text-[10px]">
                Jibhi · Tirthan Valley · Himachal Pradesh
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[4rem] font-normal leading-[0.88] tracking-[-0.035em] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7rem]">
              <span className="block">Royal</span>

              <span className="ml-[8vw] block italic text-white/90 sm:ml-16">
                Cottage
              </span>

              <span className="mt-2 block text-[1.5rem] font-normal italic leading-none text-[#d8c6a4] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem]">
                Jibhi
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-md text-[13px] leading-7 text-white/72 sm:mt-9 sm:text-sm sm:leading-8">
              {property.tagline}. A quiet Himalayan retreat surrounded by
              forest, mountain air and the natural beauty of Tirthan Valley.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 bg-white px-7 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#18271f] transition-all duration-500 hover:bg-[#e9e4d8]"
              >
                <span>Reserve Your Stay</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#gallery"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-white/35 bg-black/10 px-7 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white/70 hover:bg-white/10"
              >
                <span>Explore The Cottage</span>

                <span className="h-px w-0 bg-white transition-all duration-500 group-hover:w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-black/10 backdrop-blur-[2px]">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-5 sm:gap-8">
              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                  Location
                </p>

                <p className="mt-1 text-[10px] text-white/75 sm:text-xs">
                  Jibhi, Himachal Pradesh
                </p>
              </div>

              <span className="hidden h-7 w-px bg-white/15 sm:block" />

              <div className="hidden sm:block">
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                  Valley
                </p>

                <p className="mt-1 text-[10px] text-white/75 sm:text-xs">
                  Tirthan Valley
                </p>
              </div>
            </div>

            <a
              href="#intro"
              className="group flex items-center gap-3"
              aria-label="Scroll to explore"
            >
              <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/50 sm:block">
                Discover
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition duration-500 group-hover:border-white/60 group-hover:bg-white/10">
                <ArrowDown
                  size={13}
                  strokeWidth={1.4}
                  className="transition-transform duration-500 group-hover:translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Video control */}
      <button
        type="button"
        onClick={() => setIsMuted((value) => !value)}
        className="absolute bottom-[76px] left-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white/80 backdrop-blur-md transition duration-300 hover:border-white/60 hover:bg-white hover:text-[#18271f] sm:bottom-[78px] sm:left-8 lg:left-12"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX size={15} strokeWidth={1.4} />
        ) : (
          <Volume2 size={15} strokeWidth={1.4} />
        )}
      </button>
    </section>
  );
}

export default Hero;