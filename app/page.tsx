import AgeGate from "@/components/AgeGate";
import LayeredPanels from "@/components/LayeredPanels";
import Navbar from "@/components/Navbar";
import ScrollSmootherWrapper from "@/components/ScrollSmoother";

export default function Home() {
  return (
    <AgeGate>
      <ScrollSmootherWrapper>
        <div className="min-h-screen bg-white dark:bg-black transition-colors">
          <Navbar />

          <main>
            {/* Layered Panels Section */}
            <LayeredPanels />
          </main>
        </div>
      </ScrollSmootherWrapper>
    </AgeGate>
  );
}
