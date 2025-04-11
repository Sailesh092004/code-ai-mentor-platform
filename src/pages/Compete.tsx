
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Users, Clock, Timer, Sparkles, ArrowRight, ChevronRight, Award } from "lucide-react";

// Sample data for competitions
const upcomingCompetitions = [
  {
    id: 1,
    title: "Weekly Coding Challenge",
    description: "Solve algorithmic problems in a time-constrained environment",
    startDate: "2025-04-15T19:00:00",
    duration: "2 hours",
    participants: 128,
    difficulty: "Medium",
    prizes: "Points + Badge",
  },
  {
    id: 2,
    title: "Database Design Competition",
    description: "Design efficient database schemas for real-world scenarios",
    startDate: "2025-04-18T15:00:00",
    duration: "3 hours",
    participants: 64,
    difficulty: "Hard",
    prizes: "Certificate + Badge",
  },
  {
    id: 3,
    title: "Front-end Challenge",
    description: "Build a responsive interface according to specifications",
    startDate: "2025-04-20T10:00:00",
    duration: "4 hours",
    participants: 96,
    difficulty: "Medium",
    prizes: "Trophy + Badge",
  },
];

const pastCompetitions = [
  {
    id: 4,
    title: "Algorithmic Showdown",
    description: "Compete in advanced algorithm challenges",
    date: "2025-04-05",
    winners: ["Alex J.", "Sarah M.", "Michael T."],
    participants: 156,
    difficulty: "Hard",
  },
  {
    id: 5,
    title: "Data Structures Battle",
    description: "Implement efficient data structures for challenging problems",
    date: "2025-03-28",
    winners: ["Emma L.", "John D.", "David K."],
    participants: 112,
    difficulty: "Medium",
  },
  {
    id: 6,
    title: "Debugging Marathon",
    description: "Find and fix bugs in complex codebases against the clock",
    date: "2025-03-15",
    winners: ["Thomas R.", "Lisa S.", "Robert P."],
    participants: 89,
    difficulty: "Medium",
  },
];

// Format date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Compete = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
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
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold">Coding Competitions</h1>
              <p className="text-xl text-muted-foreground">
                Test your skills against others in real-time competitive coding challenges
              </p>
              <div className="pt-6">
                <Button size="lg" className="gap-2">
                  <Sparkles className="h-5 w-5" />
                  Explore Competitions
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured competition */}
        <section className="py-12 border-b border-border/40">
          <div className="container">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mb-2">Featured Competition</Badge>
                  <h2 className="text-3xl font-bold">Monthly Championship</h2>
                  <p className="text-muted-foreground">
                    Our premier monthly competition with challenging algorithmic problems across different difficulty levels.
                    Compete for prizes and recognition in the CodeMentor community.
                  </p>
                  
                  <div className="flex flex-wrap gap-6 pt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>April 25, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>3 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>200+ participants</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button className="gap-2">
                      <Trophy className="h-4 w-4" />
                      Register Now
                    </Button>
                    <Button variant="outline" className="gap-2">
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                    <div className="bg-card p-6 rounded-full z-10">
                      <Trophy className="h-20 w-20 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Competitions list */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Competitions</h2>
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="upcoming" className="mt-0 space-y-6">
                {upcomingCompetitions.map((competition) => (
                  <Card key={competition.id}>
                    <CardHeader className="pb-3">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <Badge variant="secondary">{competition.difficulty}</Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Timer className="h-4 w-4" />
                          <span>{competition.duration}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mt-2">{competition.title}</CardTitle>
                      <CardDescription>{competition.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(competition.startDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{competition.participants} participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>Prizes: {competition.prizes}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="gap-2">
                        Register
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="past" className="mt-0 space-y-6">
                {pastCompetitions.map((competition) => (
                  <Card key={competition.id}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline">{competition.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-xl mt-2">{competition.title}</CardTitle>
                      <CardDescription>{competition.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{competition.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{competition.participants} participants</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Winners</h4>
                        <div className="flex flex-wrap gap-2">
                          {competition.winners.map((winner, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center gap-1">
                              {index === 0 && <Trophy className="h-3 w-3" />}
                              {winner}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="gap-2">
                        View Results
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Compete;
