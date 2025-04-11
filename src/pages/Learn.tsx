
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, BookText, Video, CheckCircle, Lock, ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    content: {
      overview: "Algorithms are the foundation of computer science and computational thinking. This tutorial will introduce you to the concept of algorithms and how they are used to solve problems.",
      sections: [
        {
          title: "What is an Algorithm?",
          text: "An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. Algorithms are precise, unambiguous, and have a clear starting point and ending point. They can be expressed in pseudocode, flowcharts, or programming languages.",
          videoUrl: "#algorithm-intro-video"
        },
        {
          title: "Characteristics of Good Algorithms",
          text: "A good algorithm should be correct, efficient, and easy to understand. It should produce the correct output for all valid inputs, use resources (time and space) efficiently, and be written in a way that other programmers can understand and maintain.",
          videoUrl: "#algorithm-characteristics-video"
        },
        {
          title: "Common Algorithm Design Techniques",
          text: "Several common techniques are used to design algorithms, including brute force, divide and conquer, greedy algorithms, dynamic programming, and backtracking. Each technique is suitable for different types of problems.",
          videoUrl: "#algorithm-techniques-video"
        },
        {
          title: "Real-world Applications",
          text: "Algorithms are used in various applications, from search engines and social media feeds to route planning in GPS systems and recommendation systems in streaming platforms. Understanding algorithms helps you build better software and solve complex problems efficiently.",
          videoUrl: "#algorithm-applications-video"
        }
      ],
      quiz: [
        {
          question: "What is an algorithm?",
          options: [
            "A programming language",
            "A step-by-step procedure for solving a problem",
            "A type of data structure",
            "A computer hardware component"
          ],
          correctAnswer: 1
        },
        {
          question: "Which of the following is NOT a characteristic of a good algorithm?",
          options: [
            "Correctness",
            "Efficiency",
            "Complexity",
            "Clarity"
          ],
          correctAnswer: 2
        }
      ]
    }
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
    content: {
      overview: "Data structures are specialized formats for organizing and storing data. This tutorial covers fundamental data structures that form the building blocks of more complex algorithms and applications.",
      sections: [
        {
          title: "Arrays",
          text: "Arrays are a simple data structure that stores elements of the same type in contiguous memory locations. They provide constant-time access to elements using indices but have fixed size in many languages. Arrays are efficient for random access but inefficient for insertions and deletions in the middle.",
          videoUrl: "#arrays-video"
        },
        {
          title: "Linked Lists",
          text: "Linked lists store elements in nodes, with each node containing data and a reference to the next node. Unlike arrays, linked lists can grow or shrink dynamically. They excel at insertions and deletions but have linear-time access to elements. Variations include singly linked lists, doubly linked lists, and circular linked lists.",
          videoUrl: "#linked-lists-video"
        },
        {
          title: "Stacks",
          text: "Stacks follow the Last-In-First-Out (LIFO) principle, where the last element added is the first one removed. Common operations include push (add), pop (remove), and peek (view top element). Stacks are used in function calls, expression evaluation, and backtracking algorithms.",
          videoUrl: "#stacks-video"
        },
        {
          title: "Queues",
          text: "Queues follow the First-In-First-Out (FIFO) principle, similar to a line of people waiting. Operations include enqueue (add) and dequeue (remove). Queues are used in breadth-first search, scheduling, and handling requests in order of arrival. Variations include priority queues and deques (double-ended queues).",
          videoUrl: "#queues-video"
        }
      ],
      quiz: [
        {
          question: "Which data structure follows the LIFO principle?",
          options: [
            "Queue",
            "Array",
            "Stack",
            "Linked List"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the time complexity of accessing an element in an array by index?",
          options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
          ],
          correctAnswer: 0
        }
      ]
    }
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
    content: {
      overview: "Algorithm efficiency is measured in terms of time complexity (how long it takes to run) and space complexity (how much memory it uses). This tutorial introduces Big O notation and how to analyze algorithm performance.",
      sections: [
        {
          title: "Introduction to Algorithm Analysis",
          text: "Algorithm analysis is about estimating the resources an algorithm needs. Instead of measuring actual time in seconds (which varies by hardware), we count the number of basic operations as a function of input size. This gives us a hardware-independent way to compare algorithms.",
          videoUrl: "#algorithm-analysis-video"
        },
        {
          title: "Big O Notation",
          text: "Big O notation describes the worst-case scenario of an algorithm's time or space requirements. Common complexities include O(1) for constant time, O(log n) for logarithmic time, O(n) for linear time, O(n log n) for linearithmic time, and O(n²) for quadratic time. We focus on the dominant term and ignore constants.",
          videoUrl: "#big-o-video"
        },
        {
          title: "Analyzing Time Complexity",
          text: "To analyze time complexity, identify the basic operations in your algorithm and count how many times they execute relative to input size. Look for loops, nested loops, and recursive calls, as these often determine the overall complexity. For example, a single loop typically results in O(n) complexity.",
          videoUrl: "#time-complexity-video"
        },
        {
          title: "Space Complexity and Tradeoffs",
          text: "Space complexity measures the memory an algorithm uses beyond the input itself. Sometimes there's a tradeoff between time and space efficiency. For example, we might use more memory to store precomputed results (memoization) to save computation time later.",
          videoUrl: "#space-complexity-video"
        }
      ],
      quiz: [
        {
          question: "What does Big O notation represent?",
          options: [
            "Best-case scenario",
            "Average-case scenario",
            "Worst-case scenario",
            "All possible scenarios"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the time complexity of binary search?",
          options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
          ],
          correctAnswer: 1
        }
      ]
    }
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
  const [selectedTutorial, setSelectedTutorial] = useState<number | null>(null);
  
  const filteredTutorials = selectedCategory === "all" 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category.toLowerCase() === selectedCategory.toLowerCase());

  const tutorial = selectedTutorial !== null 
    ? tutorials.find(t => t.id === selectedTutorial) 
    : null;

  const handleSelectTutorial = (tutorialId: number) => {
    setSelectedTutorial(tutorialId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {selectedTutorial !== null && tutorial ? (
          <div className="container py-6">
            <Button 
              variant="outline" 
              onClick={() => setSelectedTutorial(null)}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tutorials
            </Button>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge>{tutorial.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {tutorial.duration}
                </div>
              </div>

              <h1 className="text-3xl font-bold">{tutorial.title}</h1>
              <p className="text-xl text-muted-foreground">{tutorial.description}</p>

              {tutorial.content && (
                <div className="space-y-8 mt-8">
                  <div className="p-6 bg-secondary/20 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Overview</h2>
                    <p>{tutorial.content.overview}</p>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <Accordion type="single" collapsible className="w-full">
                      {tutorial.content.sections.map((section, index) => (
                        <AccordionItem key={index} value={`section-${index}`}>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/10">
                            <div className="flex items-start text-left">
                              <span className="text-lg font-medium">{section.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4">
                            <div className="space-y-4">
                              <p className="text-muted-foreground">{section.text}</p>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="gap-2">
                                  <Video className="h-4 w-4" />
                                  Watch Video
                                </Button>
                                <Button variant="outline" size="sm" className="gap-2">
                                  <BookOpen className="h-4 w-4" />
                                  Read Notes
                                </Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  {tutorial.content.quiz && (
                    <div className="border rounded-lg p-6">
                      <h2 className="text-xl font-semibold mb-4">Knowledge Check</h2>
                      <div className="space-y-6">
                        {tutorial.content.quiz.map((question, qIndex) => (
                          <div key={qIndex} className="space-y-3">
                            <p className="font-medium">{qIndex + 1}. {question.question}</p>
                            <div className="grid grid-cols-1 gap-2">
                              {question.options.map((option, oIndex) => (
                                <div 
                                  key={oIndex} 
                                  className={`p-3 border rounded-md cursor-pointer hover:bg-secondary/20 ${question.correctAnswer === oIndex ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : ''}`}
                                >
                                  {option}
                                  {question.correctAnswer === oIndex && (
                                    <span className="ml-2 text-green-600">✓</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-end mt-6">
                <Button className="gap-2">
                  {tutorial.completed ? "Mark as Incomplete" : "Mark as Complete"}
                  {tutorial.completed ? <CheckCircle className="h-4 w-4" /> : null}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
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
                              onClick={() => handleSelectTutorial(tutorial.id)}
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
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Learn;
