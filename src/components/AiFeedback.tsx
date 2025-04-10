
import { useState, useEffect } from 'react';
import { Challenge } from '@/data/challenges';
import { Sparkles, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from './ui/button';

interface AiFeedbackProps {
  code: string;
  challenge: Challenge;
  testsPassed: boolean;
}

const AiFeedback = ({ code, challenge, testsPassed }: AiFeedbackProps) => {
  const [feedback, setFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackRating, setFeedbackRating] = useState<'positive' | 'negative' | null>(null);

  // In a real implementation, this would make an API call to an AI service
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      if (testsPassed) {
        generatePositiveFeedback();
      } else {
        generateImprovementFeedback();
      }
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [code, testsPassed]);
  
  const generatePositiveFeedback = () => {
    // These would come from an AI in production
    const positiveResponses = [
      `Great job! Your solution for "${challenge.title}" passed all tests. I noticed you used a ${challenge.category.toLowerCase()} approach, which is very efficient. Your time complexity is optimal at O(n).`,
      `Excellent work on solving "${challenge.title}"! Your code is clean and well-structured. One small optimization you could consider is using destructuring for cleaner variable assignment.`,
      `Congratulations on solving "${challenge.title}"! Your approach is efficient and readable. For even better performance, consider edge cases like empty arrays or invalid inputs.`
    ];
    
    setFeedback(positiveResponses[Math.floor(Math.random() * positiveResponses.length)]);
  };
  
  const generateImprovementFeedback = () => {
    // These would come from an AI in production
    const improvementResponses = [
      `Your solution for "${challenge.title}" is on the right track, but there's a logic error. Check your loop condition - you might be off by one in your boundary check.`,
      `You're close to solving "${challenge.title}"! Consider what happens when you encounter duplicate values. A hashmap would help track values you've already seen.`,
      `Almost there with "${challenge.title}"! The issue might be in how you're handling the return value. Double-check the exact format the problem expects for the output.`
    ];
    
    setFeedback(improvementResponses[Math.floor(Math.random() * improvementResponses.length)]);
  };
  
  const rateFeedback = (rating: 'positive' | 'negative') => {
    setFeedbackRating(rating);
    // In a real app, this would send feedback data to improve the AI
  };

  if (isLoading) {
    return (
      <div className="text-sm border border-primary/30 bg-primary/5 rounded-md p-3 animate-pulse">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>AI mentor analyzing your code...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="text-sm border border-primary/30 bg-primary/5 rounded-md p-3">
      <p className="whitespace-pre-line">{feedback}</p>
      
      {!feedbackRating && (
        <div className="mt-3 flex justify-end gap-2">
          <p className="text-xs text-muted-foreground mr-2 self-center">Was this feedback helpful?</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-7 gap-1" 
            onClick={() => rateFeedback('positive')}
          >
            <ThumbsUp className="h-3.5 w-3.5" />
            <span className="text-xs">Yes</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-7 gap-1" 
            onClick={() => rateFeedback('negative')}
          >
            <ThumbsDown className="h-3.5 w-3.5" />
            <span className="text-xs">No</span>
          </Button>
        </div>
      )}
      
      {feedbackRating && (
        <p className="mt-3 text-xs text-right text-muted-foreground">
          {feedbackRating === 'positive' 
            ? 'Thanks for your feedback! We\'ll keep improving our AI mentor.'
            : 'Thanks for your feedback. We\'ll work on making our suggestions more helpful.'}
        </p>
      )}
    </div>
  );
};

export default AiFeedback;
