
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  PlayCircle, 
  Lightbulb, 
  Code, 
  FileText, 
  Check, 
  AlertTriangle,
  Sparkles
} from "lucide-react";
import { Challenge, TestCase } from "@/data/challenges";
import AiFeedback from './AiFeedback';

interface CodeEditorProps {
  challenge: Challenge;
}

const CodeEditor = ({ challenge }: CodeEditorProps) => {
  const [code, setCode] = useState(challenge.starterCode);
  const [activeTab, setActiveTab] = useState("problem");
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const runCode = () => {
    // In a real app, this would execute the code against the test cases
    // For this demo, we'll simulate results
    let passCount = 0;
    const results = challenge.testCases.map((test, index) => {
      const passed = Math.random() > 0.3; // Randomly pass or fail for demo
      if (passed) passCount++;
      return {
        passed,
        message: passed 
          ? `Test case ${index + 1} passed!` 
          : `Test case ${index + 1} failed. Expected ${test.expected}.`
      };
    });
    
    setTestResults(results);
    setShowFeedback(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      {/* Left side - Problem description */}
      <Card className="h-full overflow-auto">
        <Tabs defaultValue="problem" value={activeTab} onValueChange={setActiveTab}>
          <CardHeader className="pb-0">
            <div className="flex justify-between items-center">
              <CardTitle>{challenge.title}</CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline" className={
                  challenge.difficulty === 'Easy' 
                    ? 'bg-green-500/20 text-green-400' 
                    : challenge.difficulty === 'Medium'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                }>
                  {challenge.difficulty}
                </Badge>
                <Badge variant="secondary">{challenge.category}</Badge>
              </div>
            </div>
            <TabsList className="mt-4">
              <TabsTrigger value="problem" className="flex gap-2 items-center">
                <FileText className="h-4 w-4" />
                Problem
              </TabsTrigger>
              <TabsTrigger value="hints" className="flex gap-2 items-center">
                <Lightbulb className="h-4 w-4" />
                Hints
              </TabsTrigger>
              <TabsTrigger value="solution" className="flex gap-2 items-center">
                <Code className="h-4 w-4" />
                Solution
              </TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent className="pt-4">
            <TabsContent value="problem" className="space-y-4 mt-0">
              <div>
                <h3 className="text-lg font-medium">Description</h3>
                <p className="text-muted-foreground mt-2">{challenge.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Examples</h3>
                <div className="space-y-3 mt-2">
                  {challenge.testCases.filter(test => !test.isHidden).map((test, i) => (
                    <div key={i} className="border border-border rounded-md p-3">
                      <div className="font-medium">Example {i + 1}</div>
                      <div className="mt-1">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Input: </span>
                          <code>{test.input}</code>
                        </div>
                        <div className="text-sm mt-1">
                          <span className="text-muted-foreground">Output: </span>
                          <code>{test.expected}</code>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="hints" className="space-y-4 mt-0">
              <h3 className="text-lg font-medium">Hints</h3>
              <ul className="space-y-2">
                {challenge.hints.map((hint, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{hint}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="solution" className="space-y-4 mt-0">
              <h3 className="text-lg font-medium">Solution</h3>
              <div className="relative">
                <pre className="p-4 rounded-md bg-secondary/30 overflow-auto text-sm">{challenge.solution}</pre>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
      
      {/* Right side - Code editor and results */}
      <div className="flex flex-col h-full">
        <Card className="flex-1 overflow-hidden flex flex-col">
          <CardHeader className="pb-0">
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Code Editor
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <div className="relative h-full">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full min-h-[300px] p-4 font-mono text-sm bg-secondary/30 rounded-md resize-none"
                spellCheck="false"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setCode(challenge.starterCode)}>
              Reset Code
            </Button>
            <Button onClick={runCode} className="gap-2">
              <PlayCircle className="h-4 w-4" />
              Run Code
            </Button>
          </CardFooter>
        </Card>
        
        {/* Test results and AI feedback */}
        {testResults.length > 0 && (
          <Card className="mt-4">
            <CardHeader className="pb-0">
              <CardTitle className="text-base flex justify-between">
                <span>Test Results</span>
                <Badge variant={testResults.every(r => r.passed) ? "default" : "outline"} className={
                  testResults.every(r => r.passed) 
                    ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                    : "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                }>
                  {testResults.filter(r => r.passed).length}/{testResults.length} Passed
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              {testResults.map((result, i) => (
                <div 
                  key={i} 
                  className={`p-2 rounded-md flex items-start gap-2 ${
                    result.passed ? "bg-green-500/10" : "bg-yellow-500/10"
                  }`}
                >
                  {result.passed ? (
                    <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                  )}
                  <span className="text-sm">{result.message}</span>
                </div>
              ))}
              
              {showFeedback && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-primary animate-pulse-glow" />
                    <h3 className="font-medium">AI Mentor Feedback</h3>
                  </div>
                  <AiFeedback code={code} challenge={challenge} testsPassed={testResults.every(r => r.passed)} />
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
