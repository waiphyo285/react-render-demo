
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Globe, Zap } from "lucide-react";

// Simulated static data that would be generated at build time
const staticBlogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the fundamentals of React development",
    author: "Jane Smith",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tutorial"
  },
  {
    id: 2,
    title: "Advanced State Management",
    excerpt: "Deep dive into state management patterns",
    author: "John Doe",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Advanced"
  },
  {
    id: 3,
    title: "Performance Optimization Tips",
    excerpt: "How to make your React apps blazingly fast",
    author: "Alice Johnson",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Performance"
  }
];

const staticCompanyInfo = {
  name: "TechCorp Solutions",
  founded: "2020",
  employees: "50-100",
  location: "San Francisco, CA",
  description: "We build amazing web applications using modern technologies.",
  services: ["Web Development", "Mobile Apps", "Cloud Solutions", "Consulting"]
};

const Static = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Static Generation
            </Badge>
            <h1 className="text-3xl font-bold">Static Content Examples</h1>
          </div>
          <p className="text-gray-600">
            This content would typically be generated at build time for optimal performance and SEO.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{staticCompanyInfo.name}</h3>
                  <p className="text-gray-600 mb-4">{staticCompanyInfo.description}</p>
                  <div className="space-y-2 text-sm">
                    <div><strong>Founded:</strong> {staticCompanyInfo.founded}</div>
                    <div><strong>Employees:</strong> {staticCompanyInfo.employees}</div>
                    <div><strong>Location:</strong> {staticCompanyInfo.location}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Our Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {staticCompanyInfo.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="justify-center">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Static Blog Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {staticBlogPosts.map((post) => (
                  <Card key={post.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-3">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-100 to-pink-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Static Generation Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Performance Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Lightning-fast page loads</li>
                    <li>Reduced server load</li>
                    <li>Better caching capabilities</li>
                    <li>Improved Core Web Vitals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SEO & Reliability</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Better search engine indexing</li>
                    <li>Pre-rendered HTML content</li>
                    <li>Works without JavaScript</li>
                    <li>High availability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Implementation Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">In a Vite/React Context:</h4>
                  <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`// Static data defined at build time
const staticData = {
  posts: [...],
  company: {...}
};

// Component renders with pre-defined data
const StaticComponent = () => {
  return (
    <div>
      {staticData.posts.map(post => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  );
};`}
                  </pre>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Note:</strong> In Next.js, this would be achieved using getStaticProps() or the app directory with static data.
                  In Vite/React, we simulate this by having data defined at build time rather than fetched at runtime.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Static;
