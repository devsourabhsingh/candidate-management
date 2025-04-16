import React from "react";
import { Candidate } from "../../types/index";

interface Props {
  candidates: Candidate[];
  onEdit: (candidate: Candidate) => void;
}

const CandidateCard: React.FC<Props> = ({ candidates, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {candidates.map((c) => (
        <div
          key={c.id}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {c.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Email:</strong> {c.email}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Phone:</strong> {c.phone}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Skills:</strong> {c.skills.join(", ")}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Experience:</strong> {c.experience}
          </p>
          <button
            type="button"
            onClick={() => onEdit(c)}
            className="rounded bg-blue-50 cursor-pointer px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-100"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default CandidateCard;
