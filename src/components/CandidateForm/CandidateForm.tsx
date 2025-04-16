import React, { useState, useEffect } from 'react';
import { Candidate } from '../../types';

interface Props {
  candidate: Candidate | null;
  onClose: () => void;
  onSave: (candidate: Candidate) => void;
}

const CandidateForm: React.FC<Props> = ({ candidate, onClose, onSave }) => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
  });

  useEffect(() => {
    if (candidate) {
      setForm({
        ...candidate,
        skills: candidate.skills.join(', '),
      });
    } else {
      setForm({ id: '', name: '', email: '', phone: '', skills: '', experience: '' });
    }
  }, [candidate]);

  const validate = () => {
    const newErrors: typeof errors = {
      name: '',
      email: '',
      phone: '',
      skills: '',
      experience: '',
    };

    if (!form.name) newErrors.name = 'Name is required.';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required.';
    if (!form.phone) newErrors.phone = 'Phone number is required.';
    if (!form.skills) newErrors.skills = 'Skills are required.';
    if (!form.experience) newErrors.experience = 'Experience is required.';

    setErrors(newErrors);
    return Object.values(newErrors).every(err => !err);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newCandidate: Candidate = {
      id: form.id,
      name: form.name,
      email: form.email,
      phone: form.phone,
      skills: form.skills.split(',').map(s => s.trim()),
      experience: form.experience,
    };
    onSave(newCandidate);
  };

  const renderInput = (name: keyof typeof form, label: string, type = 'text') => {
    const error = errors[name];
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        <div className="mt-2 grid grid-cols-1">
          <input
            id={name}
            name={name}
            type={type}
            value={form[name]}
            onChange={handleChange}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            className={`col-start-1 row-start-1 block w-full rounded-md bg-white md:py-1.5 py-1 pl-3 pr-10 text-base 
              ${error ? 'text-red-900 outline outline-1 outline-red-300 placeholder:text-red-300 focus:outline-red-600' : 'text-gray-900 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} 
              sm:pr-9 sm:text-sm`}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        </div>
        {error && (
          <p id={`${name}-error`} className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="fixed flex justify-end">
      <div className="bg-white w-full sm:w-[400px] p-6 pt-0 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">
          {candidate ? 'Edit Candidate' : 'Add Candidate'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {renderInput('name', 'Name')}
          {renderInput('email', 'Email', 'email')}
          {renderInput('phone', 'Phone')}
          {renderInput('skills', 'Skills (comma-separated)')}
          {renderInput('experience', 'Experience')}
          <div className="flex justify-between">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer">Save</button>
            <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateForm;
