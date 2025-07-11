
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Layers, TrendingUp, Users, ShoppingCart } from "lucide-react";

// Static data (simulating SSG)
const staticContent = {
  hero: {
    title: "E-Commerce Dashboard",
    subtitle: "Real-time analytics with static and dynamic content",
    features: ["Real-time Updates", "Static Content", "Client-side Interactions", "Data Fetching"]
  },
  navigation: [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "products", label: "Products", icon: ShoppingCart },
    { id: "customers", label: "Customers", icon: Users }
  ]
};

// Mock API for dynamic data
const fetchDashboardStats = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    totalSales: Math.floor(Math.random() * 100000) + 50000,
    totalOrders: Math.floor(Math.random() * 1000) + 500,
    activeUsers: Math.floor(Math.random() * 500) + 100,
    conversionRate: (Math.random() * 5 + 2).toFixed(2)
  };
};

const fetchRecentActivity = async () => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return [
    { id: 1, action: "New order placed", user: "John Doe", time: "2 minutes ago" },
    { id: 2, action: "Product reviewed", user: "Jane Smith", time: "5 minutes ago" },
    { id: 3, action: "User registered", user: "Bob Johnson", time: "10 minutes ago" },
    { id: 4, action: "Payment processed", user: "Alice Brown", time: "15 minutes ago" }
  ];
};

const Hybrid = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [clientTime, setClientTime] = useState(new Date());
  const [interactionCount, setInteractionCount] = useState(0);

  // Client-side real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setClientTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Dynamic data fetching with React Query
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: fetchDashboardStats,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const { data: activity, isLoading: activityLoading } = useQuery({
    queryKey: ['recent-activity'],
    queryFn: fetchRecentActivity,
    refetchInterval: 10000, // Refetch every 10 seconds
  });

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Static Hero Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-2">{staticContent.hero.title}</h2>
          <p className="mb-4">{staticContent.hero.subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {staticContent.hero.features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dynamic Stats (Data Fetching) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">${stats?.totalSales.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Sales</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{stats?.totalOrders}</div>
                <div className="text-sm text-gray-600">Total Orders</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{stats?.activeUsers}</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">{stats?.conversionRate}%</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Client-side Interactive Component */}
      <Card>
        <CardHeader>
          <CardTitle>Client-Side Interactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-lg font-semibold">Current Time: {clientTime.toLocaleTimeString()}</div>
              <div className="text-sm text-gray-600">Updates in real-time</div>
            </div>
            <div>
              <div className="text-lg font-semibold">Interactions: {interactionCount}</div>
              <Button 
                onClick={() => setInteractionCount(count => count + 1)}
                size="sm"
              >
                Interact
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dynamic Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity (Live Updates)</CardTitle>
        </CardHeader>
        <CardContent>
          {activityLoading ? (
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {activity?.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium">{item.action}</div>
                    <div className="text-sm text-gray-600">{item.user} • {item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              Hybrid Patterns
            </Badge>
            <h1 className="text-3xl font-bold">Hybrid Rendering Example</h1>
          </div>
          <p className="text-gray-600">
            A real-world example combining static content, client-side rendering, data fetching, and SPA navigation.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Static Navigation (SSG equivalent) */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Navigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {staticContent.navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab(item.id)}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Dynamic Content Area */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="overview">
                {renderOverview()}
              </TabsContent>
              
              <TabsContent value="products">
                <Card>
                  <CardHeader>
                    <CardTitle>Products Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600">Product management interface would go here</p>
                      <p className="text-sm text-gray-500 mt-2">This demonstrates SPA navigation without page reloads</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="customers">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Users className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600">Customer management interface would go here</p>
                      <p className="text-sm text-gray-500 mt-2">Another SPA route with its own content</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Pattern Explanation */}
        <Card className="mt-6 bg-gray-50">
          <CardHeader>
            <CardTitle>Hybrid Pattern Explanation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-blue-600">Static Content (SSG-like)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Hero section with pre-defined content</li>
                  <li>Navigation structure</li>
                  <li>Static text and layout</li>
                  <li>Built at compile time</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Dynamic Content (CSR)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Real-time stats with periodic updates</li>
                  <li>Live activity feed</li>
                  <li>Interactive counters and timers</li>
                  <li>User interaction tracking</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-semibold mb-2">Best Practices Demonstrated:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Performance:</strong> Static content loads instantly</li>
                <li><strong>Interactivity:</strong> Dynamic content updates without page reloads</li>
                <li><strong>SEO:</strong> Static content is crawlable by search engines</li>
                <li><strong>UX:</strong> Smooth navigation with loading states</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hybrid;
