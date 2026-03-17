import { roles } from "@/lib/projectData";
import { Users, Shield, Zap } from "lucide-react";

const roleIcons = [
  { icon: Shield, color: "text-blue-600" },
  { icon: Zap, color: "text-amber-600" },
  { icon: Users, color: "text-green-600" }
];

export default function RolesSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Roles & Team</h1>
        <p className="text-muted-foreground">
          Understanding team roles and responsibilities ensures clear communication and accountability.
        </p>
      </div>

      {/* Team Roles */}
      <div className="space-y-6">
        {roles.map((role, index) => {
          const IconComponent = roleIcons[index]?.icon || Users;
          const iconColor = roleIcons[index]?.color || "text-primary";

          return (
            <div key={role.title} className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`${iconColor} flex-shrink-0 mt-1`}>
                  <IconComponent size={32} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-3">{role.title}</h2>
                  <p className="text-muted-foreground">{role.responsibilities}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cross-Functional Team */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">Cross-Functional Team Composition</h2>
        <p className="text-muted-foreground mb-4">
          Our Development Team is composed of individuals with diverse skills and expertise:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-border rounded-lg p-4">
            <h3 className="font-bold text-foreground mb-2">👨‍💻 Developers</h3>
            <p className="text-sm text-muted-foreground">
              Build and maintain the codebase, implement features, and ensure code quality.
            </p>
          </div>
          <div className="bg-white border border-border rounded-lg p-4">
            <h3 className="font-bold text-foreground mb-2">🎨 Designers</h3>
            <p className="text-sm text-muted-foreground">
              Create user interfaces, wireframes, and ensure a great user experience.
            </p>
          </div>
          <div className="bg-white border border-border rounded-lg p-4">
            <h3 className="font-bold text-foreground mb-2">✓ QA Engineers</h3>
            <p className="text-sm text-muted-foreground">
              Test features, identify bugs, and ensure quality standards are met.
            </p>
          </div>
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="bg-white border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Key Responsibilities by Role</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Product Owner</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Define and prioritize the product backlog</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Communicate with stakeholders and gather requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Accept completed work and provide feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Make decisions on feature scope and priority</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Scrum Master</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Facilitate all Scrum ceremonies (planning, stand-ups, reviews, retrospectives)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Remove impediments and blockers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Coach the team on Agile principles and practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Protect the team from external distractions</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Development Team</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Commit to sprint goals and deliver quality work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Collaborate with team members and share knowledge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Participate in code reviews and quality assurance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Continuously improve skills and processes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Collaboration */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-green-900 mb-3">💡 Effective Team Collaboration</h3>
        <p className="text-sm text-green-800 mb-3">
          Success depends on open communication, mutual respect, and a shared commitment to the project goals:
        </p>
        <ul className="space-y-2 text-sm text-green-800">
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>Attend all ceremonies and participate actively</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>Communicate blockers and risks early</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>Support team members and help each other succeed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>Embrace feedback and continuous improvement</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
