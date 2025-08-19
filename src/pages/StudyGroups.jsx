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
  const [showAvailable, setShowAvailable] = useState(false);

  if (isLoading)
    return (
      <p className="text-primary pt-4 text-lg font-bold">
        Loading Study Groups...
      </p>
    );

  return (
    <>
      <div>
        <div className="bg-surface my-4 flex items-center justify-between px-2 py-1">
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
      </div>

      <Container className="min-h-screen">
        <div className="grid grid-cols-2">
          <button
            className={
              !showAvailable
                ? "text-primary text-xl font-bold"
                : "text-text text-xl font-bold"
            }
            onClick={() => {
              setShowAvailable(false);
            }}
          >
            Joined Groups
          </button>
          <button
            className={
              showAvailable
                ? "text-primary text-xl font-bold"
                : "text-text text-xl font-bold"
            }
            onClick={() => {
              setShowAvailable(true);
            }}
          >
            Available
          </button>
        </div>

        {groups?.available &&
          showAvailable &&
          (groups.available.length === 0 ? (
            <div className="p-4 text-center text-lg italic">
              No Study Groups to join.
            </div>
          ) : (
            <ul className="flex flex-col gap-4 pt-4">
              {groups.available.map((group) => (
                <li
                  key={group.id}
                  className="bg-surface grid grid-cols-4 rounded-lg px-2 py-4"
                >
                  <div className="col-span-3">
                    <h3 className="text-2xl font-semibold">{group.name}</h3>
                    <p>{group.description}</p>
                  </div>
                  <button
                    onClick={() => handleJoin(group.id)}
                    className="text-surface bg-primary rounded-lg px-3 py-1 font-bold"
                  >
                    Join
                  </button>
                </li>
              ))}
            </ul>
          ))}
        {groups?.joined && !showAvailable && (
          <ul className="flex flex-col gap-4 pt-4">
            {groups.joined.map((group) => (
              <li
                key={group.id}
                className="bg-surface grid grid-cols-4 rounded-lg px-2 py-4"
              >
                <div className="col-span-3">
                  <h3 className="text-2xl font-semibold">{group.name}</h3>
                  <p>{group.description}</p>
                </div>
                <button
                  onClick={() => navigate(`/study_groups/${group.id}`)}
                  className="text-surface bg-primary rounded-lg px-3 py-1 font-bold"
                >
                  Chat
                </button>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
};

export default StudyGroups;
