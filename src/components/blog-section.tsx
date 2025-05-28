
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
import { Link } from "react-router-dom";

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Flutter Development",
    excerpt: "Learn the fundamentals of Flutter and how to build your first cross-platform mobile application.",
    content: `
      <h2>Getting Started with Flutter Development</h2>
      
      <p>Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. In this comprehensive guide, I'll walk you through the fundamentals of Flutter development and show you how to build your first cross-platform mobile application.</p>
      
      <h3>Setting Up Your Development Environment</h3>
      
      <p>Before we start coding, you need to set up your development environment. This involves installing the Flutter SDK, setting up an IDE (I recommend VS Code or Android Studio), and configuring an emulator or connecting a physical device for testing.</p>
      
      <h3>Understanding the Widget System</h3>
      
      <p>Everything in Flutter is a widget! Widgets are the building blocks of Flutter applications, and they define the UI by describing what their view should look like given their current configuration and state. Flutter includes a rich set of pre-built widgets like Text, Button, Container, Row, Column, and many more.</p>
      
      <h3>Building Your First Flutter App</h3>
      
      <p>Let's create a simple counter app to understand the basic structure of a Flutter application. We'll use StatefulWidget to manage the state of our counter.</p>
      
      <h3>Deploying Your App</h3>
      
      <p>Once your app is ready, you can deploy it to both the App Store and Google Play Store. Flutter makes it easy to create builds for both platforms from a single codebase.</p>
      
      <h3>Conclusion</h3>
      
      <p>Flutter is a powerful framework for building cross-platform applications. With its hot reload feature, rich widget library, and growing community, it's an excellent choice for both beginners and experienced developers. In future articles, we'll dive deeper into advanced Flutter concepts and patterns.</p>
    `,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "May 15, 2023",
    readTime: "8 min read",
    categories: ["Flutter", "Mobile Development"],
    url: "/blog/1",
  },
  {
    id: 2,
    title: "Advanced React Hooks for State Management",
    excerpt: "Explore advanced techniques for managing state in React applications using hooks without external libraries.",
    content: `
      <h2>Advanced React Hooks for State Management</h2>
      
      <p>React Hooks have revolutionized how we manage state and side effects in React applications. In this article, I'll explore advanced techniques for managing complex state using only built-in React hooks, without relying on external state management libraries.</p>
      
      <h3>Beyond useState: Complex State Patterns</h3>
      
      <p>While useState is great for simple state values, complex state often requires more sophisticated solutions. We'll look at how to effectively use useReducer for complex state logic, similar to Redux but built right into React.</p>
      
      <h3>Custom Hooks for Reusable State Logic</h3>
      
      <p>One of the most powerful features of hooks is the ability to create custom hooks that encapsulate and reuse stateful logic across components. We'll create several useful custom hooks for common patterns.</p>
      
      <h3>Context + Hooks: A State Management Solution</h3>
      
      <p>By combining React Context with hooks, we can create a powerful state management solution that rivals external libraries for many use cases. We'll build a complete example showing how to implement this pattern effectively.</p>
      
      <h3>Performance Optimization with useMemo and useCallback</h3>
      
      <p>Managing state efficiently also means optimizing performance. We'll dive into how useMemo and useCallback can be used to prevent unnecessary re-renders and optimize your application.</p>
      
      <h3>Conclusion</h3>
      
      <p>React's built-in hooks provide a powerful toolkit for state management. By mastering these patterns, you can build complex, performant applications without reaching for external state management solutions in many cases.</p>
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "June 22, 2023",
    readTime: "12 min read",
    categories: ["React", "Web Development"],
    url: "/blog/2",
  },
  {
    id: 3,
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "A comprehensive guide to creating robust and scalable APIs using Node.js and Express framework.",
    content: `
      <h2>Building RESTful APIs with Node.js and Express</h2>
      
      <p>RESTful APIs are the backbone of modern web applications. In this comprehensive guide, I'll show you how to build robust and scalable APIs using Node.js and the Express framework.</p>
      
      <h3>Setting Up Your Express Project</h3>
      
      <p>We'll start by setting up a new Express project with a clean architecture that promotes maintainability and scalability. This includes organizing routes, controllers, models, and middleware in a logical structure.</p>
      
      <h3>Designing RESTful Endpoints</h3>
      
      <p>A good API design is crucial for developer experience. We'll cover RESTful principles, resource naming conventions, HTTP methods, status codes, and how to design endpoints that are intuitive and easy to use.</p>
      
      <h3>Authentication and Authorization</h3>
      
      <p>Security is paramount for API development. We'll implement JSON Web Tokens (JWT) for authentication and role-based access control for authorization, ensuring that your API is secure and only accessible to authorized users.</p>
      
      <h3>Error Handling and Validation</h3>
      
      <p>Robust error handling and input validation improve both the security and usability of your API. We'll implement a centralized error handling system and use libraries like Joi or express-validator for request validation.</p>
      
      <h3>Testing and Documentation</h3>
      
      <p>A well-tested and documented API is easier to maintain and use. We'll cover unit and integration testing with Jest and Supertest, and use Swagger/OpenAPI for interactive API documentation.</p>
      
      <h3>Conclusion</h3>
      
      <p>Building RESTful APIs with Node.js and Express provides a flexible and efficient way to create backends for web and mobile applications. By following the practices outlined in this guide, you'll be able to build APIs that are robust, secure, and maintainable.</p>
    `,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    date: "July 10, 2023",
    readTime: "10 min read",
    categories: ["Node.js", "Backend"],
    url: "/blog/3",
  },
];

export function BlogSection() {
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
            <Card key={post.id} className="overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20">
                      {category}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="hover:text-primary transition-colors line-clamp-2 text-lg font-semibold">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1.5 text-primary" />
                    <span className="font-medium">{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5 text-primary" />
                    <span className="font-medium">{post.readTime}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
              <span>Read More Articles</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
