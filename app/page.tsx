import Navbar from "@/components/Navbar";
import HeroLogo from "@/components/HeroLogo";
import ScrollSmootherWrapper from "@/components/ScrollSmoother";
import AgeGate from "@/components/AgeGate";

export default function Home() {
  return (
    <AgeGate>
      <ScrollSmootherWrapper>
        <div className="min-h-screen bg-white dark:bg-black transition-colors">
          <Navbar />

          <main className="min-h-[calc(100vh-5rem)]">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <HeroLogo />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 font-[var(--font-montserrat)] transition-colors">
                  Welcome to Grow4U
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-[var(--font-montserrat)] transition-colors">
                  Cultivating excellence in sustainable farming
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/store"
                    className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-[var(--font-montserrat)] font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Visit Store
                  </a>
                  <a
                    href="/about"
                    className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-[var(--font-montserrat)] font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </ScrollSmootherWrapper>
    </AgeGate>
  );
}
