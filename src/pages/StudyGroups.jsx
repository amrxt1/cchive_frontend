import { useState } from "react";
import { useStudyGroups } from "../hooks/useStudyGroups";
import { useCreateStudyGroup } from "../hooks/useCreateStudyGroup";
import { useJoinStudyGroup } from "../hooks/useJoinStudyGroup";
import { useNavigate } from "react-router-dom";
import Container from "../components/shared/Container";

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
        navigate(`/study_groups/${id}`);
      },
    });
  };

  return (
    <Container className="min-h-screen">
      {console.log(groups)}
      <div>
        <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
          Study Groups{" "}
        </h1>

        <div className="grid grid-cols-2 gap-8 pt-4 ">
          <div>
            <div className="flex items-baseline gap-2 ">
              <h2 className="text-2xl font-semibold text-primary">
                Available Groups
              </h2>
              <button
                className="hover:cursor-pointer hover:bg-accent/70 font-bold
                                 bg-accent/50 text-primary px-4 rounded-lg "
              >
                Create New
              </button>
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
                      className="text-primary bg-surface px-3 py-1 rounded-lg"
                    >
                      Join
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary">
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
                      className="text-primary bg-surface px-3 py-1 rounded-lg"
                    >
                      Chat
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="hidden">
            <h2>Create New Group</h2>
            <div>
              <form onSubmit={handleCreate} className="space-y-4">
                <div>
                  <label>Group Name</label>
                  <input
                    placeholder="Quantum Mechanics Enthusiasts"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label>Description</label>
                  <textarea
                    placeholder="We solve problem sets and drink too much coffee"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                  />
                </div>

                <button type="submit">Create Group</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StudyGroups;
