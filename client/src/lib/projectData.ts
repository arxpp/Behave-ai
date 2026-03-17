export interface Task {
  id: string;
  title: string;
  description?: string;
}

export interface UserStory {
  id: string;
  title: string;
  role: string;
  goal: string;
  reason: string;
  acceptanceCriteria: string[];
  storyPoints: number;
  tasks: Task[];
  status: "To Do" | "In Progress" | "In Review / QA" | "Done" | "Blocked";
  dueDate?: string;
}

export interface Epic {
  id: string;
  name: string;
  description: string;
  color: string;
  userStories: UserStory[];
}

export const projectData: Epic[] = [
  {
    id: "epic-1",
    name: "Data & Emotion Model Setup",
    description: "Encompasses all tasks related to acquiring, processing, and building the machine learning model to predict emotional outbursts.",
    color: "bg-blue-100 border-blue-500",
    userStories: [
      {
        id: "POD-9",
        title: "Use data to train deep learning model",
        role: "developer",
        goal: "use data to train my deep learning model",
        reason: "it can accurately predict emotional outbursts",
        acceptanceCriteria: [
          "The model achieves an accuracy of at least 85% on the validation dataset",
          "The model can process new data and generate a prediction within 500ms",
          "The training pipeline is documented and can be run by another developer"
        ],
        storyPoints: 8,
        status: "To Do",
        dueDate: "2026-02-28",
        tasks: [
          {
            id: "TASK-1.1",
            title: "Research and select appropriate deep learning frameworks (e.g., TensorFlow, PyTorch)"
          },
          {
            id: "TASK-1.2",
            title: "Develop data preprocessing scripts to clean and format the training data"
          },
          {
            id: "TASK-1.3",
            title: "Build and train the initial version of the deep learning model"
          },
          {
            id: "TASK-1.4",
            title: "Evaluate model performance and tune hyperparameters"
          }
        ]
      },
      {
        id: "POD-NEW1",
        title: "Set up data ingestion pipeline",
        role: "data scientist",
        goal: "set up a data ingestion pipeline",
        reason: "we can continuously feed new data into our system",
        acceptanceCriteria: [
          "The pipeline can pull data from our specified sources (e.g., wearable sensors, manual logs)",
          "Data is automatically cleaned and stored in the database",
          "The pipeline runs on a daily schedule without manual intervention"
        ],
        storyPoints: 5,
        status: "To Do",
        dueDate: "2026-03-15",
        tasks: [
          {
            id: "TASK-2.1",
            title: "Identify and document all data sources"
          },
          {
            id: "TASK-2.2",
            title: "Write scripts to connect to and extract data from each source"
          },
          {
            id: "TASK-2.3",
            title: "Set up a scheduler (e.g., cron job) to automate the pipeline"
          }
        ]
      }
    ]
  },
  {
    id: "epic-2",
    name: "Dashboard UI/UX & Alert Design",
    description: "Covers the design, development, and implementation of the user-facing dashboard for caregivers and the alert system for outburst prediction.",
    color: "bg-purple-100 border-purple-500",
    userStories: [
      {
        id: "POD-29",
        title: "Create low-fidelity wireframe of main alert dashboard",
        role: "UX/UI Designer",
        goal: "create a low-fidelity wireframe of the main alert dashboard",
        reason: "we can get early feedback from caregivers",
        acceptanceCriteria: [
          "The wireframe includes all key components: patient status, recent alerts, and historical data view",
          "The design is intuitive and requires minimal training for a non-technical user",
          "The wireframe is approved by the Product Owner and a sample group of caregivers"
        ],
        storyPoints: 3,
        status: "In Progress",
        dueDate: "2026-03-22",
        tasks: [
          {
            id: "TASK-3.1",
            title: "Sketch initial concepts for the dashboard layout"
          },
          {
            id: "TASK-3.2",
            title: "Create digital wireframes using a tool like Figma or Balsamiq"
          },
          {
            id: "TASK-3.3",
            title: "Conduct a feedback session with stakeholders"
          }
        ]
      },
      {
        id: "POD-52",
        title: "Application works seamlessly for caregivers",
        role: "caregiver (customer)",
        goal: "the application to work seamlessly",
        reason: "I can monitor my patient without frustration",
        acceptanceCriteria: [
          "The application has a 99.9% uptime",
          "All pages load in under 2 seconds",
          "The user interface is responsive and works on both desktop and mobile devices"
        ],
        storyPoints: 5,
        status: "To Do",
        dueDate: "2026-04-30",
        tasks: [
          {
            id: "TASK-4.1",
            title: "Develop the front-end for the main dashboard based on the approved wireframes"
          },
          {
            id: "TASK-4.2",
            title: "Implement the back-end API to serve data to the dashboard"
          },
          {
            id: "TASK-4.3",
            title: "Conduct performance testing and optimize as needed"
          }
        ]
      }
    ]
  },
  {
    id: "epic-3",
    name: "User Management & Security",
    description: "A new epic to address security and user access control, which is a critical component for any application handling sensitive data.",
    color: "bg-red-100 border-red-500",
    userStories: [
      {
        id: "POD-26",
        title: "Software is secure to protect patient data",
        role: "developer",
        goal: "my software to be secure",
        reason: "patient data is protected",
        acceptanceCriteria: [
          "All data transmission is encrypted using TLS 1.2 or higher",
          "The application is protected against common web vulnerabilities (e.g., SQL injection, XSS)",
          "A role-based access control system is in place to restrict access to sensitive data"
        ],
        storyPoints: 8,
        status: "Done",
        dueDate: "2026-02-28",
        tasks: [
          {
            id: "TASK-5.1",
            title: "Implement user authentication and authorization"
          },
          {
            id: "TASK-5.2",
            title: "Conduct a security audit of the codebase"
          },
          {
            id: "TASK-5.3",
            title: "Set up logging and monitoring for security events"
          }
        ]
      }
    ]
  }
];

export const workflowStates = [
  { name: "Backlog", description: "All user stories and tasks that have been identified but not yet prioritized for a specific sprint." },
  { name: "To Do", description: "Tasks that have been committed to the current sprint and are ready to be worked on." },
  { name: "In Progress", description: "The task is actively being worked on by a team member." },
  { name: "In Review / QA", description: "The task is complete from a development perspective and is now being reviewed or tested for quality assurance." },
  { name: "Done", description: "The task has passed review and is considered complete." },
  { name: "Blocked", description: "The task cannot proceed due to an impediment. This status should be used to highlight issues that need attention." }
];

export const roles = [
  { title: "Product Owner", responsibilities: "Owns the product backlog, prioritizes work, and is the main point of contact for stakeholders." },
  { title: "Scrum Master", responsibilities: "Facilitates the Scrum process, removes impediments, and coaches the team on Agile principles." },
  { title: "Development Team", responsibilities: "A cross-functional group of individuals (developers, designers, QA) who are responsible for delivering the work." }
];

export const sprintInfo = {
  duration: "2 weeks",
  ceremonies: [
    { name: "Sprint Planning", description: "A meeting at the start of the sprint to select and commit to the work to be done." },
    { name: "Daily Stand-up", description: "A short daily meeting for the team to sync on progress, plans, and any blockers." },
    { name: "Sprint Review", description: "A meeting at the end of the sprint to demonstrate the work that has been completed." },
    { name: "Sprint Retrospective", description: "A meeting for the team to reflect on what went well and what could be improved for the next sprint." }
  ],
  estimationScale: "Fibonacci sequence: 1, 2, 3, 5, 8, 13"
};
