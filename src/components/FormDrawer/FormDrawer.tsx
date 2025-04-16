import { Dialog, DialogPanel } from "@headlessui/react";
import { Candidate } from "../../types";
import CandidateFormPanel from "../CandidateForm/CandidateForm";

interface FormDrawerProps {
  editingCandidate: Candidate | null;
  isPanelOpen: boolean;
  setIsPanelOpen: (isOpen: boolean) => void;
  onSave: (candidate: Candidate) => void;
}

export default function FormDrawer({
  isPanelOpen,
  setIsPanelOpen,
  editingCandidate,
  onSave,
}: FormDrawerProps) {
  const handleSave = (candidate: Candidate) => {
    onSave(candidate);
    setIsPanelOpen(false);
  };

  const handleClose = () => {
    setIsPanelOpen(false);
  };

  return (
    <Dialog
      open={isPanelOpen}
      onClose={setIsPanelOpen}
      className="relative z-10"
    >
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-2 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-end">
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setIsPanelOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 cursor-pointer bg-gray-100"
                      >
                        <span className="absolute -inset-2.5" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8 text-gray-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <CandidateFormPanel
                    candidate={editingCandidate}
                    onClose={handleClose}
                    onSave={handleSave}
                  />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
