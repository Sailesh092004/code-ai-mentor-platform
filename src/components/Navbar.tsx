
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  LogIn,
  UserPlus,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and name */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">CodeMentor</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-4">
          {!isAuthPage && (
            <div className="relative w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search challenges..."
                className="w-full bg-background pl-8 rounded-md border border-input"
              />
            </div>
          )}
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/learn">
              <BookOpen className="h-4 w-4" />
              <span>Learn</span>
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/practice">
              <BarChart2 className="h-4 w-4" />
              <span>Practice</span>
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/compete">
              <Trophy className="h-4 w-4" />
              <span>Compete</span>
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/login">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </Button>
          <Button variant="accent" className="gap-2" asChild>
            <Link to="/signup">
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Link>
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
          {!isAuthPage && (
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search challenges..."
                className="w-full bg-background pl-8"
              />
            </div>
          )}
          <Button variant="ghost" className="w-full justify-start gap-2" asChild>
            <Link to="/learn">
              <BookOpen className="h-4 w-4" />
              <span>Learn</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2" asChild>
            <Link to="/practice">
              <BarChart2 className="h-4 w-4" />
              <span>Practice</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2" asChild>
            <Link to="/compete">
              <Trophy className="h-4 w-4" />
              <span>Compete</span>
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2" asChild>
            <Link to="/login">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </Button>
          <Button variant="accent" className="w-full justify-start gap-2" asChild>
            <Link to="/signup">
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
