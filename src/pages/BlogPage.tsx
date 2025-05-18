
import { Navbar } from "@/components/navbar";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
