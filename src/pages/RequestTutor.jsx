import Container from "../components/shared/Container";
import { useState } from "react";
import { useTutors } from "../hooks/useTutors";
import { useBookAppointment } from "../hooks/useBookAppointment";

const RequestTutor = () => {
  const { data: tutors, isLoading } = useTutors();
  const {
    mutate,
    isLoading: sending,
    isError,
    isSuccess,
  } = useBookAppointment();

  const [selectedTutorId, setSelectedTutorId] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [notes, setNotes] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const selectedTutor = tutors?.find((t) => t.id === parseInt(selectedTutorId));

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      appointment: {
        tutor_profile_id: selectedTutorId,
        appointment_time: appointmentTime,
        notes,
      },
    });
  };

  return (
    <Container className="min-h-screen">
      <h1 className="text-primary mt-4 text-2xl font-bold">
        Request a Tutor 🎓
      </h1>

      {isLoading ? (
        <p className="mt-4 text-center text-lg font-bold">Loading tutors...</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-surface mt-2 grid gap-y-2 rounded-lg px-2 py-4"
        >
          <div>Choose a Tutor</div>
          <select
            value={selectedTutorId}
            onChange={(e) => {
              setSelectedTutorId(e.target.value);
              setSelectedSubject("");
            }}
            className="bg-background text-md w-full rounded-md px-2 py-1"
            required
          >
            <option value="">Select Tutor</option>
            {tutors.map((tutor) => (
              <option key={tutor.id} value={tutor.id}>
                {tutor.tutor_name}
              </option>
            ))}
          </select>

          {selectedTutor && (
            <>
              <div>Choose a Subject</div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-background text-md w-full rounded-md px-2 py-1"
                required
              >
                <option value="">-- Select Subject --</option>
                {selectedTutor.subjects.map((subj, i) => (
                  <option key={i} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </>
          )}

          <div>Pick a Time</div>
          <input
            type="datetime-local"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            className="bg-background text-md w-full rounded-md px-2 py-1"
            required
          />

          <div>Notes (optional)</div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="bg-background text-md w-full resize-none rounded-md px-2 py-1"
            rows={6}
          />

          <button
            type="submit"
            disabled={sending}
            className="bg-primary text-surface mt-2 w-full rounded-lg px-4 py-1 text-lg font-bold"
          >
            {sending ? "Sending request..." : "Request Appointment"}
          </button>

          {isSuccess && <p className="text-green-600">Request sent!</p>}
          {isError && <p className="text-red-600">Something went wrong.</p>}
        </form>
      )}
    </Container>
  );
};

export default RequestTutor;
