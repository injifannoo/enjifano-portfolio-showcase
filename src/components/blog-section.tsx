
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Flutter Development",
      excerpt: "Learn the fundamentals of Flutter and how to build your first cross-platform mobile application.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "May 15, 2023",
      readTime: "8 min read",
      categories: ["Flutter", "Mobile Development"],
      url: "#",
    },
    {
      id: 2,
      title: "Advanced React Hooks for State Management",
      excerpt: "Explore advanced techniques for managing state in React applications using hooks without external libraries.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "June 22, 2023",
      readTime: "12 min read",
      categories: ["React", "Web Development"],
      url: "#",
    },
    {
      id: 3,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "A comprehensive guide to creating robust and scalable APIs using Node.js and Express framework.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "July 10, 2023",
      readTime: "10 min read",
      categories: ["Node.js", "Backend"],
      url: "#",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Blog</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I share my knowledge and experiences through articles about software development, design patterns, and tech trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="hover:text-primary transition-colors">
                  <a href={post.url}>{post.title}</a>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="group" variant="outline">
            <span>Read More Articles</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
