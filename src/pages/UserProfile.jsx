import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';

const UserProfile = () => {
  const { username } = useParams();

  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user', username],
    queryFn: async () => {
      const res = await api.get(`/users/${username}`);
      return res.data;
    }
  });

  if (isLoading) return <p>Loading user...</p>;
  if (error) return <p>Could not load user.</p>;

  return (
    <div >
      <h1 >{user.first_name} {user.last_name}</h1>
      <p >@{user.username}</p>
      <p >{user.bio}</p>
      <p>📧 Email &nbsp;
        <a
          href={`mailto:${user.email}`}
          >@{user.username}
        </a>
      </p>


      {user.tutor_profile && (
        <div >
          <h2 >Tutor Subjects</h2>
          <ul >
            {user.tutor_profile.subjects.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}

      {user.listings?.length > 0 && (
        <div >
          <h2 >Marketplace Listings</h2>
          <ul >
            {user.listings.map((l) => (
              <li key={l.id} >
                <h3 >{l.title}</h3>
                <p>{l.description}</p>
                <p >${l.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
