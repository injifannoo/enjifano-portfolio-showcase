
import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
