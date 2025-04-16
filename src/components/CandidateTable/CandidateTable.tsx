import React from "react";
import { Candidate } from "../../types/index";

interface Props {
  candidates: Candidate[];
  onEdit: (candidate: Candidate) => void;
  onDelete: (id: string) => void;
}

const CandidateTable: React.FC<Props> = ({ candidates, onEdit, onDelete }) => {
  return (
    <div className="relative overflow-x-auto mt-4 border border-gray-200 rounded-lg shadow-sm">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-sm">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Skills
            </th>
            <th scope="col" className="px-6 py-3">
              Experience
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr
              key={c.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 shadow-sm"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {c.name}
              </td>
              <td className="px-6 py-4">{c.email}</td>
              <td className="px-6 py-4">{c.phone}</td>
              <td className="px-6 py-4">{c.skills.join(", ")}</td>
              <td className="px-6 py-4">{c.experience}</td>
              <td className="px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onEdit(c)}
                    className="rounded bg-blue-50 cursor-pointer px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-100 w-full sm:w-auto"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(c.id)}
                    className="rounded bg-red-50 cursor-pointer md:ml-5 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-100 w-full sm:w-auto"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateTable;
