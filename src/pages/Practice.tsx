
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChallengeCard from '@/components/ChallengeCard';
import { challenges, Challenge } from '@/data/challenges';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  BarChart2, 
  Filter,
  Search,
  Code,
  ChevronDown
} from 'lucide-react';
import CodeEditor from '@/components/CodeEditor';

const categories = ["Array", "String", "Hash Table", "Math", "Sorting", "Graph", "Tree", "Dynamic Programming"];

const Practice = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [difficulty, setDifficulty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryToggle = (category: string) => {
    setFilters(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const filteredChallenges = challenges.filter(challenge => {
    const matchesDifficulty = difficulty === "all" || challenge.difficulty.toLowerCase() === difficulty.toLowerCase();
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.length === 0 || 
                            filters.includes(challenge.category);
    
    return matchesDifficulty && matchesSearch && matchesCategory;
  });

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
            <section className="py-12 md:py-16 border-b border-border/40 bg-secondary/10">
              <div className="container">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold">Practice Coding Challenges</h1>
                  <p className="text-xl text-muted-foreground">
                    Solve algorithmic problems and improve your coding skills with real-world challenges
                  </p>
                </div>
              </div>
            </section>
            
            {/* Challenges section */}
            <section className="py-12">
              <div className="container">
                <Tabs defaultValue="all" value={difficulty} onValueChange={setDifficulty} className="mb-8">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold">Coding Challenges</h2>
                    
                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                      <div className="relative flex-1 sm:max-w-xs">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search challenges..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      
                      <Collapsible open={showFilters} onOpenChange={setShowFilters} className="sm:w-auto">
                        <CollapsibleTrigger asChild>
                          <Button variant="outline" className="gap-2 w-full sm:w-auto">
                            <Filter className="h-4 w-4" />
                            <span>Filters</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2 p-4 border rounded-md bg-card shadow-sm">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {categories.map((category) => (
                              <div key={category} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={category} 
                                  checked={filters.includes(category)}
                                  onCheckedChange={() => handleCategoryToggle(category)}
                                />
                                <label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  {category}
                                </label>
                              </div>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                    
                    <TabsList className="flex-none">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="easy">Easy</TabsTrigger>
                      <TabsTrigger value="medium">Medium</TabsTrigger>
                      <TabsTrigger value="hard">Hard</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value={difficulty} className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredChallenges.length > 0 ? (
                        filteredChallenges.map((challenge) => (
                          <ChallengeCard 
                            key={challenge.id} 
                            challenge={challenge}
                            onSelect={handleSelectChallenge}
                          />
                        ))
                      ) : (
                        <div className="col-span-full py-12 text-center">
                          <p className="text-muted-foreground text-lg">
                            No challenges found for the current filters. Try adjusting your search criteria.
                          </p>
                        </div>
                      )}
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

export default Practice;
