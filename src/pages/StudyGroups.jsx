import { useState } from "react";
import { useStudyGroups } from "../hooks/useStudyGroups";
import { useCreateStudyGroup } from "../hooks/useCreateStudyGroup";
import { useJoinStudyGroup } from "../hooks/useJoinStudyGroup";
import { useNavigate } from "react-router-dom";
import Container from "../components/shared/Container";
import { Link } from "react-router-dom";

function CreateStudyGroupForm({
  name,
  setName,
  description,
  setDescription,
  handleCreate,
}) {
  return (
    <div className="bg-surface mt-2 rounded-md px-2 py-4">
      <h2 className="text-primary text-xl font-bold">Create New Group</h2>
      <form onSubmit={handleCreate} className="grid gap-y-2 py-2">
        <input
          className="bg-background text-md rounded-md px-2 py-1"
          placeholder="Name: Quantum Mechanics Enthusiasts"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          className="bg-background text-md resize-none rounded-md px-2 py-1"
          placeholder="Description: We solve problem sets and drink too much coffee"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
        />

        <button
          type="submit"
          className="bg-primary text-surface mt-2 w-full rounded-lg px-2 py-1 text-lg font-bold"
        >
          Create Group
        </button>
      </form>
    </div>
  );
}

const StudyGroups = () => {
  const { data: groups, isLoading } = useStudyGroups();
  const { mutate: createGroup } = useCreateStudyGroup();
  const { mutate: joinGroup } = useJoinStudyGroup();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    createGroup({ study_group: { name, description } });
    setName("");
    setDescription("");
  };

  const handleJoin = (id) => {
    joinGroup(id, {
      onSuccess: () => {
        alert("Join request sent! Waiting for approval.");
      },
      onError: () => {
        alert("Could not send join request.");
      },
    });
  };
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Container className="min-h-screen">
      <div>
        <div className="flex items-center justify-between pt-4">
          <h1 className="text-primary text-3xl font-bold">Study Groups </h1>
          <div className="grid gap-y-1">
            <Link
              to={"/approve_memberships"}
              className="bg-primary text-surface w-full rounded-lg px-2 py-1 text-lg font-bold"
            >
              Approve Memberships
            </Link>
            <button
              className="bg-primary text-surface w-full rounded-lg px-2 py-1 text-lg font-bold"
              onClick={() => {
                setFormOpen(!formOpen);
              }}
            >
              {formOpen ? "Cancel" : "Create New"}
            </button>
          </div>
        </div>
        {formOpen && (
          <CreateStudyGroupForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            handleCreate={handleCreate}
          />
        )}

        <div className="grid grid-cols-2 gap-8 pt-4">
          <div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-primary text-2xl font-semibold">
                Available Groups
              </h2>
            </div>
            {isLoading ? (
              <p className="text-gray-500">Loading...</p>
            ) : (
              <ul className="flex flex-col gap-4 pt-4">
                {groups.available.map((group) => (
                  <li key={group.id}>
                    <h3 className="text-2xl font-semibold">{group.name}</h3>
                    <p>{group.description}</p>
                    <button
                      onClick={() => handleJoin(group.id)}
                      className="text-primary bg-surface rounded-lg px-3 py-1"
                    >
                      Join
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="text-primary text-2xl font-semibold">
              Joined Groups
            </h2>
            {isLoading ? (
              <p className="text-gray-500">Loading...</p>
            ) : (
              <ul className="flex flex-col gap-4 pt-4">
                {groups.joined.map((group) => (
                  <li key={group.id}>
                    <h3 className="text-2xl font-semibold">{group.name}</h3>
                    <p>{group.description}</p>
                    <button
                      onClick={() => navigate(`/study_groups/${group.id}`)}
                      className="text-primary bg-surface rounded-lg px-3 py-1"
                    >
                      Chat
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StudyGroups;
