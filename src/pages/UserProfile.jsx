import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";
import Container from "../components/shared/Container";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", username],
    queryFn: async () => {
      const res = await api.get(`/users/${username}`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading user...</p>;
  if (error) return <p>Could not load user.</p>;

  return (
    <Container className="mt-4 min-h-screen">
      <div className="grid grid-cols-3">
        <h1 className="text-primary col-span-2 text-2xl font-bold">
          {user.first_name} {user.last_name}
          <span className="text-lg"> @{user.username}</span>
        </h1>
        <p className="flex items-center justify-end font-bold">
          <a
            href={`mailto:${user.email}`}
            className="bg-primary text-surface rounded-md px-4 py-1"
          >
            📧 Email
          </a>
        </p>
      </div>

      {user.bio && (
        <div className="mt-4">
          <p className="text-text/60 text-sm">Bio</p>
          <p className="p">{user.bio}</p>
        </div>
      )}

      {user.tutor_profile && (
        <div className="bg-surface mt-4 rounded-md p-4">
          <h2 className="text-primary text-xl font-bold">Tutoring Subjects</h2>
          <ul>
            {user.tutor_profile.subjects.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}

      {user.listings?.length > 0 && (
        <div className="bg-surface mt-4 rounded-md p-4">
          <h2 className="text-primary text-xl font-bold">
            Marketplace Listings
          </h2>
          <ul>
            {user.listings.map((l) => (
              <li key={l.id} className="bg-background mt-2 rounded-md p-2">
                <h3 className="text-primary font-bold">{l.title}</h3>
                <p className="text-text/70">{l.description}</p>
                <p className="text-primary">${l.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default UserProfile;
