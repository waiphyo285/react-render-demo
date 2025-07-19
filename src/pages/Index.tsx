import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Zap, Database, FileText, ChefHat, Utensils, Coffee } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            React Rendering Patterns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different rendering strategies in React: CSR, SPA, Static
            Generation, and Data Fetching patterns
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
                  <CardTitle className="text-lg">
                    Client-Side Rendering
                  </CardTitle>
                  <CardDescription>
                    Dynamic content rendered in browser
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Interactive components that render and update entirely on the
                client side.
              </p>
              <Link to="/csr">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View CSR Example
                </Button>
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
                  <CardDescription>
                    Seamless navigation without page reloads
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Multiple routes and views managed entirely on the client side.
              </p>
              <Link to="/spa">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View SPA Example
                </Button>
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
                Static content that's built at compile time for optimal
                performance.
              </p>
              <Link to="/static">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  View Static Example
                </Button>
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
                  <CardDescription>
                    Various data loading patterns
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Different approaches to fetching and managing data in React.
              </p>
              <Link to="/data-fetching">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  View Data Examples
                </Button>
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
                  <CardDescription>
                    Combining multiple approaches
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Real-world examples combining different rendering strategies.
              </p>
              <Link to="/hybrid">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  View Hybrid Example
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Cooking Analogies Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ChefHat className="h-8 w-8 text-amber-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                Rendering vs. Cooking
              </h2>
              <Utensils className="h-8 w-8 text-amber-600" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding web rendering patterns through familiar cooking experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Coffee className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-blue-600">
                      CSR → Hotpot
                    </CardTitle>
                    <CardDescription>
                      You do most of the work
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Raw ingredients arrive, you cook them yourself. Highly personalized 
                  and interactive, but slower initial setup.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ChefHat className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-green-600">
                      SSR → Made to Order 
                    </CardTitle>
                    <CardDescription>
                      Kitchen does the work
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Chef prepares your meal fresh when you order. Personalized 
                  results but takes time as each meal is prepared individually.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Utensils className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-purple-600">
                      SSG → Buffet
                    </CardTitle>
                    <CardDescription>
                      Pre-cooked meals
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Everything prepared beforehand. Same for everyone, but instant 
                  serving and efficient for crowds.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Coffee className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-orange-600">
                      ISG → Fresh Buffet
                    </CardTitle>
                    <CardDescription>
                      Smart refreshing
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Mostly pre-cooked, but popular dishes get topped up more 
                  frequently. Best of both worlds.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <ChefHat className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-red-600">
                      Streaming → BBQ Chef
                    </CardTitle>
                    <CardDescription>
                      Live cooking show
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Chef starts cooking and serves pieces as they're ready. 
                  Progressive delivery - no waiting for completion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Utensils className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-amber-600">
                      Hybrid → Food Court
                    </CardTitle>
                    <CardDescription>
                      Multiple cooking styles
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Different vendors use different methods. Mix and match 
                  based on requirements - the real-world solution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
