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

  if (isLoading) return <p >Loading profile status...</p>;

  if (profile) {
    return (
      <div >
        <h1 >You're a Tutor 🎓</h1>
        <p >Subjects:</p>
        <ul >
          {profile.subjects.map((subj, i) => (
            <li key={i}>{subj}</li>
          ))}
        </ul>

        <Link
          to="/tutoring/request"
        >
          Need Tutoring Instead?
        </Link>
      </div>
    );
  }

  return (
    <div >
      <h1 >Become a Tutor 🎓</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Subjects (comma separated)</span>
          <input
            type="text"
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
            placeholder="Math, Physics, Chemistry"
            required
          />
        </label>
        <button
          type="submit"
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
