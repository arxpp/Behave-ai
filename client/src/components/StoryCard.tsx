import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { UserStory } from "@/lib/projectData";

interface StoryCardProps {
  story: UserStory;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Done":
      return "bg-green-100 text-green-800 border-green-300";
    case "In Progress":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "In Review / QA":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "Blocked":
      return "bg-red-100 text-red-800 border-red-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

export default function StoryCard({ story }: StoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-sm transition-all duration-200">
      {/* Story Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-start justify-between hover:bg-muted/20 transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-sm font-semibold text-primary">{story.id}</span>
            <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(story.status)}`}>
              {story.status}
            </span>
            {story.storyPoints && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-semibold">
                {story.storyPoints} pts
              </span>
            )}
          </div>
          <h3 className="text-base font-semibold text-foreground mb-1">
            As a {story.role}, I want {story.goal}
          </h3>
          <p className="text-sm text-muted-foreground">so that {story.reason}</p>
        </div>
        <ChevronDown
          size={20}
          className={`text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Story Details */}
      {isExpanded && (
        <div className="border-t border-border bg-muted/10 p-4 space-y-4 animate-in slide-in-from-top duration-250">
          {/* Acceptance Criteria */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Acceptance Criteria</h4>
            <ul className="space-y-1">
              {story.acceptanceCriteria.map((criterion, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tasks */}
          {story.tasks && story.tasks.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Tasks</h4>
              <ul className="space-y-2">
                {story.tasks.map((task) => (
                  <li key={task.id} className="text-sm bg-white border border-border rounded p-2 flex items-start">
                    <span className="text-primary mr-2 font-mono text-xs font-semibold">{task.id}</span>
                    <span className="text-foreground">{task.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Due Date */}
          {story.dueDate && (
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold">Due Date:</span> {new Date(story.dueDate).toLocaleDateString()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
