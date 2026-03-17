import { workflowStates } from "@/lib/projectData";
import { ArrowRight } from "lucide-react";

export default function WorkflowSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Workflow States</h1>
        <p className="text-muted-foreground">
          Understanding the different states in our project workflow helps team members track progress and identify blockers.
        </p>
      </div>

      {/* Workflow Diagram */}
      <div className="bg-white border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Workflow Progression</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto pb-4">
          {["Backlog", "To Do", "In Progress", "In Review / QA", "Done"].map((state, index) => (
            <div key={state} className="flex items-center gap-4 flex-shrink-0">
              <div className="bg-primary text-primary-foreground rounded-lg px-4 py-3 font-semibold text-center min-w-32">
                {state}
              </div>
              {index < 4 && <ArrowRight className="text-muted-foreground" size={24} />}
            </div>
          ))}
        </div>
      </div>

      {/* Workflow States */}
      <div className="space-y-4">
        {workflowStates.map((state, index) => (
          <div key={state.name} className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-semibold">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">{state.name}</h3>
                <p className="text-muted-foreground">{state.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="font-bold text-amber-900 mb-3">⚠️ Blocked State</h3>
          <p className="text-sm text-amber-800">
            When a task encounters an impediment and cannot proceed, it should be moved to the "Blocked" state. 
            The Scrum Master should be notified immediately to help remove the blocker.
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-bold text-green-900 mb-3">✓ Done Definition</h3>
          <p className="text-sm text-green-800">
            A task is considered "Done" when it has passed code review, QA testing, and all acceptance criteria 
            have been met. It is ready for deployment or release.
          </p>
        </div>
      </div>
    </div>
  );
}
