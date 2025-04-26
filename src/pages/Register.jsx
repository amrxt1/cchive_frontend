import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Container from "../components/shared/Container";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    bio: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.password_confirmation) {
      return setError("Passwords do not match.");
    }

    try {
      await register(
        form.email,
        form.password,
        form.first_name,
        form.last_name,
        form.bio
      );
      navigate("/feed");
    } catch (err) {
      console.log(err);
      setError("Registration Failed. Try again.");
    }
  };

  return (
    <Container className="h-screen">
      <div className="flex items-center h-full justify-center">
        <div>
          <h1 className="text-3xl font-bold pb-8">
            Create your CCHive Account
          </h1>

          {error && (
            <div className="mb-4 text-error font-semibold">{error}</div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-3 gap-y-4 gap-x-8"
          >
            <label className="col-span-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="col-span-2 border px-3 py-0.5 rounded"
            />

            <label>First Name</label>
            <input
              type="text"
              placeholder="First name"
              value={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              className="col-span-2 border px-3 py-0.5 rounded"
              required
            />

            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              className="col-span-2 border px-3 py-0.5 rounded"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="col-span-2 border px-3 py-0.5 rounded"
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password_confirmation}
              onChange={(e) =>
                setForm({ ...form, password_confirmation: e.target.value })
              }
              className="col-span-2 border px-3 py-0.5 rounded"
              required
            />

            <label>Bio (optional)</label>
            <textarea
              placeholder="Tell us a little about yourself..."
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              className="col-span-2 border px-3 py-0.5 rounded"
              rows={3}
            />

            <button
              type="submit"
              className="col-span-3 text-2xl bg-accent rounded 
              border-2 hover:bg-background hover:text-accent w-full "
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
