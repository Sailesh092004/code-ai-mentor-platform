
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Code2,
  Search,
  Menu,
  X,
  BarChart2,
  BookOpen,
  Trophy,
  User,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and name */}
        <div className="flex items-center gap-2">
          <Code2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">CodeMentor</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative w-60">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search challenges..."
              className="w-full bg-background pl-8 rounded-md border border-input"
            />
          </div>
          <Button variant="ghost" className="gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Learn</span>
          </Button>
          <Button variant="ghost" className="gap-2">
            <BarChart2 className="h-4 w-4" />
            <span>Practice</span>
          </Button>
          <Button variant="ghost" className="gap-2">
            <Trophy className="h-4 w-4" />
            <span>Compete</span>
          </Button>
          <Button variant="accent" className="gap-2">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 space-y-3 border-b border-border/40">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search challenges..."
              className="w-full bg-background pl-8"
            />
          </div>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Learn</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <BarChart2 className="h-4 w-4" />
            <span>Practice</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Trophy className="h-4 w-4" />
            <span>Compete</span>
          </Button>
          <Button variant="accent" className="w-full justify-start gap-2">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
