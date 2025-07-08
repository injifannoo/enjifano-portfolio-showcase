
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Naol Kecha",
      position: "full stack developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      text: "Working with Enjifano was a game-changer for our project. His Flutter expertise and attention to detail resulted in an app that exceeded our expectations. Highly recommended!",
    },
    {
      id: 2,
      name: "Mosisa Rundasa",
      position: "Startup Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      text: "Enjifano delivered our web platform ahead of schedule and with all the features we needed. His communication was excellent throughout the project, making the development process smooth and stress-free.",
    },
    {
      id: 3,
      name: "Guluma Merga",
      position: "Digital Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      text: "The e-commerce solution Enjifano created for us has significantly increased our online sales. His technical skills combined with business understanding made him an invaluable partner.",
    },
      {
      id: 3,
      name: "Gizachew Habtemariam",
      position: "Co-Founder of Raba Technologies",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      text: "Enjifano is one of the exceptional developer and leader I have seen ever. His technical and leadership skills have been instrumental in the success of our projects at Raba Technologies. He consistently delivers high-quality work and inspires those around him.  I highly recommend him to any team looking for a skilled and dedicated developer.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-lg shadow-lg">
            <div className="absolute top-6 left-6 text-primary opacity-20">
              <Quote size={64} />
            </div>

            <div className="relative z-10">
              <p className="text-lg italic mb-6 text-gray-700 dark:text-gray-300">
                {testimonials[activeIndex].text}
              </p>

              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                  <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                  <AvatarFallback>{testimonials[activeIndex].name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2 bg-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
