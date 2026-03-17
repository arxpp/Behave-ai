import { projectData } from "@/lib/projectData";

export default function Overview() {
  const totalStories = projectData.reduce((sum, epic) => sum + epic.userStories.length, 0);
  const totalTasks = projectData.reduce(
    (sum, epic) => sum + epic.userStories.reduce((storySum, story) => storySum + story.tasks.length, 0),
    0
  );
  const totalPoints = projectData.reduce(
    (sum, epic) => sum + epic.userStories.reduce((storySum, story) => storySum + story.storyPoints, 0),
    0
  );

  const statusBreakdown = {
    "To Do": projectData.reduce(
      (sum, epic) => sum + epic.userStories.filter((s) => s.status === "To Do").length,
      0
    ),
    "In Progress": projectData.reduce(
      (sum, epic) => sum + epic.userStories.filter((s) => s.status === "In Progress").length,
      0
    ),
    "Done": projectData.reduce(
      (sum, epic) => sum + epic.userStories.filter((s) => s.status === "Done").length,
      0
    )
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Jira Project Reference</h1>
        <p className="text-lg text-muted-foreground">Prediction of Outburst in Dementia Patients</p>
      </div>

      {/* Project Description */}
      <div className="bg-white border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
        <p className="text-muted-foreground mb-4">
          This project aims to develop a comprehensive system for predicting emotional outbursts in dementia patients. 
          The system combines machine learning models with a user-friendly dashboard for caregivers to monitor and respond 
          to patient needs proactively.
        </p>
        <p className="text-muted-foreground">
          The project is organized into three main epics: Data & Emotion Model Setup, Dashboard UI/UX & Alert Design, 
          and User Management & Security.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-semibold mb-2">Total Epics</div>
          <div className="text-3xl font-bold text-primary">{projectData.length}</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-semibold mb-2">Total Stories</div>
          <div className="text-3xl font-bold text-primary">{totalStories}</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-semibold mb-2">Total Tasks</div>
          <div className="text-3xl font-bold text-primary">{totalTasks}</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="text-sm text-muted-foreground font-semibold mb-2">Story Points</div>
          <div className="text-3xl font-bold text-primary">{totalPoints}</div>
        </div>
      </div>

      {/* Status Breakdown */}
      <div className="bg-white border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Status Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="text-sm text-muted-foreground font-semibold mb-1">To Do</div>
            <div className="text-2xl font-bold text-foreground">{statusBreakdown["To Do"]}</div>
            <div className="text-xs text-muted-foreground mt-1">stories</div>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <div className="text-sm text-muted-foreground font-semibold mb-1">In Progress</div>
            <div className="text-2xl font-bold text-foreground">{statusBreakdown["In Progress"]}</div>
            <div className="text-xs text-muted-foreground mt-1">stories</div>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <div className="text-sm text-muted-foreground font-semibold mb-1">Done</div>
            <div className="text-2xl font-bold text-foreground">{statusBreakdown["Done"]}</div>
            <div className="text-xs text-muted-foreground mt-1">stories</div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Quick Navigation</h2>
        <p className="text-muted-foreground mb-4">
          Use the sidebar to navigate to different sections of the project. Each section provides detailed information about 
          epics, user stories, workflow, sprint planning, and team roles.
        </p>
      </div>
    </div>
  );
}
