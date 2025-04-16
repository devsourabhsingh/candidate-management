import { useState } from "react";
import { Candidate } from "./types";
import CandidateTable from "./components/CandidateTable/CandidateTable";
import CandidateCard from "./components/CandidateCard/CandidateCard";
import NavigationTab from "./components/NavigationTab/NavigationTab";
import { v4 as uuidv4 } from "uuid";
import Drawer from "./components/FormDrawer/FormDrawer";

const initialCandidates: Candidate[] = [
  {
    id: uuidv4(),
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "123-456-7890",
    skills: ["React", "TypeScript"],
    experience: "3 years",
  },
  {
    id: uuidv4(),
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "234-567-8901",
    skills: ["Angular", "JavaScript"],
    experience: "2 years",
  },
  {
    id: uuidv4(),
    name: "Clara Oswald",
    email: "clara@example.com",
    phone: "345-678-9012",
    skills: ["Vue", "HTML", "CSS"],
    experience: "4 years",
  },
  {
    id: uuidv4(),
    name: "Dan Brown",
    email: "dan@example.com",
    phone: "456-789-0123",
    skills: ["Node.js", "Express"],
    experience: "5 years",
  },
  {
    id: uuidv4(),
    name: "Eva Green",
    email: "eva@example.com",
    phone: "567-890-1234",
    skills: ["Python", "Django"],
    experience: "6 years",
  },
];

function App() {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [editingCandidate, setEditingCandidate] = useState<Candidate | null>(
    null
  );
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleSave = (candidate: Candidate) => {
    if (candidate.id && candidates.find((c) => c.id === candidate.id)) {
      setCandidates((prev) =>
        prev.map((c) => (c.id === candidate.id ? candidate : c))
      );
    } else {
      setCandidates((prev) => [...prev, { ...candidate, id: uuidv4() }]);
    }
    setIsPanelOpen(false);
    setEditingCandidate(null);
  };

  const handleDelete = (id: string) => {
    setCandidates((prev) => prev.filter((c) => c.id !== id));
  };

  const tabData = [
    {
      label: "Table Format",
      content: (
        <CandidateTable
          candidates={candidates}
          onEdit={(c) => {
            setEditingCandidate(c);
            setIsPanelOpen(true);
          }}
          onDelete={handleDelete}
        />
      ),
    },
    {
      label: "Card Format",
      content: (
        <CandidateCard
          candidates={candidates}
          onEdit={(c) => {
            setEditingCandidate(c);
            setIsPanelOpen(true);
          }}
        />
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Candidate Management</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => {
            setEditingCandidate(null);
            setIsPanelOpen(true);
          }}
        >
          Add Candidate
        </button>
      </div>
      <NavigationTab tabs={tabData} />
      <Drawer
        onSave={handleSave}
        isPanelOpen={isPanelOpen}
        setIsPanelOpen={setIsPanelOpen}
        editingCandidate={editingCandidate}
      />
    </div>
  );
}

export default App;
