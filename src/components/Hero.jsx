import { ArrowDown, ArrowUpRight, Volume2, VolumeX } from "lucide-react";
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
      className="relative flex min-h-screen items-end overflow-hidden bg-[#18271f]"
    >
      {/* Background poster */}
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
        poster="/images/hero-poster.jpeg"
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/25" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-white/75 sm:text-xs">
            Jibhi · Tirthan Valley · Himachal Pradesh
          </p>

          <h1 className="font-serif text-6xl font-medium leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Royal Cottage
          </h1>

          <div className="mt-3 flex items-center gap-4 sm:mt-5">
           

            <p className="font-serif text-2xl italic text-white/90 sm:text-3xl lg:text-4xl">
              Jibhi
            </p>
          </div>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            {property.tagline}. Discover quiet mornings, mountain air and the
            natural beauty of Jibhi, Tirthan Valley.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#18271f] transition-all duration-300 hover:bg-[#f0ede5]"
            >
              Reserve Your Stay

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center border border-white/40 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Explore The Cottage
            </a>
          </div>
        </div>
      </div>

      {/* Video controls */}
      <button
        type="button"
        onClick={() => setIsMuted((value) => !value)}
        className="absolute bottom-8 left-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#18271f] sm:left-8 lg:left-10"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX size={16} strokeWidth={1.5} />
        ) : (
          <Volume2 size={16} strokeWidth={1.5} />
        )}
      </button>

      {/* Scroll indicator */}
      <a
        href="#intro"
        className="absolute bottom-7 right-5 z-10 hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/70 sm:flex lg:right-10"
      >
        <span>Scroll to explore</span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
          <ArrowDown size={14} strokeWidth={1.5} />
        </span>
      </a>
    </section>
  );
}

export default Hero;