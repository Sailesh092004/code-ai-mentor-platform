
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Challenge } from "@/data/challenges";
import { ArrowRightCircle } from "lucide-react";

interface ChallengeCardProps {
  challenge: Challenge;
  onSelect: (challenge: Challenge) => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-500/20 text-green-400 hover:bg-green-500/30';
    case 'Medium':
      return 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30';
    case 'Hard':
      return 'bg-red-500/20 text-red-400 hover:bg-red-500/30';
    default:
      return 'bg-primary/20 text-primary hover:bg-primary/30';
  }
};

const ChallengeCard = ({ challenge, onSelect }: ChallengeCardProps) => {
  const difficultyColor = getDifficultyColor(challenge.difficulty);

  return (
    <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{challenge.title}</CardTitle>
          <Badge variant="outline" className={difficultyColor}>
            {challenge.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <Badge variant="secondary" className="mb-2">
          {challenge.category}
        </Badge>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {challenge.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="w-full justify-between group"
          onClick={() => onSelect(challenge)}
        >
          <span>Solve Challenge</span>
          <ArrowRightCircle className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
