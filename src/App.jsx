import Header from "./components/Header";
import Hero from "./components/Hero";
import StaySection from "./components/StaySection";
import ExperienceSection from "./components/ExperienceSection";
import GallerySection from "./components/GallerySection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#f5f2eb]">
      <Header />

      <main>
        <Hero />

        <section
          id="intro"
          className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
        >
          <div className="max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#806b4d]">
              Welcome to Royal Cottage
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.95] text-[#1f3529] sm:text-6xl lg:text-7xl">
              Where the mountains
              <span className="block italic text-[#806b4d]">
                slow you down.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#626961] sm:text-base">
              A peaceful stay in Jibhi, Tirthan Valley, created for quiet
              mornings, mountain air and time away from the ordinary.
            </p>
          </div>
        </section>

        <StaySection />

        <ExperienceSection />

        <GallerySection />

        <LocationSection />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default App;