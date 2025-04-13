import { useState } from 'react';
import { useStudyGroups } from '../hooks/useStudyGroups';
import { useCreateStudyGroup } from '../hooks/useCreateStudyGroup';
import { useJoinStudyGroup } from '../hooks/useJoinStudyGroup';
import { useNavigate } from 'react-router-dom';

const StudyGroups = () => {
  const { data: groups, isLoading } = useStudyGroups();
  const { mutate: createGroup } = useCreateStudyGroup();
  const { mutate: joinGroup } = useJoinStudyGroup();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    createGroup({ study_group: { name, description } });
    setName('');
    setDescription('');
  };

  const handleJoin = (id) => {
    joinGroup(id, {
      onSuccess: () => {
        navigate(`/study_groups/${id}`);
      },
    });
  };

  return (
    <div >
      <h1 >Study Groups</h1>

      <div >
        <div>
          <h2 >Available Groups</h2>
          {isLoading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <ul >
              {groups.map((group) => (
                <li key={group.id} >
                  <h3 >{group.name}</h3>
                  <p >{group.description}</p>
                  <button
                    onClick={() => handleJoin(group.id)}
                  >
                    Join
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 >Create New Group</h2>
          <div >
            <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label >Group Name</label>
              <input
                placeholder="Quantum Mechanics Enthusiasts"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label >Description</label>
              <textarea
                placeholder="We solve problem sets and drink too much coffee"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
              />
            </div>

            <button
              type="submit"
            >
              Create Group
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyGroups;
