# Candidate Management Application

A React, TypeScript, and Tailwind CSS implementation for managing candidate data with table and card views, plus a form side panel.

## Overview

This application was developed as a technical assessment for the React Developer position at Imbue Business Services. It demonstrates:

- State management with React hooks
- TypeScript type safety
- Responsive UI with Tailwind CSS
- Form handling and validation
- Side panel/drawer implementation

## Features

- **Dual View Display**:
  - Tabular view of candidates
  - Card/grid view of candidates
- **Data Operations**:
  - Add new candidates
  - Edit existing candidates
  - Delete candidates
- **Form Panel**:
  - Slide-in side panel for add/edit operations
  - Form validation
  - Responsive design

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Headless UI (for accessible components)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/devsourabhsingh/candidate-management.git
   npm install
   npm run dev

```
/src
├── components/
│   ├── CandidateCard/          # Card view component
│   ├── CandidateTable/         # Table view component
│   ├── CandidateForm/          # Form component
│   └── FormDrawer/             # Side panel implementation
│   └── NavigationTab/          # Navigation tab implementation
├── types/
│   └── index.ts                # Type definitions  
├── App.tsx                     # Main application
└── index.tsx                   # Entry point
```

## 📸 Screenshots

Screenshots are included in the `screenshots/` directory:
- `table-view.png` – Displays the candidate list in table format.
- `card-view.png` – Shows candidate cards in grid layout.
- `add-panel.png` – Side panel in "Add Candidate" mode.
- `edit-panel.png` – Side panel in "Edit Candidate" mode with data pre-filled.
- `form-error.png` – Form error when details not filled.
