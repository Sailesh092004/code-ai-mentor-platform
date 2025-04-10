
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserProfile from '@/components/UserProfile';
import ChallengeCard from '@/components/ChallengeCard';
import CodeEditor from '@/components/CodeEditor';
import { challenges, Challenge } from '@/data/challenges';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart2, 
  Code2, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';

const Index = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const handleSelectChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {selectedChallenge ? (
          <div className="container py-6">
            <Button 
              variant="outline" 
              onClick={() => setSelectedChallenge(null)}
              className="mb-6"
            >
              ← Back to Challenges
            </Button>
            <div className="h-[calc(100vh-220px)]">
              <CodeEditor challenge={selectedChallenge} />
            </div>
          </div>
        ) : (
          <>
            {/* Hero section */}
            <section className="py-12 md:py-20 border-b border-border/40">
              <div className="container">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur"></div>
                      <div className="relative bg-background rounded-full p-4">
                        <Code2 className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Master Coding with AI-Enhanced Feedback
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Solve challenges, get personalized AI feedback, and improve your coding skills faster than ever.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="gap-2">
                      <BarChart2 className="h-5 w-5" />
                      Start Practicing
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2">
                      <BookOpen className="h-5 w-5" />
                      Explore Tutorials
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Features section */}
            <section className="py-12 md:py-20 border-b border-border/40 bg-secondary/20">
              <div className="container">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold">How It Works</h2>
                  <p className="text-muted-foreground mt-2">
                    Accelerate your learning with our AI-powered platform
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Learn Concepts</h3>
                    <p className="text-muted-foreground">
                      Master programming fundamentals with our comprehensive tutorials and guides.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <BarChart2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Practice Challenges</h3>
                    <p className="text-muted-foreground">
                      Apply your skills to real coding problems with increasing difficulty levels.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Feedback</h3>
                    <p className="text-muted-foreground">
                      Get personalized code reviews and optimization suggestions from our AI mentor.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Main content with challenges and profile */}
            <section className="py-12">
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Sidebar with user profile */}
                  <div className="lg:col-span-1 space-y-6">
                    <UserProfile />
                    
                    <div className="p-6 rounded-lg border border-primary/30 bg-primary/5">
                      <div className="flex gap-4 items-start">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">AI Mentor Pro</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Unlock advanced AI feedback and personalized learning paths with our premium plan.
                          </p>
                          <Button className="w-full gap-2">
                            <GraduationCap className="h-4 w-4" />
                            Upgrade Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main content with challenges */}
                  <div className="lg:col-span-2">
                    <Tabs defaultValue="all" className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Practice Challenges</h2>
                        <TabsList>
                          <TabsTrigger value="all">All</TabsTrigger>
                          <TabsTrigger value="easy">Easy</TabsTrigger>
                          <TabsTrigger value="medium">Medium</TabsTrigger>
                          <TabsTrigger value="hard">Hard</TabsTrigger>
                        </TabsList>
                      </div>
                      
                      <TabsContent value="all" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges.map((challenge) => (
                            <ChallengeCard 
                              key={challenge.id} 
                              challenge={challenge}
                              onSelect={handleSelectChallenge}
                            />
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="easy" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges
                            .filter(c => c.difficulty === 'Easy')
                            .map((challenge) => (
                              <ChallengeCard 
                                key={challenge.id} 
                                challenge={challenge}
                                onSelect={handleSelectChallenge}
                              />
                            ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="medium" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges
                            .filter(c => c.difficulty === 'Medium')
                            .map((challenge) => (
                              <ChallengeCard 
                                key={challenge.id} 
                                challenge={challenge}
                                onSelect={handleSelectChallenge}
                              />
                            ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="hard" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges
                            .filter(c => c.difficulty === 'Hard')
                            .map((challenge) => (
                              <ChallengeCard 
                                key={challenge.id} 
                                challenge={challenge}
                                onSelect={handleSelectChallenge}
                              />
                            ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="text-center">
                      <Button variant="outline" className="gap-2">
                        <span>View More Challenges</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
