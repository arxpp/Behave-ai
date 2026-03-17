# Jira Project Reference Website - Design Brainstorm

## Design Approach Selected: Professional Dashboard with Minimalist Elegance

### Design Philosophy
This website serves as a **professional project reference tool** for teams managing the "Prediction of outburst in Dementia patients" project. The design prioritizes clarity, accessibility, and quick information retrieval while maintaining a sophisticated, modern aesthetic.

### Core Design Principles

1. **Information Hierarchy**: Clear visual distinction between Epics, User Stories, and Tasks using size, color, and spacing. Users should instantly understand the structure.
2. **Scanability**: Organized layouts with generous whitespace allow users to quickly find what they need without cognitive overload.
3. **Functional Elegance**: Subtle shadows, soft borders, and carefully chosen typography create a premium feel without being ornate.
4. **Interactive Feedback**: Smooth transitions and hover states provide immediate visual feedback, making the interface feel responsive and alive.

### Color Philosophy

**Primary Palette:**
- **Deep Blue** (`#1e40af`): Primary accent for buttons, links, and key highlights. Conveys professionalism and trust.
- **Slate Gray** (`#334155`): Text and secondary elements. High contrast ensures readability.
- **Soft White** (`#f8fafc`): Clean background that reduces eye strain.
- **Accent Teal** (`#0d9488`): Secondary accent for status indicators and highlights (e.g., "Done" status).
- **Warm Amber** (`#d97706`): Warning/in-progress indicators.

**Emotional Intent**: The palette evokes professionalism, reliability, and clarity—appropriate for a project management tool.

### Layout Paradigm

**Asymmetric Dashboard Layout:**
- **Left Sidebar**: Navigation menu with project sections (Epics, User Stories, Workflow, etc.). Sticky and always accessible.
- **Main Content Area**: Large, flexible space for displaying detailed information. Uses a card-based grid system for visual organization.
- **Search & Filter Bar**: Prominent search functionality at the top, allowing users to quickly filter by epic, story ID, or keyword.
- **Responsive Design**: On mobile, the sidebar collapses into a hamburger menu, and content stacks vertically.

### Signature Elements

1. **Epic Cards**: Large, visually distinct cards with a colored left border (different color per epic) and a brief description. Clicking expands to show associated user stories.
2. **Story Cards**: Nested within epic cards, displaying story ID, title, acceptance criteria summary, and story points. Includes a status badge.
3. **Breadcrumb Navigation**: Shows the current location (e.g., "Epics > Data & Emotion Model Setup > POD-9") to help users understand context.

### Interaction Philosophy

- **Smooth Expansions**: Clicking an epic smoothly expands to reveal stories; clicking a story reveals tasks and acceptance criteria.
- **Hover Effects**: Cards lift slightly on hover (subtle shadow increase) and text highlights in the primary blue color.
- **Search Feedback**: Real-time search results update as the user types, with matching text highlighted.
- **Status Indicators**: Visual badges (colored pills) for status (To Do, In Progress, Done, Blocked) provide instant status recognition.

### Animation Guidelines

- **Entrance Animations**: Cards fade in and slide up slightly when the page loads (duration: 300ms, easing: ease-out).
- **Expansion Animations**: When expanding epics or stories, content smoothly slides down (duration: 250ms, easing: ease-in-out).
- **Hover Transitions**: Smooth color and shadow transitions on hover (duration: 150ms).
- **Search Results**: Results fade in as they appear (duration: 200ms).

### Typography System

**Font Pairing:**
- **Headings**: "Poppins" (Bold, 700 weight) for epic titles and main headings. Modern and professional.
- **Subheadings**: "Poppins" (SemiBold, 600 weight) for story titles and section headers.
- **Body Text**: "Inter" (Regular, 400 weight) for descriptions, acceptance criteria, and general content.
- **Code/IDs**: "JetBrains Mono" (monospace) for story IDs (e.g., POD-9) and technical details.

**Hierarchy:**
- **H1**: 2.5rem (40px), Poppins Bold, used for page title.
- **H2**: 1.875rem (30px), Poppins SemiBold, used for epic titles.
- **H3**: 1.25rem (20px), Poppins SemiBold, used for story titles.
- **Body**: 1rem (16px), Inter Regular, for descriptions and content.
- **Small**: 0.875rem (14px), Inter Regular, for secondary information and labels.

### Visual Hierarchy Summary

- **Large, bold headings** draw attention to major sections.
- **Colored left borders** on cards create visual distinction.
- **Generous padding** around content creates breathing room.
- **Subtle shadows** add depth without overwhelming.
- **Status badges** use color to communicate state at a glance.

---

## Implementation Notes

This design balances **professionalism** with **accessibility**, ensuring that team members can quickly understand project structure and find the information they need. The use of color, typography, and spacing creates a cohesive, polished interface that feels intentional and well-crafted.
