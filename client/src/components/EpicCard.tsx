import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Epic } from "@/lib/projectData";
import StoryCard from "./StoryCard";

interface EpicCardProps {
  epic: Epic;
  searchQuery: string;
}

export default function EpicCard({ epic, searchQuery }: EpicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter stories based on search query
  const filteredStories = epic.userStories.filter((story) => {
    const query = searchQuery.toLowerCase();
    return (
      story.id.toLowerCase().includes(query) ||
      story.title.toLowerCase().includes(query) ||
      story.role.toLowerCase().includes(query)
    );
  });

  // Show epic if it matches search or if any of its stories match
  if (searchQuery && filteredStories.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
      <div
        className={`border-l-4 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md ${epic.color} bg-white border border-border`}
      >
        {/* Epic Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-start justify-between hover:bg-muted/30 transition-colors"
        >
          <div className="flex-1 text-left">
            <h2 className="text-xl font-bold text-foreground mb-2">{epic.name}</h2>
            <p className="text-sm text-muted-foreground">{epic.description}</p>
          </div>
          <ChevronDown
            size={24}
            className={`text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Stories List */}
        {isExpanded && (
          <div className="border-t border-border bg-muted/20 p-6 space-y-4 animate-in slide-in-from-top duration-250">
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))
            ) : (
              <p className="text-sm text-muted-foreground py-4">No stories match your search.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
