import { useState } from "react";
import { projectData } from "@/lib/projectData";
import SearchBar from "../SearchBar";
import EpicCard from "../EpicCard";

export default function EpicsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Epics & User Stories</h1>
        <p className="text-muted-foreground">
          Browse all epics and user stories for the project. Click on an epic to expand and view its stories.
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Epics List */}
      <div>
        {projectData.map((epic) => (
          <EpicCard key={epic.id} epic={epic} searchQuery={searchQuery} />
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-blue-900 mb-2">About Epics & Stories</h3>
        <p className="text-sm text-blue-800 mb-2">
          <strong>Epics</strong> are large bodies of work that span multiple sprints. Each epic contains multiple user stories 
          that deliver specific value to the end-user.
        </p>
        <p className="text-sm text-blue-800">
          <strong>User Stories</strong> follow the format "As a [role], I want [goal] so that [reason]" and include acceptance 
          criteria that define when the story is complete. Each story is assigned story points to estimate effort.
        </p>
      </div>
    </div>
  );
}
