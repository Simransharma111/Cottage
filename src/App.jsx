import Header from "./components/Header";
import Hero from "./components/Hero";
import StaySection from "./components/StaySection";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f2eb]">
      <Header />

      <main>
        <Hero />

        <section
          id="intro"
          className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#806b4d]">
              Welcome to Royal Cottage
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#1f3529] sm:text-5xl lg:text-6xl">
              Where the mountains
              <span className="block italic">slow you down.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#626961] sm:text-base">
              A peaceful stay in Jibhi, Tirthan Valley, created for quiet
              mornings, mountain air and time away from the ordinary.
            </p>
          </div>
        </section>

        <StaySection />

        <ExperienceSection />
      </main>
    </div>
  );
}

export default App;