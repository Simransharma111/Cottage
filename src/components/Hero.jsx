import {
  ArrowDown,
  ArrowUpRight,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState } from "react";
import { property, whatsappLink } from "../data/property";

function Hero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#18271f] text-white"
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
        poster="/images/hero-poster.jpg"
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/65" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_100%)]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-20 pt-32 text-center sm:px-8">
        {/* Location */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-white/50" />

          <p className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/75 sm:text-[10px]">
            Jibhi · Tirthan Valley · Himachal Pradesh
          </p>

          <span className="h-px w-7 bg-white/50" />
        </div>

        {/* Main heading */}
        <h1 className="font-serif font-normal leading-[0.86] tracking-[-0.025em]">
          <span className="block text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem]">
            Royal Cottage
          </span>

          <span className="mt-4 block text-[2rem] font-normal italic text-[#ddc9a4] sm:text-[2.6rem] md:text-[3rem]">
            Jibhi
          </span>
        </h1>

        {/* Divider */}
        <div className="my-7 h-px w-12 bg-white/40" />

        {/* Tagline */}
        <p className="font-serif text-2xl italic font-normal text-white/90 sm:text-3xl">
          {property.tagline}
        </p>

        {/* Description */}
        <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          {property.description}
        </p>

        {/* CTA */}
        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[52px] items-center justify-center gap-4 bg-white px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#18271f] transition-all duration-500 hover:bg-[#eeeae0]"
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
            className="inline-flex min-h-[52px] items-center justify-center border border-white/40 bg-black/10 px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white/70 hover:bg-white/10"
          >
            Explore The Cottage
          </a>
        </div>
      </div>

      {/* Video control */}
      <button
        type="button"
        onClick={() => setIsMuted((value) => !value)}
        className="absolute bottom-7 left-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white/80 backdrop-blur-md transition duration-300 hover:border-white/60 hover:bg-white hover:text-[#18271f] sm:left-8 lg:left-10"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX size={15} strokeWidth={1.4} />
        ) : (
          <Volume2 size={15} strokeWidth={1.4} />
        )}
      </button>

      {/* Scroll indicator */}
      <a
        href="#intro"
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/65 transition hover:text-white"
      >
        <span className="text-[8px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25">
          <ArrowDown size={13} strokeWidth={1.4} />
        </span>
      </a>
    </section>
  );
}

export default Hero;