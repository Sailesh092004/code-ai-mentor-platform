
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Code, Star, Target } from "lucide-react";

const UserProfile = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src="" />
            <AvatarFallback className="text-lg">JS</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Jane Smith</CardTitle>
            <CardDescription>Level 4 Programmer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span>Progress to Level 5</span>
              <span className="text-primary">65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <Trophy className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Challenges Completed</div>
                <div className="font-medium">24</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Code className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Languages</div>
                <div className="font-medium">3</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Star className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Points</div>
                <div className="font-medium">1,240</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Streak</div>
                <div className="font-medium">7 days</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
