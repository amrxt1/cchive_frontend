import { useState } from 'react';
import { useMyTutorProfile } from '../hooks/useMyTutorProfile';
import { useCreateTutorProfile } from '../hooks/useCreateTutorProfile';
import { Link } from 'react-router-dom';

const TutorProfileSetup = () => {
  const { data: profile, isLoading } = useMyTutorProfile();
  const [subjects, setSubjects] = useState('');
  const { mutate, isLoading: creating, isError } = useCreateTutorProfile();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectList = subjects.split(',').map((s) => s.trim()).filter(Boolean);
    mutate({ tutor_profile: { subjects: subjectList } });
  };

  if (isLoading) return <p className="text-center py-10 text-muted">Loading profile status...</p>;

  if (profile) {
    return (
      <div className="max-w-lg mx-auto py-10 px-6">
        <h1 className="text-2xl font-bold mb-4">You're a Tutor 🎓</h1>
        <p className="text-gray-600 mb-2">Subjects:</p>
        <ul className="list-disc list-inside mb-6">
          {profile.subjects.map((subj, i) => (
            <li key={i}>{subj}</li>
          ))}
        </ul>

        <Link
          to="/tutoring/request"
          className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Need Tutoring Instead?
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-4">Become a Tutor 🎓</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Subjects (comma separated)</span>
          <input
            className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-primary"
            type="text"
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
            placeholder="Math, Physics, Chemistry"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition"
          disabled={creating}
        >
          {creating ? 'Submitting...' : 'Create Tutor Profile'}
        </button>
        {isError && <p className="text-red-500 text-sm">Something went wrong.</p>}
      </form>
    </div>
  );
};

export default TutorProfileSetup;
