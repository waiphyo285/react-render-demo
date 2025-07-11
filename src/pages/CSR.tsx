
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, RefreshCw, Clock } from "lucide-react";

const CSR = () => {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [randomData, setRandomData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const generateRandomData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRandomData(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Client-Side Rendering
            </Badge>
            <h1 className="text-3xl font-bold">CSR Examples</h1>
          </div>
          <p className="text-gray-600">
            These components render and update entirely in the browser after the initial page load.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Real-time Clock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-mono bg-gray-100 p-4 rounded-lg">
                {currentTime.toLocaleTimeString()}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Updates every second using useEffect and setInterval
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Counter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <Button onClick={() => setCount(count - 1)}>-</Button>
                <span className="text-2xl font-bold">{count}</span>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </div>
              <Button variant="outline" onClick={() => setCount(0)}>
                Reset
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                State managed entirely on the client side
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Dynamic Data Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={generateRandomData} 
                disabled={isLoading}
                className="mb-4"
              >
                {isLoading ? "Generating..." : "Generate Random Data"}
              </Button>
              
              {randomData.length > 0 && (
                <div className="grid grid-cols-5 gap-2">
                  {randomData.map((num, index) => (
                    <div 
                      key={index} 
                      className="bg-blue-100 p-2 rounded text-center font-mono"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              )}
              <p className="text-sm text-gray-600 mt-2">
                Data generated and rendered entirely on the client
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Code Example</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`const [count, setCount] = useState(0);
const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);
  return () => clearInterval(timer);
}, []);`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CSR;
