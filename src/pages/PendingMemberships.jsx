import { Link } from "react-router-dom";
import { useMyPendingMemberships } from "../hooks/usePendingMemberships";
import { useApproveMember } from "../hooks/useApproveMember";
import Container from "../components/shared/Container";

const PendingMemberships = () => {
  const { data: pending = [], isLoading } = useMyPendingMemberships();
  const { mutate: approve } = useApproveMember();

  if (isLoading) return <p className="p-4">Loading pending requests...</p>;
  if (!pending.length) return <p className="p-4">No pending requests.</p>;

  return (
    <Container className="min-h-screen py-8">
      {console.log(pending)}
      <h1 className="text-3xl font-bold text-primary mb-6">
        Pending Membership Requests
      </h1>
      <ul className="space-y-4">
        {pending.map((m) => (
          <li
            key={m.id}
            className="bg-surface border border-border rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                <Link
                  to={"/user/" + m.username}
                  className="text-primary font-bold hover:underline"
                >
                  {m.first_name} {m.last_name} (@{m.username})
                </Link>
              </p>
              <p className="text-muted">
                wants to join{" "}
                <Link
                  to={`/study_groups/${m.group_id}`}
                  className="underline text-accent"
                >
                  {m.group_name}
                </Link>
              </p>
            </div>
            <button
              onClick={() =>
                approve({ groupId: m.group_id, membershipId: m.id })
              }
              className="bg-accent text-background font-semibold px-4 py-2 rounded-lg hover:bg-accent/80"
            >
              Approve
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PendingMemberships;
