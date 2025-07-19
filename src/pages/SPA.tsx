import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Home, User, Settings, Mail } from "lucide-react";

const SPA = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    preferences: { theme: "light", notifications: true },
  });

  const views = {
    dashboard: {
      title: "Dashboard",
      icon: Home,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Welcome to your Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">1,234</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">567</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">$8,901</div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    profile: {
      title: "Profile",
      icon: User,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">User Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <Button>Save Changes</Button>
          </div>
        </div>
      ),
    },
    settings: {
      title: "Settings",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Application Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Theme</span>
              <select
                value={userData.preferences.theme}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    preferences: {
                      ...userData.preferences,
                      theme: e.target.value,
                    },
                  })
                }
                className="p-2 border rounded"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input
                type="checkbox"
                checked={userData.preferences.notifications}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    preferences: {
                      ...userData.preferences,
                      notifications: e.target.checked,
                    },
                  })
                }
                className="rounded"
              />
            </div>
          </div>
        </div>
      ),
    },
    messages: {
      title: "Messages",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Messages</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">Message {i}</div>
                      <div className="text-sm text-gray-600">
                        This is a sample message content...
                      </div>
                    </div>
                    <Badge variant="secondary">New</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold">SPA Navigation</h1>
            <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">
              Single Page Application
            </Badge>
          </div>
          <p className="text-gray-600">
            Navigate between different views without page reloads. All content
            is managed client-side.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {Object.entries(views).map(([key, view]) => {
                  const Icon = view.icon;
                  return (
                    <Button
                      key={key}
                      variant={activeView === key ? "default" : "ghost"}
                      className="w-full justify-start text-sm lg:text-base"
                      onClick={() => setActiveView(key)}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">{view.title}</span>
                      <span className="sm:hidden">{view.title.split(' ')[0]}</span>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>
                {views[activeView as keyof typeof views].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {views[activeView as keyof typeof views].content}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-gray-50">
          <CardHeader>
            <CardTitle>SPA Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="code">Code Example</TabsTrigger>
              </TabsList>
              <TabsContent value="benefits" className="space-y-2">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>No page reloads - faster navigation</li>
                  <li>Shared state across views</li>
                  <li>Better user experience</li>
                  <li>Reduced server requests</li>
                  <li>Smooth transitions and animations</li>
                </ul>
              </TabsContent>
              <TabsContent value="code">
                <pre className="bg-gray-800 text-green-400 p-3 sm:p-4 rounded-lg text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-all">
                  {`const [activeView, setActiveView] = useState("dashboard");

// Navigation without page reload
<Button onClick={() => setActiveView("profile")}>
  Go to Profile
</Button>

// Conditional rendering based on state
{activeView === "dashboard" && <Dashboard />}
{activeView === "profile" && <Profile />}`}
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SPA;
