# SupportFlow Builder

SupportFlow Builder is a visual decision tree editor for designing and testing automated customer support conversations. It replaces spreadsheet-style flow planning with an intuitive canvas where non-technical teams can structure dialogues, preview them as a chat experience, and refine every node in context.

## Product Summary

This solution helps support teams move from static process documents to interactive conversation design. Instead of relying on manual notes or disconnected tools, managers can shape the customer journey visually, test it immediately, and maintain consistency across support experiences.

## Key Features

- **Visual Flow Editor**: Build conversation trees as connected nodes on an interactive canvas
- **Live Node Editing**: Update message text directly on the canvas with instant feedback
- **Chat Preview Mode**: Simulate the customer experience in real time before deployment
- **Node Insights Panel**: Review reach, depth, branch behavior, and flow health for the selected node
- **Polished Design System**: A warm orange visual language with rounded surfaces and tactile, modern UI treatment

## Design System Highlights

- **Warm Orange Palette**: A refined palette built around #ffe3cc, #e7a46e, #dd8136, and #fb7507
- **Neumorphic UI Styling**: Rounded cards, subtle depth, and soft shadows create a premium and approachable interface
- **Accessible Visual Hierarchy**: Strong contrast, clear typography, and consistent spacing support usability
- **Custom Component Architecture**: Implemented without relying on heavy UI libraries

## Why the Wildcard Feature Matters

The wildcard feature is the intelligence layer behind the insights experience. It is important because it transforms the product from a passive diagramming tool into an active decision-support system.

### What the wildcard implementation does
- It analyzes the currently selected node and summarises its role in the overall flow
- It highlights whether the node is a strong continuation point or a likely dead end
- It surfaces branch impact, depth, and suggested next moves so the user can refine the conversation logically

### Why it adds business value
- **Faster iteration**: Teams can identify weak or confusing steps earlier, reducing rework during rollout
- **Higher consistency**: Repeated flows become more uniform, improving the quality of customer support experiences
- **Lower training burden**: Managers do not need deep technical knowledge to evaluate a conversational design
- **Better scalability**: As support flows grow in complexity, the insight layer helps teams manage them without losing clarity
- **Improved customer outcomes**: Stronger flow design leads to smoother handoffs, clearer support paths, and fewer user frustrations

In short, the wildcard feature makes the builder more strategic. It does not just help users draw flows; it helps them improve the quality of the support experience that those flows deliver.

## Technical Architecture

### Rendering Approach

The application builds its canvas layout and connectors from scratch rather than depending on a graph library:

- **NodeCard.tsx**: Renders individual nodes using absolute positioning and node metadata from the flow data
- **Connectors.tsx**: Uses SVG cubic bezier paths to connect nodes smoothly
- **Canvas.tsx**: Coordinates node placement, selection, and interaction state

### State Handling

- React hooks manage local state for editing, selection, and preview behavior
- Flow data is loaded from the public JSON structure and updated in real time during editing
- The design remains lightweight while still supporting a polished interactive experience

### Data Structure

```json
{
  "nodes": [
    {
      "id": "unique-id",
      "type": "start|question|response|end",
      "text": "Node text content",
      "x": 150,
      "y": 250,
      "children": ["id1", "id2"]
    }
  ]
}
```

## Usage

### Edit Mode
1. Select a node on the canvas to focus it
2. Update the message text in the editor panel
3. Review the insights for that node in the lower panel
4. Press Enter or click outside the editor to save changes

### Preview Mode
1. Click the preview button to open the chat simulation
2. Traverse the conversation as a customer would
3. Restart the flow at any time to review the experience from the start

## Design Philosophy

### Simplicity First
- A restrained palette keeps the interface clear and focused
- Custom-built components avoid unnecessary complexity
- Semantic node types create an intuitive conversation structure

### User-Centered Experience
- Managers can understand and shape flows without technical training
- Inline editing makes changes feel direct and immediate
- Preview mode builds confidence before deployment

### Accessibility and Clarity
- Strong contrast and readable typography support accessibility
- Clear focus states and consistent spacing make the UI easier to navigate
- The layout is designed to remain understandable even as the flow grows more complex

## Installation & Deployment

### Local Development
```bash
pnpm install
pnpm dev
# App runs at http://localhost:3000
```

### Production Deployment
```bash
pnpm build
pnpm start
```

The application is built with Next.js 16 and can be deployed to modern Node hosting environments such as Vercel or AWS.

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout and metadata
│   ├── page.tsx            # Main page and flow orchestration
│   └── globals.css         # Global design tokens and theme styling
├── components/
│   ├── Canvas.tsx          # Main flow canvas
│   ├── NodeCard.tsx        # Individual node rendering
│   ├── Connectors.tsx      # SVG connector rendering
│   ├── ChatPreview.tsx     # Preview modal experience
│   └── EditorPanel.tsx     # Node editing panel
├── public/
│   └── flow_data.json      # Sample conversation flow data
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

## Technology Stack

- **Framework**: React 19 with Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom component styling
- **Type Safety**: TypeScript 5.7
- **Build**: Turbopack

## Submission Notes

This project is presentation-ready and includes:
- A complete visual builder experience
- A polished orange-based design language
- A clear wildcard insight feature with direct business relevance
- A printable design system reference for submission purposes

## License

MIT License - See LICENSE file for details
