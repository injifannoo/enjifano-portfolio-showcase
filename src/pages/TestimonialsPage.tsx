
import { Navbar } from "@/components/navbar";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
