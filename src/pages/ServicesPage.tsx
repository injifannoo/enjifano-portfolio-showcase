
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
