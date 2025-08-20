import { useState } from "react";
import { useMyTutorProfile } from "../hooks/useMyTutorProfile";
import { useCreateTutorProfile } from "../hooks/useCreateTutorProfile";
import { Link } from "react-router-dom";
import Container from "../components/shared/Container";

const TutorProfileSetup = () => {
  const { data: profile, isLoading } = useMyTutorProfile();
  const [subjects, setSubjects] = useState("");
  const { mutate, isLoading: creating, isError } = useCreateTutorProfile();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectList = subjects
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    mutate({ tutor_profile: { subjects: subjectList } });
  };

  if (isLoading)
    return (
      <p className="mt-4 text-center text-xl italic">
        Loading profile status...
      </p>
    );

  if (profile) {
    return (
      <Container className="min-h-screen">
        <div>
          <h1 className="text-primary mt-4 text-2xl font-bold">
            You are a Tutor 🎓
          </h1>
          <p className="text-primary mt-4 text-lg font-bold">
            Subjects selected:
          </p>
          <ul className="bg-surface space-y-2 rounded-lg px-2 py-4">
            {profile.subjects.map((subj, i) => (
              <li key={i} className="text-md">
                {subj}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <Link
            to="/tutoring/request"
            className="text-primary font-bold underline"
          >
            Need Tutoring Instead?
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="min-h-screen">
      <h1 className="text-primary mt-4 text-2xl font-bold">Become a Tutor </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-surface mt-4 grid grid-cols-1 gap-y-4 rounded-md px-2 py-4"
      >
        <div className="text-text/70 space-y-2">
          <p>
            Our community could always benefit from volunteer work, which is why
            we try to arrange a platform for students to setup tutoring
            sessions.
          </p>
          <p>
            Although the system lets students to apply for a tutoring session
            with Tutors, it is not an obligation for the Tutors. Therefore, an
            email is sent to the Tutor when someone wants to get tutored, but
            there is no such thing as an "appointment." It is upto the both
            parties to communicate with each other if they are available.
          </p>
          <p>
            We appreciate you setting up profile. Enter the simple form below to
            continue.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <input type="checkbox" id="acknowledge" required className="mt-1" />
          <label htmlFor="acknowledge" className="text-sm">
            I understand this is a volunteer platform with no payment involved,
            and I am not obligated to accept any tutoring requests.
          </label>
        </div>
        <div>
          <label className="text-lg font-bold">
            Subjects You Want to Tutor:
          </label>
          <p className="text-text/60 mt-1 text-sm">
            Separate multiple subjects with commas
          </p>
        </div>
        <input
          type="text"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          placeholder="e.g., Calculus, Organic Chemistry, Data Structures"
          className="bg-background text-md w-full rounded-md px-2 py-1"
          required
        />
        <button
          type="submit"
          disabled={creating}
          className="bg-primary text-surface w-full rounded-lg px-4 py-1 text-lg font-bold"
        >
          {creating ? "Submitting..." : "Create Tutor Profile"}
        </button>

        {isError && (
          <p className="text-sm text-red-500">Something went wrong.</p>
        )}
      </form>
    </Container>
  );
};

export default TutorProfileSetup;
