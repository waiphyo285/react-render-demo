import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Database, RefreshCw, Plus, Trash2 } from "lucide-react";

// Mock API functions
const fetchUsers = async (): Promise<
  Array<{ id: number; name: string; email: string }>
> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];
};

const addUser = async (user: { name: string; email: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { id: Date.now(), ...user };
};

const deleteUser = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return id;
};

const DataFetching = () => {
  const [manualData, setManualData] = useState<any[]>([]);
  const [isManualLoading, setIsManualLoading] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const queryClient = useQueryClient();

  // React Query example
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Mutation for adding users
  const addUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setNewUser({ name: "", email: "" });
    },
  });

  // Mutation for deleting users
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  // Manual fetch example
  const fetchManualData = async () => {
    setIsManualLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      setManualData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsManualLoading(false);
    }
  };

  // useEffect data fetching
  const [effectData, setEffectData] = useState<any[]>([]);
  const [effectLoading, setEffectLoading] = useState(true);

  useEffect(() => {
    const fetchEffectData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments?_limit=3"
        );
        const data = await response.json();
        setEffectData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setEffectLoading(false);
      }
    };

    fetchEffectData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold">Data Fetching Examples</h1>
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-800"
            >
              Data Fetching Patterns
            </Badge>
          </div>
          <p className="text-gray-600">
            Different approaches to fetching and managing data in React
            applications.
          </p>
        </div>

        <Tabs defaultValue="react-query" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="react-query">React Query</TabsTrigger>
            <TabsTrigger value="manual">Manual Fetch</TabsTrigger>
            <TabsTrigger value="useeffect">useEffect</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="react-query" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  React Query / TanStack Query
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2 mb-4">
                    <Button onClick={() => refetch()} disabled={isLoading}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refetch
                    </Button>
                  </div>

                  {isLoading && <div>Loading users...</div>}
                  {error && (
                    <div className="text-red-600">Error loading users</div>
                  )}

                  {users && (
                    <div className="space-y-2">
                      {users.map((user) => (
                        <div
                          key={user.id}
                          className="flex items-center justify-between p-3 bg-white rounded border"
                        >
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-600">
                              {user.email}
                            </div>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteUserMutation.mutate(user.id)}
                            disabled={deleteUserMutation.isPending}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <Card className="bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Add New User</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <input
                        type="text"
                        placeholder="Name"
                        value={newUser.name}
                        onChange={(e) =>
                          setNewUser({ ...newUser, name: e.target.value })
                        }
                        className="w-full p-2 border rounded"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) =>
                          setNewUser({ ...newUser, email: e.target.value })
                        }
                        className="w-full p-2 border rounded"
                      />
                      <Button
                        onClick={() => addUserMutation.mutate(newUser)}
                        disabled={
                          addUserMutation.isPending ||
                          !newUser.name ||
                          !newUser.email
                        }
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        {addUserMutation.isPending ? "Adding..." : "Add User"}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manual" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Manual Fetch API</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button onClick={fetchManualData} disabled={isManualLoading}>
                    {isManualLoading ? "Loading..." : "Fetch Data"}
                  </Button>

                  {manualData.length > 0 && (
                    <div className="space-y-2">
                      {manualData.map((post: any) => (
                        <Card key={post.id} className="border">
                          <CardContent className="p-4">
                            <h3 className="font-medium mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {post.body}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Code Example:</h4>
                      <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                        {`const fetchData = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
};`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="useeffect" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>useEffect Data Fetching</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {effectLoading ? (
                    <div>Loading comments...</div>
                  ) : (
                    <div className="space-y-2">
                      {effectData.map((comment: any) => (
                        <Card key={comment.id} className="border">
                          <CardContent className="p-4">
                            <div className="font-medium mb-1">
                              {comment.name}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              {comment.email}
                            </div>
                            <p className="text-sm">{comment.body}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Code Example:</h4>
                      <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                        {`useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/comments');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); // Empty dependency array`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Fetching Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left">
                          Feature
                        </th>
                        <th className="border border-gray-300 p-3 text-left">
                          React Query
                        </th>
                        <th className="border border-gray-300 p-3 text-left">
                          Manual Fetch
                        </th>
                        <th className="border border-gray-300 p-3 text-left">
                          useEffect
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">
                          Caching
                        </td>
                        <td className="border border-gray-300 p-3 text-green-600">
                          ✅ Automatic
                        </td>
                        <td className="border border-gray-300 p-3 text-red-600">
                          ❌ Manual
                        </td>
                        <td className="border border-gray-300 p-3 text-red-600">
                          ❌ Manual
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-medium">
                          Background Updates
                        </td>
                        <td className="border border-gray-300 p-3 text-green-600">
                          ✅ Built-in
                        </td>
                        <td className="border border-gray-300 p-3 text-red-600">
                          ❌ Manual
                        </td>
                        <td className="border border-gray-300 p-3 text-red-600">
                          ❌ Manual
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">
                          Loading States
                        </td>
                        <td className="border border-gray-300 p-3 text-green-600">
                          ✅ Automatic
                        </td>
                        <td className="border border-gray-300 p-3 text-yellow-600">
                          ⚠️ Manual
                        </td>
                        <td className="border border-gray-300 p-3 text-yellow-600">
                          ⚠️ Manual
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-medium">
                          Error Handling
                        </td>
                        <td className="border border-gray-300 p-3 text-green-600">
                          ✅ Built-in
                        </td>
                        <td className="border border-gray-300 p-3 text-yellow-600">
                          ⚠️ Manual
                        </td>
                        <td className="border border-gray-300 p-3 text-yellow-600">
                          ⚠️ Manual
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">
                          Mutations
                        </td>
                        <td className="border border-gray-300 p-3 text-green-600">
                          ✅ Optimistic Updates
                        </td>
                        <td className="border border-gray-300 p-3 text-yellow-600">
                          ⚠️ Basic
                        </td>
                        <td className="border border-gray-300 p-3 text-yellow-600">
                          ⚠️ Basic
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3 font-medium">
                          Devtools
                        </td>
                        <td className="border border-gray-300 p-3 text-green-600">
                          ✅ Excellent
                        </td>
                        <td className="border border-gray-300 p-3 text-red-600">
                          ❌ None
                        </td>
                        <td className="border border-gray-300 p-3 text-red-600">
                          ❌ None
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DataFetching;
