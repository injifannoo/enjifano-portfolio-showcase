
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HomeSection } from "@/components/home-section";
import { Footer } from "@/components/footer";

const HomePage = () => {
  useEffect(() => {
    document.title = "Enjifano Tamiru | Software Engineer & Flutter Developer";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
