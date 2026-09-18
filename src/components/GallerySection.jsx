const galleryImages = [
  {
    src: "/images/cottage.jpg",
    alt: "Royal Cottage Jibhi",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/jibhi-waterfall.jpg",
    alt: "Jibhi Waterfall",
    className: "",
  },
  {
    src: "/images/tirthan-valley.jpg",
    alt: "Tirthan Valley",
    className: "",
  },
  {
    src: "/images/jalori-pass.jpg",
    alt: "Jalori Pass",
    className: "md:col-span-2",
  },
  {
    src: "/images/serolsar-lake.jpg",
    alt: "Serolsar Lake",
    className: "",
  },
];

function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-[#f5f2eb] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#806b4d]">
              Gallery
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-[#1f3529] sm:text-6xl">
              A glimpse
              <span className="block italic text-[#806b4d]">
                of the valley.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-8 text-[#626961] md:justify-self-end">
            From the warmth of the cottage to the landscapes surrounding
            Jibhi, every corner invites you to slow down and stay awhile.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-3 sm:auto-rows-[260px] sm:grid-cols-2 md:auto-rows-[240px] md:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`group overflow-hidden ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;