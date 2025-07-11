
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Zap, Database, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            React Rendering Patterns Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different rendering strategies in React: CSR, SPA, Static Generation, and Data Fetching patterns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Client-Side Rendering</CardTitle>
                  <CardDescription>Dynamic content rendered in browser</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Interactive components that render and update entirely on the client side.
              </p>
              <Link to="/csr">
                <Button className="w-full">View CSR Example</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Single Page App</CardTitle>
                  <CardDescription>Seamless navigation without page reloads</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Multiple routes and views managed entirely on the client side.
              </p>
              <Link to="/spa">
                <Button className="w-full bg-green-600 hover:bg-green-700">View SPA Example</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Static Generation</CardTitle>
                  <CardDescription>Pre-built static content</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Static content that's built at compile time for optimal performance.
              </p>
              <Link to="/static">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">View Static Example</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Database className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Data Fetching</CardTitle>
                  <CardDescription>Various data loading patterns</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Different approaches to fetching and managing data in React.
              </p>
              <Link to="/data-fetching">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">View Data Examples</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Code className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Hybrid Patterns</CardTitle>
                  <CardDescription>Combining multiple approaches</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Real-world examples combining different rendering strategies.
              </p>
              <Link to="/hybrid">
                <Button className="w-full bg-red-600 hover:bg-red-700">View Hybrid Example</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Each example includes detailed explanations and code samples
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
