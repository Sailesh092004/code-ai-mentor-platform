
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, BookText, Video, CheckCircle, Lock, ArrowRight } from "lucide-react";

// Sample data for tutorials
const tutorials = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    description: "Learn the basics of algorithms and computational thinking",
    duration: "45 min",
    category: "Fundamentals",
    progress: 100,
    completed: true,
    locked: false,
  },
  {
    id: 2,
    title: "Data Structures Basics",
    description: "Understanding arrays, linked lists, stacks, and queues",
    duration: "60 min",
    category: "Data Structures",
    progress: 65,
    completed: false,
    locked: false,
  },
  {
    id: 3,
    title: "Time & Space Complexity",
    description: "Master Big O notation and algorithm efficiency",
    duration: "50 min",
    category: "Fundamentals",
    progress: 0,
    completed: false,
    locked: false,
  },
  {
    id: 4,
    title: "Trees and Graphs",
    description: "Understand tree and graph data structures and traversals",
    duration: "75 min",
    category: "Data Structures",
    progress: 0,
    completed: false,
    locked: true,
  },
  {
    id: 5,
    title: "Recursion Mastery",
    description: "Deep dive into recursive algorithms and problem solving",
    duration: "90 min",
    category: "Techniques",
    progress: 0,
    completed: false,
    locked: true,
  },
  {
    id: 6,
    title: "Dynamic Programming",
    description: "Learn to solve complex problems using dynamic programming",
    duration: "120 min",
    category: "Techniques",
    progress: 0,
    completed: false,
    locked: true,
  },
];

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredTutorials = selectedCategory === "all" 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 md:py-16 border-b border-border/40 bg-secondary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold">Learning Path</h1>
              <p className="text-xl text-muted-foreground">
                Master programming concepts through structured tutorials and interactive lessons
              </p>
            </div>
          </div>
        </section>
        
        {/* Tutorials section */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold">Tutorials & Lessons</h2>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
                  <TabsTrigger value="data structures">Data Structures</TabsTrigger>
                  <TabsTrigger value="techniques">Techniques</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value={selectedCategory} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTutorials.map((tutorial) => (
                    <Card key={tutorial.id} className={`overflow-hidden ${tutorial.locked ? 'opacity-80' : ''}`}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <Badge className="mb-2" variant={tutorial.locked ? "outline" : "secondary"}>
                            {tutorial.category}
                          </Badge>
                          {tutorial.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : tutorial.locked ? (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          ) : null}
                        </div>
                        <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                        <CardDescription>{tutorial.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <BookText className="h-4 w-4" />
                          <span>Reading</span>
                          <span className="mx-2">•</span>
                          <Video className="h-4 w-4" />
                          <span>Video</span>
                          <span className="mx-2">•</span>
                          <span>{tutorial.duration}</span>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{tutorial.progress}%</span>
                          </div>
                          <Progress value={tutorial.progress} className="h-2" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full gap-2" 
                          variant={tutorial.completed ? "outline" : "default"}
                          disabled={tutorial.locked}
                        >
                          {tutorial.completed ? "Review again" : (tutorial.progress > 0 ? "Continue" : "Start learning")}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Learn;
