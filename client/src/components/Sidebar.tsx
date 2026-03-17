import { Menu, X } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "epics", label: "Epics & Stories", icon: "📌" },
    { id: "workflow", label: "Workflow", icon: "🔄" },
    { id: "sprint", label: "Sprint Planning", icon: "⚡" },
    { id: "roles", label: "Roles & Team", icon: "👥" }
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-border rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out z-40 lg:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Title */}
          <div className="p-6 border-b border-sidebar-border">
            <h1 className="text-2xl font-bold text-primary">Jira Ref</h1>
            <p className="text-xs text-muted-foreground mt-1">Project Dashboard</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-sidebar-primary text-sidebar-primary-foreground font-semibold shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Info */}
          <div className="p-4 border-t border-sidebar-border text-xs text-muted-foreground">
            <p className="font-semibold mb-2">Project Info</p>
            <p>Dementia Outburst Prediction</p>
            <p className="mt-1">POD Project</p>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
