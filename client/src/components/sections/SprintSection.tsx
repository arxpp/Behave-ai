import { sprintInfo } from "@/lib/projectData";
import { Calendar, Users, Target, Clock } from "lucide-react";

export default function SprintSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Sprint Planning</h1>
        <p className="text-muted-foreground">
          Learn about our sprint structure, ceremonies, and how we plan and execute work.
        </p>
      </div>

      {/* Sprint Duration */}
      <div className="bg-white border border-border rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Sprint Duration</h2>
            <p className="text-lg text-muted-foreground">{sprintInfo.duration}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Each sprint is a time-boxed iteration where the team commits to completing a set of work items. 
              This duration allows for regular feedback and course correction.
            </p>
          </div>
        </div>
      </div>

      {/* Story Point Estimation */}
      <div className="bg-white border border-border rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Target className="text-primary flex-shrink-0 mt-1" size={28} />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Story Point Estimation</h2>
            <p className="text-muted-foreground mb-4">
              We use the Fibonacci sequence to estimate the effort required for each user story:
            </p>
            <p className="text-lg font-semibold text-primary mb-2">{sprintInfo.estimationScale}</p>
            <p className="text-sm text-muted-foreground">
              Story points represent the relative complexity and effort of a task, not the actual time it takes. 
              This helps the team understand capacity and commit to realistic work.
            </p>
          </div>
        </div>
      </div>

      {/* Sprint Ceremonies */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Sprint Ceremonies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sprintInfo.ceremonies.map((ceremony, index) => (
            <div key={ceremony.name} className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{ceremony.name}</h3>
                  <p className="text-sm text-muted-foreground">{ceremony.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sprint Planning Process */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Calendar size={20} />
          Sprint Planning Process
        </h3>
        <ol className="space-y-3 text-sm text-blue-800">
          <li className="flex gap-3">
            <span className="font-bold flex-shrink-0">1.</span>
            <span><strong>Backlog Refinement:</strong> Product Owner ensures backlog items are well-defined and prioritized.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold flex-shrink-0">2.</span>
            <span><strong>Sprint Planning Meeting:</strong> Team reviews prioritized items and commits to work for the sprint.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold flex-shrink-0">3.</span>
            <span><strong>Task Breakdown:</strong> Stories are broken down into tasks and assigned to team members.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold flex-shrink-0">4.</span>
            <span><strong>Daily Execution:</strong> Team holds daily stand-ups to sync progress and address blockers.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold flex-shrink-0">5.</span>
            <span><strong>Sprint Review:</strong> Team demonstrates completed work to stakeholders.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold flex-shrink-0">6.</span>
            <span><strong>Retrospective:</strong> Team reflects on what went well and areas for improvement.</span>
          </li>
        </ol>
      </div>

      {/* Capacity Planning */}
      <div className="bg-white border border-border rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Users className="text-primary flex-shrink-0 mt-1" size={28} />
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Capacity Planning</h2>
            <p className="text-muted-foreground mb-4">
              The team's capacity is determined by the total story points they can commit to in a sprint. 
              This is based on:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Team size and availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Historical velocity (average points completed per sprint)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Planned time off and other commitments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Technical debt and maintenance tasks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
