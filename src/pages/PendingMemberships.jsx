import { Link } from "react-router-dom";
import { useMyPendingMemberships } from "../hooks/usePendingMemberships";
import { useApproveMember } from "../hooks/useApproveMember";
import Container from "../components/shared/Container";

const PendingMemberships = () => {
  const { data: pending = [], isLoading } = useMyPendingMemberships();
  const { mutate: approve } = useApproveMember();

  if (isLoading)
    return (
      <p className="p-4 text-center text-3xl font-bold italic">
        Loading pending requests...
      </p>
    );

  return (
    <Container className="min-h-screen py-8">
      <h1 className="text-primary mb-6 text-3xl font-bold">
        Pending Membership Requests
      </h1>

      {!pending.length && (
        <p className="p-4 text-center text-3xl font-bold italic">
          No pending requests.
        </p>
      )}

      {pending.length !== 0 && (
        <ul className="space-y-4">
          {pending.map((m) => (
            <li
              key={m.id}
              className="bg-surface border-border flex items-center justify-between rounded-xl border p-4"
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
                    className="text-accent underline"
                  >
                    {m.group_name}
                  </Link>
                </p>
              </div>
              <button
                onClick={() =>
                  approve({ groupId: m.group_id, membershipId: m.id })
                }
                className="bg-accent text-background hover:bg-accent/80 rounded-lg px-4 py-2 font-semibold"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default PendingMemberships;
