import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Jibhi Waterfall",
    description:
      "A beautiful natural escape surrounded by the forest and the peaceful atmosphere of Jibhi.",
    image: "/images/jibhi-waterfall.jpg",
  },
  {
    number: "02",
    title: "Forest Walks",
    description:
      "Slow down and explore the quiet trails, cedar forests and mountain surroundings of Tirthan Valley.",
    image: "/images/forest-walk.jpg",
  },
  {
    number: "03",
    title: "Jalori Pass",
    description:
      "Discover dramatic Himalayan views and mountain landscapes around the famous Jalori Pass.",
    image: "/images/jalori-pass.jpg",
  },
  {
    number: "04",
    title: "Serolsar Lake",
    description:
      "Take a journey into the mountains and experience the peaceful alpine surroundings of Serolsar Lake.",
    image: "/images/serolsar-lake.jpg",
  },
];

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#1f3529] px-5 py-24 text-[#f5f2eb] sm:px-8 sm:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#c5b18d]">
              Around Jibhi
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              More than a stay.
              <span className="block italic text-white/70">
                An experience.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-white/60 lg:justify-self-end">
            Step outside the cottage and discover the forests, waterfalls,
            mountain trails and quiet places that make Jibhi and Tirthan
            Valley special.
          </p>
        </div>

        {/* Experiences */}
        <div className="mt-16 border-t border-white/15">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group grid border-b border-white/15 py-8 md:grid-cols-[70px_1fr_280px] md:items-center md:gap-8 lg:grid-cols-[90px_1fr_360px] lg:gap-12"
            >
              {/* Number */}
              <span className="font-serif text-xl text-[#c5b18d]">
                {experience.number}
              </span>

              {/* Text */}
              <div>
                <h3 className="font-serif text-3xl text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                  {experience.title}
                </h3>

                <p className="mt-3 max-w-xl text-xs leading-6 text-white/55 sm:text-sm">
                  {experience.description}
                </p>
              </div>

              {/* Image */}
              <div className="mt-6 aspect-[4/3] overflow-hidden md:mt-0">
                <img
                  src={experience.image}
                  alt={experience.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-12 flex justify-end">
          <a
            href="#location"
            className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
          >
            Explore Jibhi

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:text-[#1f3529]">
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;